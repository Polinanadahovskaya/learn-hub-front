import requestArticles from './fetchCards.js';

const moreButton = document.querySelector('.more-articles');

const handleMoreBtn = () => {
  let offset = 10;
  moreButton.addEventListener('click', (e) => {
    e.preventDefault();
    requestArticles(offset);
    offset += 10;
  });
};

export default handleMoreBtn;
