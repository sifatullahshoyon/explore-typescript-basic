"use strict";
{
    // Basic Data Types
    // String
    let fullName = "sifat ullah shoyon";
    // Number
    let age = 23;
    // Boolean
    let isFullStackDeveloper = true;
    // Undefined
    let x = undefined;
    // Null
    let y = null;
    // any type
    let d;
    d = 123;
    d = "sifat";
    d = false;
    let e;
    // e = 'hello ts'; error: Type 'string' is not assignable to type 'number'.ts(2322)
    e = 5632;
    // e = true; error: Type 'boolean' is not assignable to type 'boolean
    // Array
    let friends = [
        "shohan",
        "mridul",
        "safin",
        "alamin",
        "billa",
        "shuvo",
        "nazmul",
    ];
    // friends.push(9); Error: Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
    let friendsRollNumber = [5, 6, 9, 7, 3, 2, 1];
    // friendsRollNumber.push('shoyon'); Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
    // tuple --> array --> order --> type of values
    let coordinates = [1, 5];
    let ageName = [50, "Mr.x", true];
    ageName[0] = 67;
    // ageName[1] = 96; error : Type 'number' is not assignable to type 'string'.ts(2322)
    ageName[1] = "Sifat";
    ageName[2] = false;
}
