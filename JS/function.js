function togglePopup() {
    popupEle.classList.toggle('active');
}

function updateIndicators() {
    popupBox.querySelector('.indicators ul li.active').classList.remove('active');

    popupIndicators[currentImgIndex].classList.add('active');
}

function updatePopupImg(newImgSrc) {
    popupImg.setAttribute('src', newImgSrc);
}