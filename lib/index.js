// ==UserScript==
// @name         youtube music 手机网页版适配
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const viewport = document.querySelector(`meta[name='viewport']`)
    // console.log(viewport)
    if (viewport) {
        viewport.content = 'width=1080, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    }
    // Your code here...
})();