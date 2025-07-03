let canvas = document.querySelector('canvas');
let pen= canvas.getContext('2d')

let snakeCells=[[0,0]]
let cell=50;
let direction="right"
let gameOver=false;
let score=0;
let game = setInterval(()=>{
    draw();
    update();
    
},300)


let randomCell=generateRandomCell()

document.addEventListener("keydown",(e)=>{
    // console.log("keydown")
    if(e.key==="ArrowRight"){
        direction="right"
    }
    else if(e.key==="ArrowLeft"){
        direction="left"
    }
    else if(e.key==="ArrowUp"){
        direction="up"
    }
    else if(e.key==="ArrowDown"){
        direction="down"
    }
})

function draw() {
    if(gameOver){
        clearInterval(game)
        pen.fillStyle="red"
        pen.font="40px sans-serif"
        pen.fillText('Game Over',50,150)
        // alert("Game Over")
        return;
    }
    pen.clearRect(0,0,700,400)
    for(let i of snakeCells){
        pen.fillStyle="red"
        pen.fillRect(i[0],i[1],cell,cell)
    }

    pen.fillStyle="green"
    pen.fillRect(randomCell[0],randomCell[1],50,50)

    pen.fillStyle="black"
    pen.font="50px Arial"
    pen.fillText(`Score: ${score}`,500,40)
}


function update(){
    let headX=snakeCells[snakeCells.length-1][0];
    let headY=snakeCells[snakeCells.length-1][1];
    let newX
    let newY
    if(direction=="right"){
        newX=headX+cell
        newY=headY
        if(newX>660){
            gameOver=true
        }
    }
    else if(direction=="left"){
        newX=headX-cell
        newY=headY
        if(newX<0){
            gameOver=true
        }
    }
    else if(direction=="up"){
        newX=headX
        newY=headY-cell
        if(newY<0){
            gameOver=true
        }
    }
    else{
        newX=headX
        newY=headY+cell
        if(newY>360){
            gameOver=true
        }
    }
    snakeCells.push([newX,newY])
    if(newX==randomCell[0] && newY==randomCell[1]){
        randomCell=generateRandomCell()
        score+=1
    }
    else{
        snakeCells.shift()
    }
}


function generateRandomCell(){
    return[
         Math.floor((Math.random()*650)/50)*50,                  //divide and multiply by 50 so the number 
        Math.floor((Math.random()*350)/50)*50   
    ]                                                           //comes will be multiple of 50 (size of snake)
}