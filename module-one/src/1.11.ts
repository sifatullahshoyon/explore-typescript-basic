{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 18;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  // Ternary Operator
  const isAdult = age >= 18 ? "Adult " : "NotAdult";

  // console.log({isAdult});

  const isAuthenticated = "";
  // const isAuthenticated = null;
  // const isAuthenticated = undefined;

  const result = isAuthenticated ?? "Guest";

  const result1 = isAuthenticated ? isAuthenticated : "user";

  // console.log({result});
  // console.log({result1});

  // optional chaining operator

  type UserInfo = {
    name: string;
    age: number;
    address: {
      city: string;
      street: string;
      houseNumber?: string;
      presentAddress: string;
      permanentAddress?: string;
    };
    isDeveloper: boolean;
  };

  const userInfo: UserInfo = {
    name: "sifat",
    age: 23,
    address: {
      city: "Dhk",
      street: "Bamoil",
      presentAddress: "Dhaka",
    },
    isDeveloper: true,
  };

  const permanentAddress = userInfo?.address?.permanentAddress ?? "No Permanent Address";

//   console.log({ permanentAddress: permanentAddress });
}
