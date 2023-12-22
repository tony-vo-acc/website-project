var clicked = 0;

function goOut() {
    var txt = document.getElementById('text');
    if (clicked == 0) {
        txt.textContent = "are you sure?"
    } else if (clicked == 1) {
        txt.innerHTML = "are you <i><b>sure</b></i> sure?"
    }

    clicked += 1
}

function no() {
    var no = document.getElementById('no');
    
    no.style.background = "rgb(225,225,225)";
    no.style.cursor = "not-allowed";
}