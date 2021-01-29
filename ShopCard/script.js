// // first way.. i don't link this
// phone increase
// document.getElementById('phone-increase').addEventListener('click', function () {
//     // const phoneInput = document.getElementById('phone-count');
//     // const phoneCount = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneCount + 1;
//     // phoneInput.value = phoneNewCount;
//     // const totlePhone = phoneNewCount * 1200;
//     // document.getElementById('phone-totle').innerText = `$ ${totlePhone}`;
// })
// phone decrease
// document.getElementById('phone-decrease').addEventListener('click', function () {
//     // const phoneInput = document.getElementById('phone-count');
//     // const phoneCount = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneCount - 1;
//     // phoneInput.value = phoneNewCount;
//     // const totlePhone = phoneNewCount * 1200;
//     // document.getElementById('phone-totle').innerText = `$ ${totlePhone}`;
// })

// // caseIncrease button
// document.getElementById('case-increase').addEventListener('click', function () {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const totleCase = caseNewCount * 60;
//     document.getElementById('case-totle').innerText = `$ ${totleCase}`;
// })

// // caseDecrease button
// document.getElementById('case-decrease').addEventListener('click', function () {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const totleCase = caseNewCount * 60;
//     document.getElementById('case-totle').innerText = `$ ${totleCase}`;
// })

// // second way.. i link this
// function handleProductPrice(isIncrease) {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     // increase
//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     }
//     // decrease
//     else if (isIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     // calculate price
//     const totleCase = caseNewCount * 60;
//     document.getElementById('case-totle').innerText = `$ ${totleCase}`;
// }
// function handlePhonePrice(isIncrease) {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     // increase
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     // decrease
//     else if (isIncrease == false && phoneNewCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     // calculate price
//     phoneInput.value = phoneNewCount;
//     const totlePhone = phoneCount * 1200;
//     document.getElementById('phone-totle').innerText = `$ ${totlePhone}`
// }


// third way.. really i link this
function handleProductPrice(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    // increase
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    // decrease
    else if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    // calculate price
    let productTotle = 0;
    // product phone
    if (product == 'phone') {
        productTotle = productNewCount * 1200;
    }
    // product case
    else if (product == 'case') {
        productTotle = productNewCount * 60;
    }
    document.getElementById(product + '-totle').innerText = `$ ${productTotle}`;
    // call calculateTotle() function
    calculateTotle()
}

// totle count
function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

function calculateTotle() {
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const totlePrice = (phoneCount * 1200) + (caseCount * 60);
    document.getElementById('totle-price').innerText = `$ ${totlePrice}`;

    const taxPrice = Math.round(totlePrice * 0.01);
    document.getElementById('tax-price').innerText = taxPrice;

    const totle = totlePrice + taxPrice;
    document.getElementById('totle-amount').innerText = totle;
}

document.getElementById('check-out').addEventListener('click', function () {
    const cart = document.getElementById('cart');
    cart.style.display = 'none';

    const success = document.getElementById('success');
    success.style.display = 'block';
})