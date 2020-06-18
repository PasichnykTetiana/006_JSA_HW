
window.addEventListener("load", init, false);
function init() {
    let elem = document.getElementById("save");
    elem.addEventListener("mouseover", function (e) {
        drag(this, e);
    })
}
function drag(elementToDrag, event) {
    let origX = elementToDrag.offsetLeft,
        origY = elementToDrag.offsetTop;
    document.addEventListener("mousemove", moveHandler, true);
    y=Math.random() * (150 - (-150)) + (-150);
    x=Math.random() * (150 - (-150)) + (-150);

    function moveHandler(e) {
        elementToDrag.style.left = origX- y + "px";
        elementToDrag.style.top = origY - x + "px";
    }
    function upHandler() {
        document.removeEventListener("mousemove", moveHandler, true);
    }
}