//nested if else
let winningnum= 45;
let guessnum= +prompt('enter your number');
console.log(guessnum);
    // if(winningnum==guessnum){
    //     console.log('you win!')
    // }else{
    //     console.log('you lose!');
    // }
if(winningnum==guessnum){
    console.log('you win!')
}else{
    if(winningnum<guessnum){
        console.log('too high');
    }
    else{
        console.log('too low');
    }
}

