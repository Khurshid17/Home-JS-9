/* let user = {
    name: "Вася",
    surname: "Васильев",
    get fullName() { // свойство аксессор get - только возвращает результат
        return `${this.name} ${this.surname}`
    },
    set fullName(a) { // свойство аксессор set - только получает значение
        let arr = a.split(" ");
        this.name = arr[0];
        this.surname = arr[1];
    }
}

console.log(user);
user.fullName = "Петя Петров";
console.log(user); */

// Объект с продукцией
let product = {
    plainBurger: {
        name: "Гамбургер простой",
        price: 10000,
        kcall: 400,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: "Гамбургер FRESH",
        price: 20500,
        kcall: 500,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        kcall: 700,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    }
}
// Объект с ингредиентами
let extraProduct = {
    doubleMayonnaise: {
        name: "Двойной майонез",
        price: 500,
        kcall: 50
    },
    lettuce: {
        name: "Салатный лист",
        price: 300,
        kcall: 10
    },
    cheese: {
        name: "Сыр",
        price: 400,
        kcall: 30
    }
}

let btnPlusOrMinus = document.querySelectorAll('.main__product-btn');
for (let i = 0; i < btnPlusOrMinus.length; i++) {
    const element = btnPlusOrMinus[i];
    element.addEventListener("click", function () {
        plusOrMinus(this)
    })
}

function plusOrMinus(element) {
    // .closest() - возвращает родителя по селектору
    const parent = element.closest(".main__product");
    // .hasAttribute(name) - возвращает true, если атрибут есть
    // .getAttribute(name) - возвращает значение атрибута
    // .setAttribute(name, value) - изменяет значение атрибута
    // .removeAttribute(name) - удаляет атрибут
    let parentId = parent.getAttribute("id") // id секции в которой находится плюс или минус
    let symbol = element.getAttribute("data-symbol") // символ + или -
    if (symbol == "+" && product[parentId].amount < 10) {
        product[parentId].amount++
    } else if (symbol == "-" && product[parentId].amount > 0) {
        product[parentId].amount--
    }
    
    const num = parent.querySelector('.main__product-num');
    num.innerHTML = product[parentId].amount;
    const sum = parent.querySelector('.main__product-price span')
    sum.innerHTML = product[parentId].Summ;
    const kcall = parent.querySelector('.main__product-kcall span');
    kcall.innerHTML = product[parentId].Kcall;
}

// чекбоксы ингредиентов
const checkBox = document.querySelectorAll('.main__product-checkbox');
for (let i = 0; i < checkBox.length; i++) {
    const element = checkBox[i];
    element.addEventListener("click", function () {
        addExtraProduct(this);
    })
}

function addExtraProduct(element) {
    const parent = element.closest(".main__product")
    console.log(element);
}
function stepByStep() {
    let num = document.querySelector('.header__timer-extra');
    num.innerHTML++ 
    if (num.innerHTML < 20) {
        setTimeout(() => {
            stepByStep()
        }, 80);
    } else if (num.innerHTML < 50) {
        setTimeout(() => {
            stepByStep()
        }, 100);
    } else if (num.innerHTML < 80) {
        setTimeout(() => {
            stepByStep()
        }, 170);
    } else if (num.innerHTML < 95) {
        setTimeout(() => {
            stepByStep()
        }, 250);
    } else if (num.innerHTML <= 99) {
        setTimeout(() => {
            stepByStep()
        }, 300);
    }
    
}
stepByStep()