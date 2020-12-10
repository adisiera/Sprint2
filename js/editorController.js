'use strict';
var gCanvas;
var gCtx;
var gCurrShape;
var gMouseDown = false;


function init() {
    console.log('page is ready...');
    gCanvas = document.getElementById('meme-editor');
    gCtx = gCanvas.getContext('2d')
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    drawImg2()
    drawText('hola', 225, 225)
    console.log(gMemes[0].lines[0].txt);
}

function resizeCanvas() {
    gCanvas.width = window.innerWidth * 0.75
    gCanvas.height = window.innerHeight * 0.75
}

function onMouseDown() {
    gMouseDown = true;
}

function onMouseUp() {
    gMouseDown = false
}


function onDrawText(ev) {
    // if (!gMouseDown) return;
    const offsetX = ev.offsetX
    const offsetY = ev.offsetY
    var text = gMemes[0].lines[0].txt
    drawText(text, offsetX, offsetY)
}

function drawText(text, x, y) {
    
    console.log('went into drawText');
    gCtx.lineWidth = '1.5'
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '30px Impact'
    // gCtx.font = 'italic small-caps 900 40px serif'
    gCtx.textAlign = 'center'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}


function drawImg2() {
    var img = new Image();
    // console.log(img)
    var imgId = gMemes[0].selectedImgId
    img.src = `../img/${imgId}.jpg`;
    img.onload = () => {
        scaleToFit(img)
    }
}

function scaleToFit(img) {
    // get the scale
    var scale = Math.min(gCanvas.width / img.width, gCanvas.height / img.height);
    // get the top left position of the image
    var x = (gCanvas.width / 2) - (img.width / 2) * scale;
    var y = (gCanvas.height / 2) - (img.height / 2) * scale;
    gCtx.drawImage(img, 0, 0, img.width * scale, img.height * scale);
}

// function setShape(shape) {
//     gCurrShape = shape
// }

// function draw(ev) {
//     const offsetX = ev.offsetX
//     const offsetY = ev.offsetY
//     var text = gMemes[0].lines[0].txt
//     console.log('offsetX', offsetX)
//     // console.log('clientX', ev.clientX)
//     // const { offsetX, offsetY } = ev

//     drawText
//     switch (gCurrShape) {
//         case 'triangle':
//             drawTriangle(offsetX, offsetY)
//             break;
//         case 'rect':
//             drawRect(offsetX, offsetY)
//             break;
//         case 'text':
//             drawText(text, offsetX, offsetY)
//             break;
//         case 'line':
//             drawLine(offsetX, offsetY)
//             break;
//     }
// }

// function draw(ev) {
//     const offsetX = ev.offsetX
//     const offsetY = ev.offsetY
//     var text = gMemes[0].lines[0].txt
//     console.log('offsetX', offsetX)
//     // console.log('clientX', ev.clientX)
//     // const { offsetX, offsetY } = ev
//     switch (gCurrShape) {
//         case 'triangle':
//             drawTriangle(offsetX, offsetY)
//             break;
//         case 'rect':
//             drawRect(offsetX, offsetY)
//             break;
//         case 'text':
//             drawText(text, offsetX, offsetY)
//             break;
//         case 'line':
//             drawLine(offsetX, offsetY)
//             break;
//     }
// }


