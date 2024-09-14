console.log("Start")
let randomNum=parseInt(Math.random()*100 + 1)

let input=document.querySelector('#guess-number')
let guesses=document.querySelector('#guesses')
let countRemain=document.querySelector('#count')
let subt=document.querySelector('#subt');
let message=document.querySelector('#message')
let displayBtn=document.querySelector('.display')

let Chance=10;
let playGame=true;

if(playGame) {
    subt.addEventListener('click',function(e){
        e.preventDefault()
        let val=input.value
        if(isValidate(val)){
            Chance--;
            checkGuess(val)
            guesses.innerHTML+=`${val} , `;
            countRemain.innerHTML=`${Chance}`

            if(Chance===0){
                message.innerHTML=`Ran out of Chance. Number is ${randomNum}`;
                subt.setAttribute('disabled','');
                Gameupdate();
            }
        }
        else{
            message.innerHTML="Please Enter a valid Number";
            input.value=''
        }
    })
};

function isValidate(num){
    if(isNaN(num) || num<0 || num>100 ||num=='')
        return false;
    return true;
}

function checkGuess(num) {
    input.value=''
    if(num==randomNum){
        message.innerHTML='<h1>You Won the Game. You Guess it correct.</h1>';
        Gameupdate();
    }
    else if(num<randomNum){
        message.innerHTML="Too low"
    }
    else{
        message.innerHTML="Too High"
    }
}

function Gameupdate(){
    const replay=document.createElement('button')
    replay.id='newGame';
    replay.style.backgroundColor='green'
    replay.innerHTML='New Game';
    
    const endGame=document.createElement('button')
    endGame.id='endGame';
    endGame.style.backgroundColor='red'
    endGame.innerHTML='End Game'

    displayBtn.appendChild(replay)
    displayBtn.appendChild(endGame)

    replay.addEventListener('click',function(e){
        guesses.innerHTML=''
        countRemain.innerHTML='10'
        message.innerHTML=''
        Chance=10
        subt.removeAttribute('disabled');
        playGame=true;
        endGame.remove();
        replay.remove();
    })

    endGame.addEventListener('click',function(e){
        message.innerHTML='<h2>Thanks for Playing.</h2>'
        Chance=0
        guesses.innerHTML=''
        countRemain.innerHTML='00'
        playGame=false;
        endGame.remove();
        replay.remove();
    })
}



