"use strict"
// Создайте две html-страницы:

// 1. Страница добавления отзыва о продукте.
// Должна содержать форму с полем для ввода названия продукта и текстовое поле 
// для текста отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в localstorage.
// Необходимо реализовать проверку, оба поля должны быть заполнены, если это не 
// так, необходимо выводить ошибку пользователю.

const btnAddEl = document.querySelector('.btnAdd');
const inputNameEl = document.querySelector('.inputName');
const inputFeedbackEl = document.querySelector('.inputFeedback');
const divErrorEL = document.querySelector('.error');

btnAddEl.addEventListener('click', () => {
        if (inputNameEl.value && inputFeedbackEl.value) {
            localStorage.setItem(inputNameEl.value,inputFeedbackEl.value);
            window.location.href = 'showFeedback.html';
        } else {
            return divErrorEL.textContent = 'You must write Product name and feedback both!';
        }
})





