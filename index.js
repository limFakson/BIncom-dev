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