function altkeyboard() {
    document.addEventListener("keydown", (event) =>{
        if(event.altKey && event.key == 'a'){
            return alert("Alerta")
        }
        if(event.altKey && event.key == 'c'){
            return confirm("Sos un crack?")
        }
        if(event.altKey && event.key == 'p'){
            prompt("Que tal como estas?");
            return console.log("a bno")
        }
    })
}
function moveBall(ball,scenary){
    const $ball = document.querySelector(ball),
    $scenary = document.querySelector(scenary);
    let x = 0,y = 0;
    document.addEventListener("keydown", (event) =>{
        const move = ()=>{
            $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
            event.preventDefault();
        }
        const limitBall = $ball.getBoundingClientRect(),
        limitScenary = $scenary.getBoundingClientRect();
        if(event.key == "ArrowUp"){
            if(limitBall.top > limitScenary.top){
                y--;
                move();
            }
        }
        if(event.key == "ArrowDown"){
            if(limitBall.bottom < limitScenary.bottom){
                y++;
                move();
            }
        }
        if(event.key == "ArrowLeft"){
            if(limitBall.left > limitScenary.left){
                x--;
                move();
            }
        }
        if(event.key == "ArrowRight"){
            if(limitBall.right < limitScenary.right){
                x++;
                move();
            }
        }
    })
}

export { altkeyboard, moveBall};
