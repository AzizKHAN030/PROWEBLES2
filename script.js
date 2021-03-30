let task = +prompt(`Выберите задание:
\n 1-Угадай число 
\n 2-Узнай день недели 
\n 3-Узнай большее число
\n 4-Проверь возраст`, 1);
//Выбор задания
if (task == 1) {
    task1();
} else if (task == 2) {
    task2();
} else if (task == 3) {
    task3();
} else if (task == 4) {
    task4();
}
//Задание 1
function task1() {
    document.getElementById(`task1`).style.display = `block`;
    let answ = document.getElementById(`answ`);
    let btn = document.getElementById(`btn`);
    let result = document.getElementById(`result`);
    let count = 10;

    function random() {
        return Math.round(Math.random() * 100);
    };//находится в отдельной функции для того чтобы получить новые значения при повторной игре

    rand = random(); //присваиваем значение для дальнейшего использования

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
                } else if (rand == answ.value) {
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
                } else{
                    alert(`Может быть в другой раз?`);
                    btn.disabled = true;
                }
            }
        } else {
            result.innerHTML = `Введите число!`;
        }
    }
}
//Задание 2
function task2() {
    document.getElementById(`task2`).style.display = `block`;
    let day = document.getElementById(`day`);
    let btn = document.getElementById(`btn2`);
    btn.onclick = function () {
        if (!isNaN(day.value) && (day.value <= 7 && day.value >= 1)) {

            switch (+day.value) {
                case 1:
                    alert(`Понедельник`)
                    break;

                case 2:
                    alert(`Вторник`)
                    break;
                case 3:
                    alert(`Среда`)
                    break;
                case 4:
                    alert(`Четверг`)
                    break;
                case 5:
                    alert(`Пятница`)
                    break;
                case 6:
                    alert(`Суббота`)
                    break;
                case 7:
                    alert(`Воскресенье`)
                    break;

                default:
                    alert(`Понедельник`)
                    break;
            }

        } else {
            alert(`Введите число от 1 до 7!`)
        }


    }
}
//Задание 3
function task3() {
    document.getElementById(`task3`).style.display = `block`;
    let num1 = document.getElementById(`num1`);
    let num2 = document.getElementById(`num2`);
    let num3 = document.getElementById(`num3`);
    let btn = document.getElementById(`btn3`);

    btn.onclick = function () {
        if (isNaN(num1.value) || isNaN(num2.value) || isNaN(num3.value)) {
            alert(`Введите число в полях!`);
        } else {
            if ((+num1.value > +num2.value) && (+num1.value > +num3.value)) {
                alert(`Самое большое число: ${num1.value}`);
            } else if ((+num2.value > +num1.value) && (+num2.value > +num3.value)) {
                alert(`Самое большое число: ${num2.value}`);
            } else if ((+num3.value > +num1.value) && (+num3.value > +num2.value)) {
                alert(`Самое большое число: ${num3.value}`);
            }
        }
    }

}
//Задание 4
function task4() {
    let age = +prompt(`Введите свой возраст`);
    while (isNaN(age) || age < 0) {
        alert(`Введите Ваш возраст!`);
        age = +prompt(`Введите свой возраст`);
    }

    if (age < 18) {
        alert(`Вам еще учиться и учиться`);
    } else if (age < 60 && age >= 18) {
        alert(`Вам еще работать и работать`);
    } else if (age >= 60) {
        alert(`Вам пора на пенсию`)
    }
}