#!/usr/bin/env node
 // -*- coding: utf-8 -*-
//===============================================================================
//
// Copyright (c) 2017 <> All Rights Reserved
//
//
// File: /Users/hain/git/logstash-send/index.js
// Author: Hai Liang Wang
// Date: 2019-01-20:19:50:21
//
//===============================================================================
/**
 *
 */
const argv = process.argv;
const curdir = __dirname;
const http = require('http');
// read config in env
const LOGSTASH_IP = process.env['LOGSTASH_IP'];
const LOGSTASH_PORT = process.env['LOGSTASH_PORT'];
const LOGSTASH_QUIET = process.env['LOGSTASH_QUIET'];
const ENABLED = (LOGSTASH_IP && LOGSTASH_PORT) ? true : false;
const QUIET = ((LOGSTASH_QUIET == 'false') || LOGSTASH_QUIET == false) ? false : true;


if (LOGSTASH_IP && LOGSTASH_PORT) {
    console.log("[INFO] logstash setting: " + LOGSTASH_IP + ":" + LOGSTASH_PORT);
} else {
    console.log("[WARN] logstash setting is missing.");
}

function _send(data) {
    if (ENABLED) {
        var post_data = JSON.stringify(data);
        var post_options = {
            host: LOGSTASH_IP,
            port: LOGSTASH_PORT,
            path: '/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(post_data)
            }
        };

        var post_req = http.request(post_options);
        post_req.on('error', (e) => {
            if (QUIET) {
                // ignore all errors.
            } else {
                console.log(e);
            }
        })

        // post the data
        post_req.write(post_data);
        post_req.end();
    }
}


module.exports = exports = _send;