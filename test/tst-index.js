/**
 * Test
 */

const test = require("ava");
process.env["LOGSTASH_IP"] = "venus";
process.env["LOGSTASH_PORT"] = 4999;
process.env["LOGSTASH_QUIET"] = false;

const logstash = require("../index");

const wait = function (seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
};

test("Test send", async (t) => {
  await logstash({
    // lg_pattern_prefix: "hello",
    hello: "sssss11",
  });

  await wait(1);

  t.pass();
});
