function calcCartPriceAndDelivery(){
    const cartWrapper = document.querySelector('.cart-item');
    const priceElements = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    let priceTotal = 0;

    priceElements.forEach(function (item) {
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');

    
        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);

        
    });

    //Отображаем цену на странице

    totalPriceEl.innerText = priceTotal;

    if (priceTotal > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    if (priceTotal >= 60){

        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.removed('10 BYN');
    }

}