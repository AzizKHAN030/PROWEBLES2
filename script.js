let answ=document.getElementById(`answ`);
let btn = document.getElementById(`btn`);
let result= document.getElementById(`result`);
let rand=Math.round(Math.random()*100);
console.log(rand);
btn.onclick=function(){
    if(!isNaN(answ.value)){
   
        if(Math.abs(rand-answ.value)>=1 && Math.abs(rand-answ.value)<=10){
            result.innerHTML = `Горячо`;
        }
       else if(Math.abs(rand-answ.value)>=11 && Math.abs(rand-answ.value)<=20){
            result.innerHTML = `Тепло`;
        }
       else if(Math.abs(rand-answ.value)>=21){
            result.innerHTML = `Холодно`;
        } 
        else if(Math.abs(rand-answ.value)==0){
            result.innerHTML = `В точку!`;           
        }
        
}
else{
    result.innerHTML = `Введите число!`;
}
}
