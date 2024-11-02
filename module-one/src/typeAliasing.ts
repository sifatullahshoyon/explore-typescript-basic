{
  // Type Aliasing

  // variable types
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    addressNo: string;
  };

  const student1: Student = {
    name: "Sifat",
    age: 36,
    gender: "Male",
    contactNo: "01600000000",
    addressNo: "ctg",
  };

  const student2: Student = {
    name: "Ullah",
    age: 21,
    gender: "Male",
    addressNo: "Dhk",
  };

  const student3: Student = {
    name: "shoyon",
    age: 40,
    gender: "Male",
    contactNo: "01400000000",
    addressNo: "ctg",
  };

  // string , boolean , function Types Aliasing

  // Types Aliasing
  type UserName = string;
  // variable
  const userName: UserName = "sifat ullah shoyon";

  // Types Aliasing
  type IsAdmin = boolean;
  // Variable
  const isAdmin: IsAdmin = true;

  // Types Aliasing
  type Add = (num1: number, num2: number) => number;
  // Function
  const add: Add = (num1, num2) => num1 + num2;
}
