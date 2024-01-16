// Dark and light mode
function Light() {
    const Element = document.getElementById("DarkMode");
    Element.className = "body";
}

function Dark() {
    const Element = document.getElementById("DarkMode");
    Element.className = "Dark";
}

function changeAirpod11(imageName) {
    const mainImage = document.getElementById('airpod-main-img1');
    mainImage.src = imageName
}
function changeAirpod12(imageName) {
    const mainImage = document.getElementById('airpod-main-img2');
    mainImage.src = imageName
}
function changeAirpod13(imageName) {
    const mainImage = document.getElementById('airpod-main-img3');
    mainImage.src = imageName
}


function increaseQuantity() {
    const a = document.getElementById("numchange")
    const qnt = parseInt(a.innerHTML)
    if (qnt == 10) {
        alert("Maximum Quantity of product is 10")
    }
    else {
        a.innerHTML = qnt + 1;
    }

}

function dec() {
    const a = document.getElementById("numchange")
    const qnt = parseInt(a.innerHTML)
    if (qnt == 1) {
        alert("Minimum Quantity of product is 1")
    }
    else {
        a.innerHTML = qnt - 1;
    }

} 
function increaseQuantity1() {
    const a = document.getElementById("numchange1")
    const qnt = parseInt(a.innerHTML)
    if (qnt == 10) {
        alert("Maximum Quantity of product is 10")
    }
    else {
        a.innerHTML = qnt + 1;
    }

}

function dec1() {
    const a = document.getElementById("numchange1")
    const qnt = parseInt(a.innerHTML)
    if (qnt == 1) {
        alert("Minimum Quantity of product is 1")
    }
    else {
        a.innerHTML = qnt - 1;
    }

} 
function increaseQuantity2() {
    const a = document.getElementById("numchange2")
    const qnt = parseInt(a.innerHTML)
    if (qnt == 10) {
        alert("Maximum Quantity of product is 10")
    }
    else {
        a.innerHTML = qnt + 1;
    }

}

function dec2() {
    const a = document.getElementById("numchange2")
    const qnt = parseInt(a.innerHTML)
    if (qnt == 1) {
        alert("Minimum Quantity of product is 1")
    }
    else {
        a.innerHTML = qnt - 1;
    }

} 


function addtocard(){
    alert("Add to card successful")
}