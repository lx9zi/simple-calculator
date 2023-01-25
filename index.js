// class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//         this.previousOperandTextElement = previousOperandTextElement
//         this.currentOperandTextElement = currentOperandTextElement
//         this.clear()
//     }

//     clear() {
//         this.currentOperand = ''
//         this.previousOperand = ''
//         this.operation = undefined
//     }

//     delete() {
//         this.currentOperand = this.currentOperand.toString().slice(0, -1)
//     }

//     appendNumber(number) {
//         if (number === '.' && this.currentOperand.includes('.')) return
//         this.currentOperand = this.currentOperand.toString() + number.toString()
//     }

//     chooseOperation(operation) {
//         if (this.currentOperand === '') return
//         if (this.previousOperand !== '') {
//             this.compute()
//         }
//         this.operation = operation
//         this.previousOperand = this.currentOperand
//         this.currentOperand = ''
//     }

//     compute() {
//         let computation
//         const prev = parseFloat(this.previousOperand)
//         const current = parseFloat(this.currentOperand)
//         if (isNaN(prev) || isNaN(current)) return
//         switch (this.operation) {
//             case '+':
//                 computation = prev + current
//                 break
//             case '-':
//                 computation = prev - current
//                 break
//             case '*':
//                 computation = prev * current
//                 break
//             case '÷':
//                 computation = prev / current
//                 break
//             default:
//                 return
//         }
//         this.currentOperand = computation
//         this.operation = undefined
//         this.previousOperand = ''
//     }

//     getDisplayNumber(number) {
//         const stringNumber = number.toString()
//         const integerDigits = parseFloat(stringNumber.split('.')[0])
//         const decimalDigits = stringNumber.split('.')[1]
//         let integerDisplay
//         if (isNaN(integerDigits)) {
//             integerDisplay = ''
//         } else {
//             integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
//         }
//         if (decimalDigits != null) {
//             return `${integerDisplay}.${decimalDigits}`
//         } else {
//             return integerDisplay
//         }
//     }

//     updateDisplay() {
//         this.currentOperandTextElement.innerText =
//             this.getDisplayNumber(this.currentOperand)
//         if (this.operation != null) {
//             this.previousOperandTextElement.innerText =
//                 `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//         } else {
//             this.previousOperandTextElement.innerText = ''
//         }
//     }
// }


// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equal]')
// const deleteButton = document.querySelector('[data-delete]')
// const allClearButton = document.querySelector('[data-all-clear]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]')

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay()
//     })
// })

// operationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.chooseOperation(button.innerText)
//         calculator.updateDisplay()
//     })
// })

// equalsButton.addEventListener('click', button => {
//     calculator.compute()
//     calculator.updateDisplay()
// })

// allClearButton.addEventListener('click', button => {
//     calculator.clear()
//     calculator.updateDisplay()
// })

// deleteButton.addEventListener('click', button => {
//     calculator.delete()
//     calculator.updateDisplay()
// })



class calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }


    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
        }
        else {
            this.previousOperandTextElement.innerText = ''
        }

    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }


    delete() {

        this.currentOperand = this.currentOperand.slice(0, -1)

    }

    chooseOperation(operation) {
        if (this.currentOperand == '') return
        if (this.previousOperand != '') {

            this.comput()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }


    comput() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }


}




const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const cal = new calculator(previousOperandTextElement, currentOperandTextElement);


numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        cal.appendNumber(btn.innerText);
        cal.updateDisplay();
    })
})

operationButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        cal.chooseOperation(btn.innerText);
        cal.updateDisplay();
    })
})

allClearButton.addEventListener('click', () => {
    cal.clear();
    cal.updateDisplay();
})

equalsButton.addEventListener('click', () => {
    cal.comput();
    cal.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    cal.delete();
    cal.updateDisplay();
})



const toggle = document.getElementsByClassName('toggle')[0];
const curcal = document.getElementsByClassName('curcal')[0];
const ShowPanel = document.getElementsByClassName('panel')[0];


toggle.addEventListener('click', () => {
    curcal.classList.toggle('active')

    if (curcal.classList.toggle('circal')) {
        ShowPanel.style.display = 'flex';
    }
    else {
        ShowPanel.style.display = 'none'
    }

})


const template = document.getElementsByClassName('cal-template')[0];
const ChangeColor = document.querySelectorAll('[data-color]');


ChangeColor.forEach((color) => {

    color.addEventListener('click', () => {

        switch (color) {
            case ChangeColor[0]:
                template.style.backgroundColor = 'red';
                break;

            case ChangeColor[1]:
                template.style.backgroundColor = '#688DD1';
                break;

            case ChangeColor[2]:
                template.style.backgroundColor = 'darkgreen';
                break;

            case ChangeColor[3]:
                template.style.backgroundColor = '#0BFA5A';
                break;

            case ChangeColor[4]:
                template.style.backgroundColor = 'rgb(114,7,236)';
                break;

            case ChangeColor[5]:
                template.style.backgroundColor = 'yellow';
                break;
        }
    })
})
