'use strict';
// premium services product slider
const premiumServices = document.querySelectorAll('.premium');
const premiumServiceHandler = (e) => {
    if (!e.target.classList.contains('prev--js') && !e.target.classList.contains('next--js')) return;
    const productContainer = e.target.closest('.premium_products').querySelector('.container');
    if (e.target.classList.contains('prev--js')) {
        productContainer.scrollLeft -= 200;
        console.log(productContainer.scrollLeft);
    }
    else {
        productContainer.scrollLeft += 200;
        console.log(productContainer.scrollLeft);
    }
}
premiumServices.forEach(service => {
    service.addEventListener('click', premiumServiceHandler);
})

// phone number validation
const numberSubmit = document.querySelector('.btn--js');
const numberInput = document.querySelector('.number-input--js');
const warningText = document.querySelector('.warning');
numberSubmit.addEventListener('click', () => {
    let regEx = /^\d{10}$/;
    if (!numberInput.value.match(regEx)) {
        warningText.style.display = 'block';
        setTimeout(() => warningText.style.display = 'none', 1000);
    }
})