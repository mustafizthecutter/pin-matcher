function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('it is 3 digit', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    console.log(pin);
    document.getElementById('display-pin').value = pin;

}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const numbers = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(numbers)) {
        if (numbers == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + numbers;
        calcInput.value = newNumber;
    }

})
function submitBtn() {
    const generatePin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const succes = document.getElementById('pin-success');
    const failed = document.getElementById('pin-failed');
    if (generatePin == typedPin) {

        succes.style.display = 'block';
        failed.style.display = 'none';
    }
    else {
        succes.style.display = 'none';
        failed.style.display = 'block';

    }
}