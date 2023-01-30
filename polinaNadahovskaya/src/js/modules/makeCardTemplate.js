const makeCardTemplate = (cardData) => {
  const html = `
            <article class="card">
            <figure class="card-image">
              <img src="${
                cardData.pic || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
              }" alt="image" class="card-image__img" />
            </figure>
            <div class="card-article">
              <h1 class="card-article__title">${cardData.title}</h1>
              <p class="card-article__text">${cardData.content}</p>
              <a href="./article.html?id=${
                cardData._id
              }" class="card-article__link">Читать далее</a>
              <div class="counter">
                <div class="counter__count">${cardData.likes}</div>
                <button class="counter__plus counter__btn">+</button>
                <button class="counter__minus counter__btn">-</button>
              </div>
            </div>
          </article>
  `;

  const template = document.createElement('template');
  template.innerHTML = html.trim();

  return template.content.firstElementChild;
};

export default makeCardTemplate;
