{
  // Destructuring

  // Object Destructuring

  const users = {
    _id: 569,
    name: {
      firstName: "SIFAT",
      middleName: "ULLAH",
      lastName: "SHOYON",
    },
    isDeveloper: true,
    address: "Dhaka, BD",
    contactNo: "0190000000",
  };

  const {
    _id,
    name: { firstName, middleName: midName, lastName },
    isDeveloper,
    address,
    contactNo,
  } = users;

  // console.log(midName);

  // Array Destructuring

  const myFriends: string[] = [
    "mridul",
    "alamin",
    "safin",
    "shohan",
    "billa",
    "nazmul",
    "shuvo",
  ];

  const [a, , , bestFriend, masum, ...rest] = myFriends;

  const bstFrnd = bestFriend; // name aliasing

//   console.log(bstFrnd);
}
