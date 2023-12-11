"use strict"

// 2. Страница просмотра отзывов.
// Показывает список всех продуктов, на которые были оставлены отзывы.
// Рядом с каждым продуктом должна быть кнопка "показать отзывы" / "скрыть отзывы" 
// (надпись кнопки меняется), при нажатии на которую показываются / скрываются 
// отзывы продукта.
// После текста отзыва должна быть кнопка "удалить", которая удаляет данный отзыв 
// из localstorage и со страницы. 
// Если удалены все отзывы продукта, то продукта вовсе должен быть удален, как из 
// localstorage, так и со страницы.

const showProductsEl = document.querySelector('.showProducts');
const delFeedbackEl = document.querySelector('.deleteFeedbacks')
for(let [key, value] of Object.entries(localStorage)) {
    console.log(key,value);
}

delFeedbackEl.addEventListener('click', () => {
    localStorage.clear();
})

  
