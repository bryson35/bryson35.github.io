const calculator = document.querySelector('.calculator-container');
const keys = calculator.querySelector('.keys');
const display = calculator.querySelector('.display');


keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action){
            if (displayedNum === '0' || previousKeyType === 'operator'){
                display.textContent = keyContent;
            }
            else{
                display.textContent = displayedNum + keyContent;
                
            }
            calculator.dataset.previousKeyType = 'number';
            
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ){
            key.classList.add('is-depressed');
            // custom attribute
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }

        if (action === 'decimal'){
            display.textContent = displayedNum + '.';
            calculator.dataset.previousKeyType = 'decimal';
        }
        if(action === "clear"){
            calculator.dataset.firstValue = '';
            calculator.dataset.operator = '';
            calculator.dataset.previousKeyType = '';
            display.textContent = 0;
            calculator.dataset.previousKeyType = 'clear';
        }
        if (action === 'calculate'){
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            display.textContent = calculate(firstValue, operator, secondValue);
            calculator.dataset.previousKeyType = 'calculate';

        }

        Array.from(key.parentNode.children).forEach(
            k => k.classList.remove('is-depressed'));

    }
});

const calculate = (n1, operator, n2) => {
    let result = '';

    if (operator === 'add'){
        result = Math.round((parseFloat(n1) + parseFloat(n2)) * 100) / 100;
    }
    else if (operator === 'subtract'){
        result = Math.round((parseFloat(n1) - parseFloat(n2) * 100) / 100);
    }
    else if (operator === 'multiply'){
        result = Math.round((parseFloat(n1) * parseFloat(n2)* 100) / 100);
    }
    else if (operator === 'divide'){
        result = Math.round((parseFloat(n1) / parseFloat(n2)* 100) / 100);
    }

    return result;
}


//number key P




