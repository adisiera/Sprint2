'use strict';
var gCurrImg;

function init() {
    console.log('page is ready');
    _createImgs()
    renderImgs()
}

function renderImgs() {
    var imgs = getImgsForDisplay()
    var strHTMLs = imgs.map(function (img) {
        return `<tr>
                <td><img src="${img.url}" onclick="onSelectImg(${img.id})" class="grid-item"/></td>
                `
    })
    var elImgTable = document.querySelector('.img-table')
    elImgTable.innerHTML = strHTMLs.join('');
}

function onSelectImg(imgId) {
    var img = getImgById(imgId)
    gCurrImg = img
    console.log('gCurrImg',gCurrImg);
    selectImg(imgId)
}