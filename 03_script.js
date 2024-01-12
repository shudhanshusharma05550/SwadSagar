
//SEARCH FOOD

const formElement = document.getElementById("search-box");
const searchFoodBtn = document.querySelector('#search_btn i');
const searchFood = document.getElementById("search-txt");


async function searchFoodItem(e) {
    e.preventDefault();
    
    inputData = searchFood.value;
    
        
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`;

    fetch(url)    
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        if(data.meals === null) {
            document.querySelector(".pro-container").innerHTML = `<h2> Searches not found for ${inputData}`;
        }
        else {
            document.querySelector(".pro-container").innerHTML = data.meals.map((meal) => `
            <div class="pro">
            <img src=${meal.strMealThumb} alt="">
            <div class="desc">
                <span>SwadSagar</span>
                <h5>${meal.strMeal}</h5>
                <h3>₹170</h3>
                <button class="quick-view">Quick View</button>
            </div>  
        </div>
        <div class="pop-view">
            <div class="popup-card">
                <a><i class="fa-regular fa-circle-xmark"></i> </a>
                <div class="product-img">
                    <img src=${meal.strMealThumb}" >
                </div>
            </div>
                <div class="info">
                    <h4>${meal.strMeal}</h4>
                    <span>SwadSagar</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime similique quo quod, nisi corporis alias suscipit adipisci quos veniam! Quas corporis impedit nobis sapiente at eius eos molestiae inventore mollitia?</p>
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
        );
    }}
    )
}
/*
    })

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
        `;

    });
}*/



formElement.addEventListener('submit', searchFoodItem);

searchFoodBtn.addEventListener('click', searchFoodItem);

