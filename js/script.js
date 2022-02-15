

function updatePrice(memory, price) {
    const memoryCost = document.getElementById(memory);
    memoryCost.innerText = price;

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText
    const total = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total;
    console.log('check')

}

function whemClick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener('click', function () {

        updatePrice(updateId, price)


    })

}
whemClick('eightGB', 'memory-cost', 0)
whemClick('sixteenGB', 'memory-cost', 200)
whemClick('ssd1', 'storage-cost', 0)
whemClick('ssd2', 'storage-cost', 500)
whemClick('ssd3', 'storage-cost', 700)
whemClick('ssd3', 'storage-cost', 700)
whemClick('free-delivery', 'delivery-cost', 0)
whemClick('paid-delivery', 'delivery-cost', 50)

const promoCode = 'pHero';
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input').value;
    if (promoInput == promoCode) {
        const total = document.getElementById('total-price');
        let totalPrice = parseFloat(total.innerText);
        const discount = totalPrice * 20 / 100;
        totalPrice = totalPrice - discount;
        total.innerText = totalPrice;

    }
    else {

    }

})

// document.getElementById('eightGB').addEventListener('click', function () {

//     updatePrice('memory-cost', 0)

// })
// document.getElementById('sixteenGB').addEventListener('click', function () {

//     updatePrice('memory-cost', 200)

// })
// document.getElementById('ssd1').addEventListener('click', function () {

//     updatePrice('storage-cost', 0)

// })
// document.getElementById('ssd2').addEventListener('click', function () {

//     updatePrice('storage-cost', 500)

// })
// document.getElementById('ssd3').addEventListener('click', function () {

//     updatePrice('storage-cost', 700)

// })
// document.getElementById('free-delivery').addEventListener('click', function () {

//     updatePrice('delivery-cost', 0)

// })
// document.getElementById('paid-delivery').addEventListener('click', function () {

//     updatePrice('delivery-cost', 50)

// })
