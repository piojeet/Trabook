function sliderImages() {
    let rightArrow = document.querySelector("#section-3 .right-arrow");
    let leftArrow = document.querySelector("#section-3 .left-arrow");
    let slider = document.querySelector("#section-3 .boxes");
    let rightSvg = document.querySelector("#section-3 .right-arrow svg");
    let leftSvg = document.querySelector("#section-3 .left-arrow svg");
    let boxWidth = slider.scrollWidth / slider.children.length; // Assuming each box has equal width

    rightArrow.addEventListener("click", function () {
        slider.scrollLeft += boxWidth;
        rightArrow.style.backgroundColor = '#FA7436';
        rightArrow.style.border = 'transparent';
        leftArrow.style.backgroundColor = 'transparent';
        leftArrow.style.border = '1.5px solid #666666';
        rightSvg.style.fill = '#fff';
        leftSvg.style.fill = '#666666';
    });

    leftArrow.addEventListener("click", function () {
        slider.scrollLeft -= boxWidth;
        leftArrow.style.backgroundColor = '#FA7436';
        leftArrow.style.border = 'transparent';
        rightArrow.style.backgroundColor = 'transparent';
        rightArrow.style.border = '1.5px solid #666666';
        rightSvg.style.fill = '#666666';
        leftSvg.style.fill = '#fff';
    });
}
sliderImages();




function imagesSlider() {
    let rightArrow = document.querySelector("#section-4 .right-arrow");
    let leftArrow = document.querySelector("#section-4 .left-arrow");
    let slider = document.querySelector("#section-4 .boxes");
    let rightSvg = document.querySelector("#section-4 .right-arrow svg");
    let leftSvg = document.querySelector("#section-4 .left-arrow svg");
    let boxWidth = slider.scrollWidth / slider.children.length; // Assuming each box has equal width

    rightArrow.addEventListener("click", function () {
        slider.scrollLeft += boxWidth;
        rightArrow.style.backgroundColor = '#FA7436';
        rightArrow.style.border = 'transparent';
        leftArrow.style.backgroundColor = 'transparent';
        leftArrow.style.border = '1.5px solid #666666';
        rightSvg.style.fill = '#fff';
        leftSvg.style.fill = '#666666';
    });

    leftArrow.addEventListener("click", function () {
        slider.scrollLeft -= boxWidth;
        leftArrow.style.backgroundColor = '#FA7436';
        leftArrow.style.border = 'transparent';
        rightArrow.style.backgroundColor = 'transparent';
        rightArrow.style.border = '1.5px solid #666666';
        rightSvg.style.fill = '#666666';
        leftSvg.style.fill = '#fff';
    });

}
imagesSlider();


function dotedScroller() {
    let doteOne = document.querySelector("#section-6 .dote-1");
let doteTwo = document.querySelector("#section-6 .dote-2");
let doteThree = document.querySelector("#section-6 .dote-3");
let slider = document.querySelector("#section-6 .boxes");
let boxWidth = slider.scrollWidth / slider.children.length;
let scrolledToEnd = false;
let initialScrollPosition = 0;

doteOne.addEventListener("click", function() {
    slider.scrollLeft -= boxWidth;
    doteOne.style.backgroundColor = '#FA7436'
    doteThree.style.backgroundColor = '#666666'
    doteTwo.style.backgroundColor = '#666666'
})

doteTwo.addEventListener("click", function() {
    if (!scrolledToEnd) {
        // Scroll to the end
        initialScrollPosition = slider.scrollLeft;
        slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
        scrolledToEnd = true;

        // Change background colors
        doteOne.style.backgroundColor = '#666666';
        doteThree.style.backgroundColor = '#666666';
        doteTwo.style.backgroundColor = '#FA7436';
    } else {
        // Scroll back to initial position
        slider.scrollLeft = initialScrollPosition;
        scrolledToEnd = false;

        // Reset background colors or perform any other actions
        doteOne.style.backgroundColor = '#FA7436';
        doteThree.style.backgroundColor = '#666666';
        doteTwo.style.backgroundColor = '#666666';
    }
});

doteThree.addEventListener("click", function() {
    slider.scrollLeft += boxWidth;
    doteOne.style.backgroundColor = '#666666'
    doteTwo.style.backgroundColor = '#666666'
    doteThree.style.backgroundColor = '#FA7436'
});

}

dotedScroller();




let menuIcon = document.querySelector("header .menu-icon");
let closeIcon = document.querySelector("header .close-icon");
let ulList = document.querySelector("header ul");

menuIcon.addEventListener("click", function() {
    ulList.classList.add("active");
})

closeIcon.addEventListener("click", function() {
    ulList.classList.remove("active");
})