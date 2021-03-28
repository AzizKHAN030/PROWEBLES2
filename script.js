let answ = document.getElementById(`answ`);
let btn = document.getElementById(`btn`);
let result = document.getElementById(`result`);
let count = 10;

function random() {
    return Math.round(Math.random() * 100);
};

rand = random();

console.log(rand);

btn.onclick = function () {
    if (!isNaN(answ.value)) {
        if (count > 1) {
            if (Math.abs(rand - answ.value) >= 1 && Math.abs(rand - answ.value) <= 10) {
                count--;
                result.innerHTML = `Горячо, осталось попыток ${count}`;
            } else if (Math.abs(rand - answ.value) >= 11 && Math.abs(rand - answ.value) <= 20) {
                count--;
                result.innerHTML = `Тепло, осталось попыток ${count}`;
            } else if (Math.abs(rand - answ.value) >= 21) {
                count--;
                result.innerHTML = `Холодно, осталось попыток ${count}`;
            } else if (Math.abs(rand - answ.value) == 0) {
                if (confirm(`В точку! \n Хотите попробовать еще раз?`)) {
                    count = 10;
                    result.innerHTML = `У вас еще ${count} попыток!`;
                    rand = random();
                    console.log(rand);
                } else {
                    alert(`Всего хорошего!`);
                    btn.disabled = true;
                }
            }
        } else {
            if (confirm(`Вы не угадали! \n Хотите попробовать еще раз?`)) {
                count = 10;
                result.innerHTML = `У вас еще ${count} попыток!`;
                btn.disabled = false;
            } else(alert(`Может быть в другой раз?`));
        }
    } else {
        result.innerHTML = `Введите число!`;
    }
}