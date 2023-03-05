/* Javascript for input change */
const dancing = document.getElementById("js--dancing");
const lato = document.getElementById("js--lato");
const merriweather = document.getElementById("js--merriweather");
const input = document.getElementById("js--input");


input.oninput = function(event){
    dancing.innerText = event.target.value;
    lato.innerText = event.target.value;
    merriweather.innerText = event.target.value;
}

/* Javascript for favorites */
const hearts = document.getElementsByClassName("heart");
for(let i = 0; i < hearts.length; i++){
    hearts[i].onclick = function(){
        for(let i = 0; i < hearts.length; i++){
            hearts[i].children[0].classList = "fa-regular fa-heart heart__logo"
        }
        
        hearts[i].children[0].classList = "fa-solid fa-heart heart__logo"
    }
}


/* darkmode */
const rootElement = document.querySelector(":root")
const modeSwitch = document.getElementById("toggle")
const showcase = document.getElementById("js--showcase")
const header = document.getElementById("js--header")
const pen = document.getElementById("pen")


modeSwitch.checked = false;

modeSwitch.onchange = function(){
    if(modeSwitch.checked === true){
        showcase.style.background = "#2C3333";
        showcase.style.color = "white";
        header.style.background = "#2C3333";
        input.style.color = "white";
        pen.style.color = "white"
        return;
    }

    showcase.style.background = "white";
    header.style.background = "white";
    showcase.style.color = "black";
    input.style.color = "black";
    pen.style.color = "#2C3333"
}


