console.log('We are happy');

const inputs = document.querySelectorAll('option');

const squareType = document.querySelector('#square-type');
const squareDesign = document.querySelector('#square-design');
const squareAdapt = document.querySelector('#square-adapt');

const basePrice = 5000;
const totalPriceElement = document.querySelector('#total-price');

function calculate(){
    let totalPrice = basePrice * parseInt(squareType.value);
    console.log("Финальная цена: " + totalPriceElement.innerText);

    for (const option of squareType){
        if(option.checked){
            console.log('We are happy');

            totalPrice *= parseFloat(option.value);
        }

        for (const option of squareType) {
            if (option.checked) {
                totalPrice = totalPrice * parseFloat(option.value);
            }
        }
    
        for (const option of squareType) {
            if (option.checked) {
                totalPrice = totalPrice * parseFloat(option.value);
            }
        }
    }

    const formatter = new Intl.NumberFormat('ru');

    totalPriceElement.innerText = formatter.format(totalPrice);

}

calculate();

for (const option of options) {
    option.addEventListener('option', function(){
        calculate();
    })
}