'use strict';
const IMG_KEY = 'img';
var gImgs; 


function _createImgs(){
        var imgs = 
        [
            {
                id: 1,
                url: 'img/1.jpg',
                keywords: ['cat']
            },
            {
                id: 2,
                url: 'img/2.jpg',
                keywords: ['man']
            },
            {
                id: 3,
                url: 'img/3.jpg',
                keywords: ['man']
            },
            {
                id:4,
                url: 'img/4.jpg',
                keywords: ['dog']
            },
            {
                id:5,
                url: 'img/5.jpg',
                keywords: ['kid']
            },
            {
                id:6,
                url: 'img/6.jpg',
                keywords: ['man']
            },
            {
                id:7,
                url: 'img/7.jpg',
                keywords: ['kid']
            },
            {
                id:8,
                url: 'img/8.jpg',
                keywords: ['kid']
            },
            {
                id:9,
                url: 'img/9.jpg',
                keywords: ['kid']
            },
            {
                id:10,
                url: 'img/10.jpg',
                keywords: ['man']
            },
            {
                id:11,
                url: 'img/11.jpg',
                keywords: ['man']
            },
            {
                id:12,
                url: 'img/12.jpg',
                keywords: ['man']
            },
            {
                id:13,
                url: 'img/13.jpg',
                keywords: ['toy']
            },
            {
                id:14,
                url: 'img/14.jpg',
                keywords: ['man']
            },
            {
                id:15,
                url: 'img/15.jpg',
                keywords: ['man']
            }
        ];
    gImgs = imgs
}

function getImgsForDisplay(){
    return gImgs;
}

function getImgById(imgId) {
    var img = gImgs.find(function (img) {
        return imgId === img.id
    })
    return img
}

function selectImg(imgId){
    console.log('I got picked!');
    var memeImgId = imgId.toString()
    sessionStorage.setItem('memeImgId',memeImgId)

    window.location = 'editor.html'
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}