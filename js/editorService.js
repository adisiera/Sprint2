'use strict';
var memeImgId = parseInt(sessionStorage.getItem('memeImgId'))
var gMemes = [{
    selectedImgId: memeImgId,
    selectedLineIdx: 0,
    lines: [{
        txt: '',
        size: 30,
        align: 'left',
        color: 'black'
    }]
}]

console.log('gMemes', gMemes);

function getTextForDisplay(){
    return gMemes[0].lines[0].txt
}

function addText(memeText){
    gMemes[0].lines[0].txt = memeText;
}

function getMeme() {
   
    return gMemes;
}