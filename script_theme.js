
const popUpBtns = document.querySelectorAll('.quick-view');
const popUpViews = document.querySelectorAll('.pop-view');
const cancelBtns = document.querySelectorAll('.fa-circle-xmark');

var popUp = function(popUpCLick) {
    popUpViews[popUpCLick].classList.add('active');
}

popUpBtns.forEach((popUpBtn, i) => {
    popUpBtn.addEventListener('click', ()=> {
        popUp(i);
    });
});

var cancel = function(cancelClick) {
    popUpViews[cancelClick].classList.remove('active');
}

cancelBtns.forEach((cancelBtn, i) => {
    cancelBtn.addEventListener("click", ()=> {
        cancel(i);
    });
});
