'use strict';

const lista = document.querySelector('.lista');
console.log(lista);

const listaSpesa = [
    'Cioccolata', 
    'Farina',
    'Uova', 
    'Riso', 
    'Biscotti', 
    'Latte', 
    'Pasta',
    'Mele',
    'Uva',
    'Vino',
    'Acqua',
];

let i = 0;

while(i < listaSpesa.length) {
    // .toUpperCase = metodo delle stringhe
    console.log(listaSpesa[i].toUpperCase());

    const prodotto = document.createElement('li');
    prodotto.classList.add('prodotto');
    prodotto.innerText = listaSpesa[i];
    lista.append(prodotto);

    i++;
}