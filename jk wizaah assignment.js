let selectedColorElement = document.getElementById("selectedColor");
let buttonElement1 = document.getElementById("button1");
let buttonElement2 = document.getElementById("button2");
let buttonElement3 = document.getElementById("button3");
let buttonElement4 = document.getElementById("button4");
let selectedSizeElement = document.getElementById("selectedSize");
let totalCountElement = document.getElementById("totalCount");
let xsElement = document.getElementById("xs");
let sEl = document.getElementById("s");
let mEl = document.getElementById("m");
let xlEl = document.getElementById("xl");


function addToCart() {
    alert(`The product has been added to the cart with Color: ${selectedColorElement.textContent}, Size:${selectedSizeElement.textContent} and No.of.Items: ${totalCountElement.textContent}`);
}

function changeBrownColorText() {
    selectedColorElement.textContent = "Brown";
    buttonElement1.classList.add("border");
    buttonElement2.classList.remove("border");
    buttonElement1.classList.remove("active");
    buttonElement3.classList.remove("border");
    buttonElement4.classList.remove("border");
}

function changeGreenColorText() {
    selectedColorElement.textContent = "Green";
    buttonElement2.classList.add("border");
    buttonElement1.classList.remove("border");
    buttonElement1.classList.remove("active");
    buttonElement3.classList.remove("border");
    buttonElement4.classList.remove("border");
}

function changeVioletColorText() {
    selectedColorElement.textContent = "Violet";
    buttonElement3.classList.toggle("border");
    buttonElement1.classList.remove("border");
    buttonElement1.classList.remove("active");
    buttonElement2.classList.remove("border");
    buttonElement4.classList.remove("border");
}

function changeBlueColorText() {
    selectedColorElement.textContent = "Blue";
    buttonElement4.classList.toggle("border");
    buttonElement1.classList.remove("border");
    buttonElement1.classList.remove("active");
    buttonElement3.classList.remove("border");
    buttonElement2.classList.remove("border");
}


function onClickXs() {
    selectedSizeElement.textContent = "XS";
    xsElement.classList.add("border");
    sEl.classList.remove("border");
    mEl.classList.remove("border");
    xlEl.classList.remove("border");
}

function onClickS() {
    selectedSizeElement.textContent = "S";
    xsElement.classList.remove("border");
    xsElement.classList.remove("active");
    sEl.classList.add("border");
    mEl.classList.remove("border");
    xlEl.classList.remove("border");
}

function onClickM() {
    selectedSizeElement.textContent = "M";
    xsElement.classList.remove("border");
    sEl.classList.remove("border");
    xsElement.classList.remove("active");
    mEl.classList.add("border");
    xlEl.classList.remove("border");
}

function onClickXl() {
    selectedSizeElement.textContent = "XL";
    xsElement.classList.remove("border");
    sEl.classList.remove("border");
    xsElement.classList.remove("active");
    mEl.classList.remove("border");
    xlEl.classList.add("border");
}

if (totalCountElement >= 1) {
    totalCountElement.textContent = "1";
}