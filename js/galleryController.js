'use strict';
var gCurrImg;

function init() {
    console.log('page is ready');
    _createImgs()
    renderImgs()
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