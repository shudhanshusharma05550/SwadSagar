//form Section

function showMore() {
    const Btn = document.querySelector('.form_button')
    Btn.classList.toggle('extra');
    Btn.innerHTML = 'Click, Contact Form will appear!!!'
}

function showLess() {
    const Btn = document.querySelector('.form_button')
    Btn.classList.remove('extra')
    Btn.innerHTML = 'Contact Form'
}

//CONTACT FORM

const formBtn = document.querySelector('.form_button')

formBtn.addEventListener('click', function() {
    const formSection = document.querySelector('.form_section');
    formSection.classList.toggle('showMore')
});


/*
<div class="pro">
                <img src="food_items/431194.jpg" alt="">
                <div class="desc">
                    <span>SwadSagar</span>
                    <h5>Choco Lava Cake</h5>
                    <h3>₹70</h3>
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
            
            <div class="pro">
                <img src="food_items/963604935ce8d8eb0a0d0b090eacad385c4d3f39v2_hq.jpg" alt="">
                <div class="desc">
                    <span>SwadSagar</span>
                    <h5>Grilled Chicken</h5>
                    <h3>₹220</h3>
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
            
            <div class="pro">
                <img src="food_items/food-2.jfif" alt="">
                <div class="desc">
                    <span>SwadSagar</span>
                    <h5>Rajma</h5>
                    <h3>₹70</h3>
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
            
            <div class="pro">
                <img src="food_items/cheezy-burger.jfif" alt="">
                <div class="desc">
                    <span>SwadSagar</span>
                    <h5>Cheezy Burger</h5>
                    <h3>₹129</h3>
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
            
            <div class="pro">
                <img src="food_items/food-6.jfif" alt="">
                <div class="desc">
                    <span>SwadSagar</span>
                    <h5>Chicken Biryani</h5>
                    <h3>₹109</h3>
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
            
            <div class="pro">
                <img src="food_items/Shahi-Panner.jpg" alt="">
                <div class="desc">
                    <span>SwadSagar</span>
                    <h5>Shahi Paneer</h5>
                    <h3>₹140</h3>
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
            
            <div class="pro">
                <img src="food_items/vegan-burger.jpg" alt="">
                <div class="desc">
                    <span>SwadSagar</span>
                    <h5>Vegan Burger</h5>
                    <h3>₹89</h3>
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
            
            <div class="pro">
                <img src="food_items/food-1.jfif" alt="">
                <div class="desc">
                    <span>SwadSagar</span>
                    <h5>Dal Makhni with Creamy Texture</h5>
                    <h3>₹79</h3>
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
            
            <div class="pro">
                <img src="food_items/food-7.jfif" alt="">
                <div class="desc">
                    <span>SwadSagar</span>
                    <h5>Chilli Paneer</h5>
                    <h3>₹149</h3>
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
            <div class="pro">
                <img src="food_items/food-5.jpg" alt="">
                <div class="desc">
                    <span>SwadSagar</span>
                    <h5>Mutton Qorma</h5>
                    <h3>₹399</h3>
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
            <div class="pro">
                <img src="food_items/food-4.jpg" alt="">
                <div class="desc">
                    <span>SwadSagar</span>
                    <h5>Spicy Chicken Qorma</h5>
                    <h3>₹220</h3>
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
            <div class="pro">
                <img src="food_items/food-3.jfif" alt="">
                <div class="desc">
                    <span>SwadSagar</span>
                    <h5>Paneer Tikka</h5>
                    <h3>₹149</h3>
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
            <div class="pro">
                <img src="food_items/pictures-of-pizza-23-1.jpg" alt="">
                <div class="desc">
                    <span>SwadSagar</span>
                    <h5>Large Size Cheezy Pizza</h5>
                    <h3>₹499</h3>
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
            <div class="pro">
                <img src="food_items/food-8.jfif" alt="">
                <div class="desc">
                    <span>SwadSagar</span>
                    <h5>Chill Ice-Creams</h5>
                    <h3>₹67</h3>
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
            <div class="pro">
                <img src="food_items/food-9.jfif" alt="">
                <div class="desc">
                    <span>SwadSagar</span>
                    <h5>Cold Drinks</h5>
                    <h3>₹39</h3>
                    <button class="quick-view">Quick View</button>
                </div>
            </div>
        </div>
        */