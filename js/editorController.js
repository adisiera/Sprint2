'use strict';
var xLocal;
var yLocal;
var gCanvas;
var gCtx;
var gCurrAction = {
    size: 30,

};
var gMouseDown = false;

function init() {
    // console.log('page is ready...');
    gCanvas = document.getElementById('meme-editor');
    gCtx = gCanvas.getContext('2d')
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    // drawImg2()
    // drawText('hola', 225, 225)
    // onDrawText()
    renderCanvas()
}

function resizeCanvas() {
    gCanvas.width = window.innerWidth * 0.75
    gCanvas.height = window.innerHeight * 0.75
}

function renderCanvas(){
    console.log('entered renderCanvas');
    var img = new Image();
    var imgId = gMemes[0].selectedImgId
    img.src = `../img/${imgId}.jpg`;
    img.onload = () => {
        scaleToFit(img)
        onDrawText()
    }
}


function onAddText(){
    console.log('went into onAddText');
    // var memeText = document.querySelector('input[name=meme-txt]').value
    var elMemeText = document.querySelector('input[name=meme-txt]')
    var memeText = elMemeText.value
    addText(memeText)
    renderCanvas()
}

function onChangeSize(elBtn) {
   
    if (elBtn.innerText === '+') {
       gCtx.font = `${++gCurrAction.size}px Impact`
       renderCanvas()
    }
    else if (elBtn.innerText === '-') {
        gCtx.font = `${--gCurrAction.size}px Impact`
        renderCanvas()
    }
}


function onDrawText() {
    console.log('went into onDrawText');
    const offsetX = xLocal*0.5
    const offsetY = gCanvas.height * 0.15
    var text = getTextForDisplay()
    drawText(text, offsetX, offsetY)
}

function drawText(text, x, y) {
    console.log('went into drawText');
    gCtx.lineWidth = '1.5'
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `${gCurrAction.size}px Impact`
    // gCtx.textAlign = gMemes[0].lines[0].align
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}


function drawImg2() {
    var img = new Image();
    var imgId = gMemes[0].selectedImgId
    img.src = `../img/${imgId}.jpg`;
    img.onload = () => {
        scaleToFit(img)
    }
}

function scaleToFit(img) {
    var scale = Math.min(gCanvas.width / img.width, gCanvas.height / img.height);
    var x = (gCanvas.width / 2) - (img.width / 2) * scale;
    xLocal = x
    var y = (gCanvas.height / 2) - (img.height / 2) * scale;
    yLocal = y
    gCtx.drawImage(img, 0, 0, img.width * scale, img.height * scale);
}

