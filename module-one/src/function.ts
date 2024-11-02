{
  // Learning Function
  // 1. normal function 2. arrow function

  // normal function
  function add(num1: number, num2: number = 12): number {
    return num1 + num2;
  }

  // console.log(add(5,7));

  // arrow function
  const addArrow = (num1: number, num2: number): number => num1 * num2;

  // console.log(addArrow(20,24));

  // object --> function --> method

  const poorUser = {
    name: "sifat",
    balance: 0,
    addBalance(balance: number): number {
      return this.balance + balance;
    },
  };

  // console.log('poor user' , poorUser);

  const poorUser1 = {
    name: "sifat",
    balance: 0,
    addBalance(balance: number): string {
      return `This is my new ${this.balance + balance} balance`;
    },
  };

  // console.log('poor user one' , poorUser1.addBalance(50));

  const array: number[] = [5, 9, 42, 15];

  const newArray: number[] = array?.map(
    (element: number): number => element * element
  );

  // console.log('array' , array);

  // console.log('new array' , newArray);
}
