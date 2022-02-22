// common variable::
const plusPhoneBtn = document.getElementById('phone-plus');
const minusPhoneBtn = document.getElementById('phone-minus');
const plusCaseBtn = document.getElementById('case-plus');
const minusCaseBtn = document.getElementById('case-minus');
// 



// function for input field::
function getInputField(inputID, isAdd) {
    const inputValue = parseInt(document.getElementById(inputID).value);
    if (isAdd == true) {
        document.getElementById(inputID).value = inputValue + 1;
    } else {
        document.getElementById(inputID).value = inputValue - 1;
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