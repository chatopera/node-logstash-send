# node-logstash-send

Fast send to logstash, ignore error, bypass waiting.

[![chatoper banner][co-banner-image]][co-url]

[co-banner-image]: https://user-images.githubusercontent.com/3538629/42383104-da925942-8168-11e8-8195-868d5fcec170.png
[co-url]: https://www.chatopera.com

## Install

```
npm install -s node-logstash-send
```

## Configuration

* Logstash

Example of *logstash/pipeline/logstash.conf*.


```
input {
        http {
                host => "0.0.0.0"
                port => "4999"
        }
}

## Add your filters / logstash plugins configuration here

output {
        elasticsearch {
                hosts => "elasticsearch:9200"
        }
}
```

* Set Environment variables.

```
export LOGSTASH_IP=xx
export LOGSTASH_PORT=1111
export LOGSTASH_QUIET=false
```

## Usage

Send your interests.

```
process.env["LOGSTASH_IP"] = "venus";
process.env["LOGSTASH_PORT"] = 49991
var logstash = require('node-logstash-send')
logstash({
    hello: "bar"
    })
```

Notice, **it would ignore the error if send failed, to see errors, set** `LOGSTASH_QUIET`  **as** `true` **.**

### what you get in Kibana

![image](https://user-images.githubusercontent.com/3538629/51439851-fe939f80-1cfa-11e9-8b52-73b2fc2dceb9.png)

## ELK

Setup ELK Services with
```
https://github.com/samurais/docker-elk
```

## 开源许可协议

Copyright (2019) 北京华夏春松科技有限公司

[MIT](./LICENSE)


