'use strict';
var memeImgId = parseInt(sessionStorage.getItem('memeImgId'))
console.log('memeImgId',memeImgId);
var gMemes = [{
    selectedImgId: memeImgId,
    selectedLineIdx: 0,
    lines: [{txt:'I thought I wanted to sleep'}]
}]

console.log('gMemes',gMemes);


