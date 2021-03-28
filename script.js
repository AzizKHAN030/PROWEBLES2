let answ=document.getElementById(`answ`);
let btn = document.getElementById(`btn`);
let result= document.getElementById(`text`);
let rand=Math.round(Math.random()*10);
console.log(rand);
btn.onclick=function(){
    if(!isNaN(answ.value)){
    if(answ.value > rand){
        result.innerHTML =`Ваше число больше`;
    }
    else if(answ.value < rand){
        result.innerHTML = `Ваше число меньше`;
    } else{
        result.innerHTML = `В точку!`;
    }
}
else{
    result.innerHTML = `Введите число!`;
}
}
