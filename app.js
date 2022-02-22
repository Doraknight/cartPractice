// common variable::
const plusPhoneBtn = document.getElementById('phone-plus');
const minusPhoneBtn = document.getElementById('phone-minus');
const plusCaseBtn = document.getElementById('case-plus');
const minusCaseBtn = document.getElementById('case-minus');
// 



// function for input field::
function getInputField(inputID, isAdd) {
    const inputValue = document.getElementById(inputID);
    let productAmount = inputValue.value;
    if (isAdd == true) {
        productAmount = parseInt(productAmount) + 1;
    } else if (inputValue > 0) {
        productAmount = parseInt(productAmount) - 1;
    }

}
// output command::
plusPhoneBtn.addEventListener('click', function() {
    getInputField('phone-number', true);
});
minusPhoneBtn.addEventListener('click', function() {
    getInputField('phone-number', false);
});
plusCaseBtn.addEventListener('click', function() {
    getInputField('case-number', true);
});
minusCaseBtn.addEventListener('click', function() {
    getInputField('case-number', false);
});