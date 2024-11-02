"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing operator
    const age = 18;
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Not Adult");
    }
    // Ternary Operator
    const isAdult = age >= 18 ? "Adult " : "NotAdult";
    // console.log({isAdult});
    const isAuthenticated = "";
    // const isAuthenticated = null;
    // const isAuthenticated = undefined;
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result1 = isAuthenticated ? isAuthenticated : "user";
    const userInfo = {
        name: "sifat",
        age: 23,
        address: {
            city: "Dhk",
            street: "Bamoil",
            presentAddress: "Dhaka",
        },
        isDeveloper: true,
    };
    const permanentAddress = (_b = (_a = userInfo === null || userInfo === void 0 ? void 0 : userInfo.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    //   console.log({ permanentAddress: permanentAddress });
}
