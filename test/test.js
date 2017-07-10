/**
 * Copyright (C) 2017 yanni4night.com
 * test.js
 *
 * changelog
 * 2017-02-08[17:45:18]:revised
 * 2017-07-10[18:33:15]:test 0
 *
 * @author yanni4night@gmail.com
 * @version 0.2.0
 * @since 0.1.0
 */
'use strict';
var timeoutify = require('../');
var assert = require('assert');

describe('timeoutify', function () {
    it('should fail if timeout', function (done) {
        var start = Date.now();
        timeoutify(new Promise(function (resolve) {
            setTimeout(resolve, 500);
        }), 200).catch(function () {
            assert.deepEqual(Date.now() - start < 500, true);
            done();
        });
    });
    it('should success if resolved in time', function (done) {
        var start = Date.now();
        timeoutify(new Promise(function (resolve) {
            setTimeout(resolve, 500);
        }), 1e3).then(function () {
            done();
        });
    });
    it('0/null/undefined means no timeout', function (done) {
        var start = Date.now();
        timeoutify(new Promise(function (resolve) {
            setTimeout(resolve, 1500);
        })).then(function (data) {
            assert.deepEqual(Date.now() - start > 1500, true);
            done();
        });
    });
});