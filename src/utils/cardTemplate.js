'use strict';

export default function createCard(item) {
  const cardContainer = document.querySelector('.card-container');

  const cardTemplate = `
  <article class="card">
    <div class="card-header">
      <img
        src="${item.photo}"
        alt="Quarto de hotel em São Paulo"
      />
    </div>
    
    <div class="card-content">
      <div class="property-type">
        <span class="type">${item.propertyType}</span>
      </div>

      <div class="property-description">
        <span class="description">${item.name}</span>
      </div>

      <div class="property-price">
        <span class="price">R$ ${item.price},00/mês</span>
      </div>
    </div>
  </article>
  `;

  cardContainer.innerHTML += cardTemplate;
}
