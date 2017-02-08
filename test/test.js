/**
 * Copyright (C) 2017 yanni4night.com
 * test.js
 *
 * changelog
 * 2017-02-08[17:45:18]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
var timeoutify = require('../');
var assert = require('assert');

describe('timeoutify', function () {
    it('should fail if timeout', function (done) {
        this.timeout(1e3);
        timeoutify(new Promise(function (resolve) {
            setTimeout(resolve, 500)
        }), 200).catch(function () {
            done();
        });
    });
    it('should success if resolved in time', function (done) {
        timeoutify(new Promise(function (resolve) {
            resolve(80);
        }), 1e3).then(function (data) {
            assert.deepEqual(data, 80);
            done();
        });
    });
});