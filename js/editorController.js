'use strict';
var xLocal;
var yLocal;
var gCanvas;
var gCtx;
var gCurrAction = {
    size: 25,
};

function init() {
    createMeme()
    gCanvas = document.getElementById('meme-editor');
    gCtx = gCanvas.getContext('2d')
    // window.addEventListener('resize', resizeCanvas)
    renderCanvas()
    // resizeCanvas()
}

// function resizeCanvas() {
//     gCanvas.width = window.innerWidth * 0.65
//     gCanvas.height = window.innerHeight * 0.65
// }

function renderCanvas() {
    const meme = getMeme()
    const img = new Image();
    var imgId = memeImgId
    img.src = `../img/${imgId}.jpg`
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        meme.lines.forEach(line => drawText(line))
    }
}

function onToggleMenu() {
    document.body.classList.toggle('menu-open');
    document.querySelector('.mobile-menu-close').hidden = !document.querySelector('.mobile-menu-close').hidden;
    document.querySelector('.mobile-menu-btn').hidden = !document.querySelector('.mobile-menu-btn').hidden;
}

function onToggleClose() {
    document.querySelector('.mobile-menu-close').hidden = true;
    document.querySelector('.mobile-menu-btn').hidden = false;
    document.body.classList.toggle('menu-open');
}


function onSaveMeme(){
    console.log('went into onSaveMeme');
    getMemeToSave()
    
}

function onDownloadMeme(elLink) {
    const memeImg = gCanvas.toDataURL('image/jpg')
    elLink.href = memeImg;
    elLink.download = 'my-meme.jpg'
}

function onChangeTextAlign(elBtn) {
    console.log('entered onChangeTextAlign');
    changeTextAlign(elBtn)
    renderCanvas()
}

function onChangeStrokeColor(color) {
    console.log('entered onChangeStrokeColor', color);
    changeStrokeColor(color);
    renderCanvas();
}
function onChangeFillColor(color) {
    console.log('entered onChangeFillColor', color);
    changeFillColor(color);
    renderCanvas();
}

function onChangeFont(font) {
    changeFont(font)
    renderCanvas();
}


function onRemoveLine() {
    removeLine();
    document.querySelector('.meme-txt').value = '';
    renderCanvas();
}

function onSwitchLine() {
    var meme = getMeme();
    document.querySelector('.meme-txt').value = meme.lines[meme.selectedLineIdx].txt;
    switchLines()
    renderCanvas();
}

function onAddLine() {

    const meme = getMeme();
    meme.selectedLineIdx++;
    var x = gCanvas.width / 2
    var y;
    if (meme.lines.length === 0) y = 100
    if (meme.lines.length === 1) y = (gCanvas.height - 100)
    if (meme.lines.length >= 2) y = (gCanvas.height / 2);
    addLine('add your second line here', x, y)
    document.querySelector('input[name=meme-txt]').value = '';
    drawText(meme.lines[meme.lines.length - 1]);
    renderCanvas();
}

function onAddText() {
    var meme = getMeme();
    var elMemeText = document.querySelector('input[name=meme-txt]')
    var memeText = elMemeText.value
    addText(memeText)
    renderCanvas()
}

function onChangeSize(val) {
    if (val === '+') {
        gMemes.lines[gMemes.selectedLineIdx].size += 2
    }
    else if (val === '-') {
        gMemes.lines[gMemes.selectedLineIdx].size -= 2
    }
    renderCanvas()
}

function drawText(line) {
    gCtx.beginPath()
    gCtx.lineWidth = '1.5'
    gCtx.strokeStyle = line.strokeColor
    gCtx.fillStyle = line.color
    gCtx.font = line.size + 'px' + ' ' + line.fontFamily;
    gCtx.textAlign = line.align;
    gCtx.fillText(line.txt, line.x, line.y)
    gCtx.strokeText(line.txt, line.x, line.y)
}


