let guess=parseInt((Math.random()*100)%20);
let score=document.getElementById("myscore");
let highscore = document.getElementById("highscore");
console.log(guess);
let runs = 1;
let bestscore= 0;
let win = false;
function check(){
    let input= document.getElementById("inputnumber").value;
    console.log("h");
    if(win==false){
        console.log('el');
        console.log(input);
        if(input == guess){
            console.log('looo');
            win=true;
            document.body.style.background="#00ff77";
            score.innerText=runs;
            if(highscore.innerText=='?'|| highscore.innerText>=runs){
                bestscore=runs;
                highscore.innerText =runs;
                console.log(highscore);
            }
            
        }
        else{
            console.log("wrong answer");
            document.body.style.background="#ff0033";
            runs++;
        }
    }
}
function reset(){
    score.innerText='?';
    guess=parseInt(((Math.random()*100)%19)+1);
    document.body.style.background="";
    win=false;

}
