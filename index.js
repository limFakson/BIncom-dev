const text = document.getElementById('write');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Front" + " " + "end" + " " + "developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "UIUX" + " " + "designer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Graphic" + " " + "designer";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);

function pageLoader1() {
    window.open("https://limfakson.github.io/sushi-food-app/")
}

function pageLoader2() {
    window.open("https://limfakson.github.io/Newsletter/")
}

function pageLoader3() {
    window.open("https://limfakson.github.io/News-homepage/")
}

function pageLoader4() {
    window.open("https://limfakson.github.io/Piggyvest--signin-page/")
}

function pageLoader5() {
    window.location.href = "UIUX.html"
}

function pageLoader6() {
    window.location.href = "graphic.html"
}

function back() {
    window.location.href = "index.html"
}