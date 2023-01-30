import makeCard from './makeCardTemplate.js';
import patchLikes from './patchLikes.js';

const cardsContainer = document.querySelector('.main-articles');

const requestArticles = (offset = 0) => {
  fetch(`http://localhost:3000/article/?offset=${offset}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.length && !offset) {
        const element = document.createElement('h2');
        element.textContent = 'Здесь пока пусто';
        cardsContainer.appendChild(element);
      } else {
        data.forEach((cardData) => {
          const cardTemplate = makeCard(cardData);
          const plusBtn = cardTemplate.querySelector('.counter__plus');
          const minusBtn = cardTemplate.querySelector('.counter__minus');
          const counter = cardTemplate.querySelector('.counter__count');
          plusBtn.addEventListener('click', () => {
            const count = Number(counter.textContent);
            const body = {
              likes: count + 1,
            };
            patchLikes(cardData._id, body, counter);
          });

          minusBtn.addEventListener('click', () => {
            const count = Number(counter.textContent);
            const body = {
              likes: count - 1,
            };
            patchLikes(cardData._id, body, counter);
          });
          cardsContainer.appendChild(cardTemplate);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export default requestArticles;
