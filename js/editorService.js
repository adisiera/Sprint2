'use strict';
const SAVE_KEY = 'memes';

var memeImgId = parseInt(sessionStorage.getItem('memeImgId'))
var gMemes = [];
var gSavedMemes = [];

//LIST

function getSavedMemes(){
    console.log('entered getSavedMemes');
    var memes = loadFromStorage(SAVE_KEY)
    return memes
}

function getMemeToSave(url){
    var memes = loadFromStorage(SAVE_KEY)
    gMemes.memeUrl = url
    if (!memes || !memes.length){
       saveToStorage(SAVE_KEY, [gMemes])   
    } else {
        memes.push(gMemes)
        saveToStorage(SAVE_KEY, memes)
    }
}

// DELETE

function removeLine(){
    gMemes.lines.splice(gMemes.selectedLineIdx, 1)
    var currLine = gMemes.selectedLineIdx - 1;
    if (currLine < 0) currLine = 0;
    return currLine;
}

// UPDATE

function switchLines() {
    if (!getLines().length) return;
    gMemes.selectedLineIdx++;
    if (gMemes.selectedLineIdx >= gMemes.lines.length) {
        gMemes.selectedLineIdx = 0;
    }
}

function changeStrokeColor(color){
    console.log('entered changeStrokeColor');
    gMemes.lines[gMemes.selectedLineIdx].strokeColor = color
}
function changeFillColor(color){
    console.log('entered changeFillColor');
    gMemes.lines[gMemes.selectedLineIdx].color = color
}

function changeFont(font){
    gMemes.lines[gMemes.selectedLineIdx].fontFamily = font;
}

function changeTextAlign(val){
    console.log('entered changeTextAlign');
    switch(val){
        case 'align-left':
            gMemes.lines[gMemes.selectedLineIdx].align = 'left';
            gMemes.lines[gMemes.selectedLineIdx].x = 10;
            break;
        case 'align-center':
            gMemes.lines[gMemes.selectedLineIdx].align = 'center';
            gMemes.lines[gMemes.selectedLineIdx].x = gCanvas.width / 2;
            break;
        case 'align-right':
            gMemes.lines[gMemes.selectedLineIdx].align = 'right';
            gMemes.lines[gMemes.selectedLineIdx].x = gCanvas.width - 10;
            break;
        case 'move-up':
            gMemes.lines[gMemes.selectedLineIdx].y -= 5;
            break;
        case 'move-down':
            gMemes.lines[gMemes.selectedLineIdx].y += 5;
            break;
    }
}

// READ

function addText(memeText){
    gMemes.lines[gMemes.selectedLineIdx].txt = memeText;
}

function getLines() {
    return gMemes.lines;
}

function getMeme() {
    return gMemes;
}


// CREATE

function addLine(txt='first line', x, y=50){
    console.log('entered addLine',txt);
    var line = {
        txt,
        size: 25,
        align: 'center',
        color: '#ffffff',
        strokeColor: '#000000',
        fontFamily: 'Impact',
        x,
        y,
    }
    gMemes.lines.push(line)
}

function createMeme(){
    gMemes = {
        selectedImgId: memeImgId,
        selectedLineIdx: 0,
        lines: []
    }
    console.log('gMemes', gMemes);
    addLine('add your first line here',250,75)
}