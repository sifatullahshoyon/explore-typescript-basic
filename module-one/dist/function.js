"use strict";
{
    // Learning Function
    // 1. normal function 2. arrow function
    // normal function
    function add(num1, num2 = 12) {
        return num1 + num2;
    }
    // console.log(add(5,7));
    // arrow function
    const addArrow = (num1, num2) => num1 * num2;
    // console.log(addArrow(20,24));
    // object --> function --> method
    const poorUser = {
        name: "sifat",
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        },
    };
    // console.log('poor user' , poorUser);
    const poorUser1 = {
        name: "sifat",
        balance: 0,
        addBalance(balance) {
            return `This is my new ${this.balance + balance} balance`;
        },
    };
    // console.log('poor user one' , poorUser1.addBalance(50));
    const array = [5, 9, 42, 15];
    const newArray = array === null || array === void 0 ? void 0 : array.map((element) => element * element);
    // console.log('array' , array);
    // console.log('new array' , newArray);
}
