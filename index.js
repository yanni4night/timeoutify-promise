/**
 * Copyright (C) 2017 yanni4night.com
 * index.js
 *
 * changelog
 * 2017-02-08[17:40:07]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';

module.exports = function (promise, timeout) {
    return Promise.race([promise, new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error('Promise time out of ' + timeout + 'ms'));
        }, timeout);
    })]);
};
