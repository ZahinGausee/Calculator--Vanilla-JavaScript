let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector("input");

class Calculator {
    constructor(num1, num2, op) {
        this.num1 = num1;
        this.num2 = num2;
        this.op = op;
    }
    add()   { 
        return (this.num1 + this.num2);
    }
    sub()   {
        return (this.num1 - this.num2);
    }
    mul()   {
        return (this.num1 * this.num2);
    }
    div()   {
        return (this.num1 / this.num2);
    }
};

function operate(Calculator) {
    let res = 0;
    if(Calculator.op === '+')   {
        res = Calculator.add();
    }
    else if(Calculator.op === '-')   {
        res = Calculator.sub();
    }
    else if(Calculator.op === '*')   {
        res = Calculator.mul();
    }
    else if(Calculator.op === '/')   {
        res = Calculator.div();
    }
    return res;
}

function extractNumbersAndOperator(expression) {
    // Find the index of the operator
    const operatorIndex = expression.search(/[+\-*/]/);
    
    if (operatorIndex !== -1) {
        const operator = expression.charAt(operatorIndex);
        const num1 = parseInt(expression.slice(0, operatorIndex));
        const num2 = parseInt(expression.slice(operatorIndex + 1));

        return { num1, operator, num2 };
    } else {
        // Handle the case where no operator is found
        console.error("Invalid expression. No operator found.");
        return null;
    }
}

const clear = () => {
    return string = "";
}

function display(target)  {
            if (target === "=")  {
                const result = extractNumbersAndOperator(string);
                const calc = new Calculator(result.num1, result.num2, result.operator);
                string = operate(calc);
                input.value = string;
            }
            else if (target === "C") {
                input.value = clear();    
            }
            else {
                input.value = input.value + target;
                string = input.value;
            }
} 

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        display(e.target.innerHTML);
    });
});

