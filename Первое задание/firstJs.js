`use strict`;

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let expenses = prompt("Введите обязательную статью расходов в этом месяце");
let expenses1 = prompt("Во сколько обойдется");


let appData = {
    price: money,
    timeData: time,
    expense: {
        first: expenses,
        second: expenses1
    },
    optionalExpenses: undefined,
    income: undefined,
    savings: false
};

alert(appData.price/30);
