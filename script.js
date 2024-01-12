
//DROPDOWN NAVBAR

const toggleBtn = document.querySelector('.toggle_btn'); 
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtnIcon.addEventListener('click', function() {
    
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark': 'fa-solid fa-bars'
});


/*For Login Page*/


const loginForm = document.querySelector('.loginClick');

loginForm.addEventListener('click', ()=> {
    const loginSection = document.querySelector('.details_container1');
    loginSection.classList.toggle('open_1')
});

const createAccount = document.querySelector('.registerClick');

createAccount.addEventListener('click', ()=> {
    const loginSection = document.querySelector('.details_container2');
    loginSection.classList.toggle('open_2')
});

