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
})
