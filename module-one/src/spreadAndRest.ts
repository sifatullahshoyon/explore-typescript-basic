{
  // spread operator
  // rest operator
  // destructuring

  // spread operator

  const friends1: string[] = ["mridul", "shohan", "safin", "alamin"];

  const friends2: string[] = ["billa", "nazmul", "shuvo"];

  friends1.push(...friends2);

  // console.log(friends1);

  const mentors1 = {
    typeScript: "Mezba",
    redax: "Mir",
    dbms: "mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "tanmoy",
    cloud: "nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // console.log('mentors 1' , mentors1);
  // console.log('mentors 2' , mentors2);
  // console.log('mentors list' , mentorList);

  // rest operator

  const myFriends = (frend1: string, frend2: string, frend3: string) => {
    // return [frend1, frend2, frend3];
    console.log(frend1, frend2, frend3);
  };

  // console.log('my friend' , myFriends("a" , "b" , "c"));

  const myFriends1 = (...rest: string[]) => {
    rest.forEach((friend: String) => {
      console.log("Hello", friend);
    });
  };

//   console.log("my friend", myFriends1("a", "b", "c", "d", "e"));
}
