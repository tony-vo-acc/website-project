var clicked = 0;

function goOut() {
    var txt = document.getElementById('text');
    var gif = document.getElementById('gif');
    if (clicked == 0) {
        txt.textContent = "are you sure?"
    } else if (clicked == 1) {
        txt.innerHTML = "are you <i><b>sure</b></i> sure?"
    } else if (clicked == 2) {
        txt.innerHTML = "i love you"
        gif.src = 'https://github.com/OlieWu/tinawina/blob/main/style/images/cute-cat.gif?raw=true'
    }

    clicked += 1
}

function no() {
    var no = document.getElementById('no');
    
    no.style.background = "rgb(225,225,225)";
    no.style.cursor = "not-allowed";
    no.disabled = true;
}