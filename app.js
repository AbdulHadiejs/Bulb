let imgEl = document.querySelectorAll("img");
let on = false;
function imageOn(){
    if (on === false){
        imgEl[0].src = "images/on.png";
        on = true;
    }
    else {
        imgEl[0].src = "images/off.png";
        on = false;
    }
}