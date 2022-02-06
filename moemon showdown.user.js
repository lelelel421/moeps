// ==UserScript==
// @name         moemon showdown
// @namespace    http://tampermonkey.net/
// @version      420.69
// @description  moe moe moe
// @author       leleleleleleleelelelelelelelel
// @match        https://*.pokemonshowdown.com/*
// @icon         https://raw.githubusercontent.com/lelelel421/moeps/main/favicon.ico
// ==/UserScript==

var interval = 0.25;

function imgReplace() {
    var images = document.getElementsByTagName('img'),
        len = images.length, img, i;
    for (i = 0; i < len; i += 1) {
        img = images[i];
        img.src = img.src.replace('https://play.pokemonshowdown.com/sprites/gen1/', 'https://raw.githubusercontent.com/lelelel421/moeps/main/front/');
        img.src = img.src.replace('https://play.pokemonshowdown.com/sprites/gen1-back/', 'https://raw.githubusercontent.com/lelelel421/moeps/main/back/');
    }
}

setInterval(imgReplace, interval * 1000);