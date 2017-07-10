# timeoutify-promise
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url]

Wrap a promise with timeout property.

## usage

```js
var timeoutify = require(timeoutify-promise);

timeoutify(getPromise(), 2000).then().catch()
```

## changelog

Check out [CHANGELOG.md](CHANGELOG.md).

## license

MIT

[npm-url]: https://npmjs.org/package/timeoutify-promise
[downloads-image]: http://img.shields.io/npm/dm/timeoutify-promise.svg
[npm-image]: http://img.shields.io/npm/v/timeoutify-promise.svg
[travis-url]: https://travis-ci.org/yanni4night/timeoutify-promise
[travis-image]: http://img.shields.io/travis/yanni4night/timeoutify-promise.svg
[david-dm-url]:https://david-dm.org/yanni4night/timeoutify-promise
[david-dm-image]:   https://img.shields.io/david/yanni4night/timeoutify-promise.svg