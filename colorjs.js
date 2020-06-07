let disMessage = document.querySelector("#message") ; 
let boxes = document.querySelectorAll(".box") ; 
let discolor = document.querySelector("#discolor") ; 
let h1 = document.querySelectorAll("h1") ; 
let reset = document.querySelector("#reset") ; 
let hardbtn = document.querySelector("#hardbtn") ; 
let easybtn = document.querySelector("#easybtn") ; 
let buttons = document.querySelectorAll(".buttons")  ;
let numberOfBox = 6  ; 
let colors = pickColors(6) ; 
let colorpicked = pickRandomColor(); 
discolor.textContent = colorpicked ; 
let activeLevel = 1 ; 

for(let i = 0; i < buttons.length ; ++i) {
    buttons[i].addEventListener("click",function(){
        buttons[activeLevel].classList.remove("active") ;
        this.classList.add("active") ; 
        activeLevel = i ; 
        numberOfBox = 3 *(i+1) ; 
        resetPage() ; 

    })
}

function resetPage() {
    for(let i = 0; i < h1.length ; ++i) {
        h1[i].style.background = "steelblue";  
    } 
    reset.textContent = "NEW COL0RS" ;
    disMessage.textContent ="" ; 
    colors = pickColors(numberOfBox) ; 
    colorpicked = pickRandomColor() ;
    discolor.textContent = colorpicked ;
    for(let i = 0; i < boxes.length ; ++i) {
        if(colors[i]) {
            boxes[i].style.display = "block" ; 
            boxes[i].style.backgroundColor = colors[i] ;  
        }
        else {
            boxes[i].style.display = "none" ; 
        }
    }
}

reset.addEventListener("click", function(){
    resetPage() ;
})

for(let i = 0 ; i< boxes.length ; ++i) {
    boxes[i].style.backgroundColor = colors[i] ; 
    boxes[i].addEventListener("click" , function(){
        let clickedColor = this.style.backgroundColor ; 
        //console.log(clickedColor + colorpicked) ; 
        if(clickedColor == colorpicked) {
            makeSame(clickedColor) ;
            disMessage.textContent = "Correct !" ;
            for(let i = 0; i < h1.length ; ++i) {
                h1[i].style.background = clickedColor; 
                reset.textContent = "Play Again ? " ; 
            } 
        } else {
            this.style.backgroundColor = "#232323";
            disMessage.textContent = "Try Again" ; 
            //alert("wrong") ;
        }
    })
}

function makeSame(color) {
    for(let i =0 ; i < colors.length ; ++i) {
        boxes[i].style.backgroundColor = color ;  
    }
}

function pickRandomColor() {
    let random = Math.floor(Math.random() * colors.length) ; 
    return colors[random] ; 
}

function pickColors(num) {
    let arr = []  ;
    for(let i = 0; i < num ; ++i)  {
        arr.push(createColor()) ; 
    }
    return arr ; 
}

function createColor() {
    let r = Math.floor(Math.random()*256) ; 
    let g = Math.floor(Math.random()*256) ; 
    let b = Math.floor(Math.random()*256) ; 

    return "rgb(" + r + ", " + g + ", " + b + ")";
}