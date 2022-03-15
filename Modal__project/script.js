'use strict';
const btnListArray = document.querySelector('.btn__list');
const modalDiv = document.querySelector('.modal');
const overlayDiv = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close__modal');
const titleText = document.querySelector('.title__text');
const modalImg = document.querySelector('.modal__img');

const carInfoArray = [
  {
    title: 'BMW X4',
    image: './img/00.jpg',
  },
  {
    title: 'Audi  M5',
    image: './img/01.jpg',
  },
  {
    title: 'Lambargine',
    image: './img/02.jpg',
  },
  {
    title: 'Ferrary',
    image: './img/03.jpg',
  },
  {
    title: 'Lexus',
    image: './img/04.jpg',
  },
];

const showModal = id => {
  titleText.textContent = carInfoArray[id].title;
  modalImg.src = carInfoArray[id].image;
  modalDiv.classList.remove('hidden');
  overlayDiv.classList.remove('hidden');
};

const closeModal = () => {
  modalDiv.classList.add('hidden');
  overlayDiv.classList.add('hidden');
};

btnListArray.addEventListener('click', function (e) {
  const btn = e.target.closest('.show__modal');
  const id = btn.getAttribute('data-id');
  showModal(id);
});
closeBtn.addEventListener('click', closeModal);
overlayDiv.addEventListener('click', closeModal);
