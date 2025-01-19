
import fetchData from './fetchData.js';

const main = document.querySelector('main');
const btn = document.querySelector('button');

const renderData = async () => {
    try {
        const data = await fetchData();
        main.innerHTML = '';
        for(const product of data) {
            main.innerHTML += `
            <div>
                <h2>${product.title}</h2>
                <p>${product.price}$</p>
                <p>${product.description}$</p>
            </div>
            `
        }
    } catch(error) {
        console.log(error);
    }
}


btn.addEventListener('click', () => {
    renderData()
})