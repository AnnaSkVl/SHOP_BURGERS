// находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPus = document.querySelector('[data-action="plus"]');

const counter = document.querySelector('[data-counter]');

//Отслеживаем кнопку на минус
btnMinus.addEventListener('click', function(){

    //Проверяем чтобы счетчик был больше 1
    if(parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    }
    
});

//Отслеживаем кнопку на плюс
btnPus.addEventListener('click', function(){
    counter.innerText = ++counter.innerText;
});

