// common variable::
const plusPhoneBtn = document.getElementById('phone-plus');
const minusPhoneBtn = document.getElementById('phone-minus');
const plusCaseBtn = document.getElementById('case-plus');
const minusCaseBtn = document.getElementById('case-minus');
// 
function getInputField(product, price, isAdd) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isAdd == true) {
        productInput.value = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productInput.value = parseInt(productNumber) - 1;
    }
    const productTotalNumber = productInput.value;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productTotalNumber * price;
    // 
    updateInputFieldAmount();

}
// 
function fieldCall(product) {
    const inputAmount = document.getElementById(product + '-number');
    const inputTotalAmount = parseInt(inputAmount.value);
    return inputTotalAmount;
}

function updateInputFieldAmount() {
    const phoneTotalValue = fieldCall('phone') * 1219;
    const caseTotalValue = fieldCall('case') * 59;
    const subTotal = phoneTotalValue + caseTotalValue;
    const subTotalInput = document.getElementById('sub-total');
    subTotalInput.innerText = subTotal;
    const taxId = document.getElementById('tax-amount');
    const taxAmount = subTotal * 0.03;
    taxId.innerText = taxAmount.toFixed(2);
    const totalId = document.getElementById('total-price');
    const totalPrice = subTotal + taxAmount;
    totalId.innerText = totalPrice.toFixed(2);
}


// output command::
plusPhoneBtn.addEventListener('click', function() {
    getInputField("phone", 1219, true);
});
minusPhoneBtn.addEventListener('click', function() {
    getInputField('phone', 1219, false);
});
plusCaseBtn.addEventListener('click', function() {
    getInputField('case', 59, true);
});
minusCaseBtn.addEventListener('click', function() {
    getInputField('case', 59, false);
});