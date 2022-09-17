let colors = ["red", "yellow", "chartreuse", "blue", "hotpink", "purple", "aqua"]
let ranColor;
let columnCount = 30;
let iceland =  false;
let norway =  false;
let paint_mode = false;
let Full_mode = false;

const IceElm = document.querySelector(".Iceland")
const NorElm = document.querySelector(".Norway")
const DiscoElm = document.querySelector(".Disco")



const container = document.getElementById("container")

show()
function show(){
    let html = ""
    if(iceland == true){html = icelandicFlag()}
    else if(norway == true){html = norwegianFlag()}
    
    else {for (let i = 0; i<480; i++){
        randomColor()
        html +=/*HTML*/`<div onmouseover="randomColor(); this.style.background = ranColor; 
                this.style.boxShadow = '0 0 20px 5px ' + ranColor" ${paint_mode == false? 'class="square"' : ""} 
                ${Full_mode == true ? `style='box-shadow: 0 0 20px 5px ` + ranColor + `; background: `+ ranColor + `;'` : ""}></div>`}}

    html += ``
    container.innerHTML = html
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${columnCount}, 19px)`;
}


function randomColor(){
    let randomNum = randomNumber(0, colors.length - 1)
    ranColor = colors[randomNum]
}

function randomNumber(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);}


function icelandicFlag(){
    return tripleColorRow("blue", "white", "red").repeat(6)
    + doubleColorRow("white", "red",)
    + singleColorRow("red").repeat(2)
    + doubleColorRow("white", "red")
    + tripleColorRow("blue", "white", "red").repeat(6)
}

function norwegianFlag(){
    return tripleColorRow("red", "white", "blue").repeat(6)
    + doubleColorRow("white", "blue",)
    + singleColorRow("blue").repeat(2)
    + doubleColorRow("white", "blue")
    + tripleColorRow("red", "white", "blue").repeat(6)
}

function tripleColorRow(color1, color2, color3){
    return createRow(color1, color2, color3)
}

function doubleColorRow(color1, color2){
    return createRow(color1, color1, color2)
}

function singleColorRow(color){
    return createRow(color, color, color)
}

function createRow(color1, color2, color3){
    return createSquare(color1).repeat(10)
    + createSquare(color2)
    + createSquare(color3).repeat(2)
    + createSquare(color2)
    + createSquare(color1).repeat(16)
}
    
function createSquare(color){
    const full_mode_view = `style='box-shadow: 0 0 20px 5px ${color}; background: ${color};'`
    const change_view = `onmouseover="this.style.background = '${color}'; 
         this.style.boxShadow = '0 0 20px 5px ${color}'" ${paint_mode == false? 'class="square"' : ""}`

    return /*HTML*/ `<div ${Full_mode == true ? full_mode_view : change_view}></div>`
}


function setStyle(Style){
    if (Style == "iceland"){
        IceElm.classList.add("I_activated")
        NorElm.classList.remove("N_activated",)
        DiscoElm.classList.remove("D_activated")

        iceland = true
        norway = false
        show()}

    else if(Style == "norway"){
        NorElm.classList.add("N_activated")
        IceElm.classList.remove("I_activated")
        DiscoElm.classList.remove("D_activated")

        iceland = false
        norway = true
        show()}

    else{
        DiscoElm.classList.add("D_activated")
        IceElm.classList.remove("I_activated")
        NorElm.classList.remove("N_activated")

        iceland = false
        norway = false
        show()
    }
}


function setMode(Elm, mode){
    const Button = document.querySelector(".activeButton")
    Button.classList.remove("activeButton")
    Elm.classList.add("activeButton")

    if (mode == "hover"){
        paint_mode = false
        Full_mode = false
        show()}

    else if (mode == "paint"){
        paint_mode = true
        Full_mode = false
        show()}

    else {
        paint_mode = true
        Full_mode = true
        show()}
}

