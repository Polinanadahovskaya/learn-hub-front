const makeArticle = (cardData) => {
  return `
          <article class="article">
              <h1 class="article__title">${cardData.title}</h1>
              <p class="article__text">${cardData.content}</p>
              <figure class="article-image">
              <img src="${cardData.pic}" alt="image" class="article-image__img" />
              </figure>
          </article>
  `;
};

const articleContainer = document.querySelector('.main-wrap');
const params = new URL(document.location).searchParams;
const id = params.get('id');

fetch(`http://localhost:3000/article/${id}`)
  .then((response) => response.json())
  .then((data) => {
    const cardTemplate = makeArticle(data);
    articleContainer.insertAdjacentHTML('beforeend', cardTemplate);
  })
  .catch((error) => {
    console.error(error);
  });
