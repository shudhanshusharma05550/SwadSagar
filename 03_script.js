
//SEARCH FOOD

const formElement = document.querySelector('.search-box');
const searchFoodBtn = document.querySelector('.fa-magnifying-glass')
const searchFood = document.querySelector('.search-txt')

let inputData = "";

async function searchFoodItem() {
    inputData = searchFood.value;
    if (inputData.length === 0) {
        document.querySelector('.itemContainer').innerHTML = '<h1>Please, Enter an item...</h1>';
    }
    else {
        
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`;
    
    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

    const result = data.meals;
    result.map((element) => {
        const foodName = element.strMeal;
        const foodImg = element.strMealThumb;
        const foodId = element.idMeal;
/*
        const mainContainer = document.querySelector('.pro-container');
        const proContainer = document.createElement('div');
        proContainer.classList.add('pro');
        const image = document.createElement('img');
        image.src = foodImg;
        const desc_container = document.createElement('div');
        desc_container.classList.add('desc');
        const span = document.createElement('span');
        span.innerHTML = 'SwadSagar';
        const h5 = document.createElement('h5');
        h5.innerHTML = `${foodName}`;
        const rates = document.createElement('div');
        rates.classList.add('rates');
        rates.innerHTML = `<div class="rating">
        <div class="star">
        <i class="fas fa-star checked"></i>
        <i class="fas fa-star checked"></i>
        <i class="fas fa-star checked"></i>
        <i class="fas fa-star checked"></i>
        <i class="fas fa-star"></i>
        </div>
        <h4>₹170</h4>
    </div>
    <a href="#"><i class="fa-solid fa-cart-arrow-down cart"></i></a>`;
    mainContainer.appendChild(proContainer);
    proContainer.appendChild(image);
    proContainer.appendChild(desc_container);
    desc_container.appendChild(span);
    desc_container.appendChild(h5);
    desc_container.appendChild(rates);
    */

        
        document.querySelector('.itemContainer').innerHTML += `
        <div class="pro">
        <img src=${foodImg} alt="">
        <div class="desc">
            <span>SwadSagar</span>
            <h5>${foodName}</h5>
            <div class="rates">
                <div class="rating">
                    <div class="star">
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star checked"></i>
                    <i class="fas fa-star"></i>
                    </div>
                    <h4>₹170</h4>
                </div>
                <a href="#"><i class="fa-solid fa-cart-arrow-down cart"></i></a>
            </div>
        </div>  
    </div>
        `

    })
    }

}

formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    searchFoodItem();
});



//DARK MODE
/*b
const darkmodeIcon = document.querySelector('.dark_mode i');

darkmodeIcon.addEventListener('click', ()=> {
    const darkMode = document.querySelector('.dark_mode');
    darkMode.classList.toggle('right_align')
    document.body.style.backgroundColor = 'black';
})
*/



/* ORDER DESCRIPTION*/

const order_Description = document.querySelectorAll('.fa-cart-arrow-down')

console.log(order_Description)