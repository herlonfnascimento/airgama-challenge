'use strict';

import createCard from './utils/cardTemplate.js';
import components from './nodeElements.js';

async function render() {

  try {
    const uri = 'https://v2-api.sheety.co/78ac0b75f5adec731da70cfc55eaa931/api/data';

    const response = await fetch(uri);
    const dataList = await response.json();

    const { data } = dataList;
    const { amountResult } = components;

    data.map(item => createCard(item));
    amountResult.innerHTML = `${data.length} estadias encontradas`;

    return data;
  }

  catch {
    console.log('Não foi possível renderizar os componentes em tela')
  }
}

export default render();
