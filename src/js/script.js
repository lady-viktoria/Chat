"use strict";


const btn = document.getElementById('plus'),
      popup = document.getElementById('container');

btn.addEventListener('click', () => {
    popup.classList.toggle('popup_none');
});
