let popupKeys = document.querySelectorAll('#Gallery i'),
    popupEle = document.querySelector('.popup'),
    popupBox = popupEle.querySelector('.box'),
    popupImg = popupBox.querySelector('img'),
    imgList = document.querySelectorAll('#Gallery img'),
    popupExit = popupBox.querySelector('.close'),
    popupNext = popupBox.querySelector('.next'),
    popupPrev = popupBox.querySelector('.prev'),
    popupIndicatorContainer = popupBox.querySelector('ul'),
    currentImgIndex;

for (let i = 0; i < imgList.length; i++) {
    let newIndicator = document.createElement('li');

    newIndicator.textContent = i + 1;

    if (i != imgList.length - 1) {
        newIndicator.classList.add('me-2');
    }

    if (i == 0) {
        newIndicator.classList.add('active');
    }

    popupIndicatorContainer.append(newIndicator);
}

let popupIndicators = popupBox.querySelectorAll('.indicators li');

popupKeys.forEach(PopupKey => {
    PopupKey.addEventListener('click', function (e) {
        togglePopup();

        let currentImg = PopupKey.parentElement.previousElementSibling,
            currentImgSrc = currentImg.getAttribute('src');

        currentImgIndex = currentImg.dataset.index;

        updateIndicators();

       updatePopupImg(currentImgSrc);

    });
});

popupEle.addEventListener('click', togglePopup);

popupBox.addEventListener('click', function (e) {
    e.stopPropagation();
})


popupNext.addEventListener('click', function (e) {
    currentImgIndex = (currentImgIndex + 1) % imgList.length;
    let nextImgSrc = imgList[currentImgIndex].getAttribute('src');

    updatePopupImg(nextImgSrc);
    updateIndicators();
});

popupPrev.addEventListener('click', function (e) {
    currentImgIndex = (--currentImgIndex < 0) ? imgList.length - 1 : currentImgIndex;
    let prevImgSrc = imgList[currentImgIndex].getAttribute('src');

    updatePopupImg(prevImgSrc);
    updateIndicators();
});

popupExit.addEventListener('click', togglePopup);

popupIndicators.forEach(function (popupIndicator){
    popupIndicator.addEventListener('click', function () {
        let clickedIndex = Array.from(popupIndicators).indexOf(popupIndicator);
        currentImgIndex = clickedIndex;

        currentImgSrc = imgList[clickedIndex].getAttribute('src');
        updatePopupImg(currentImgSrc);

        updateIndicators();
})});