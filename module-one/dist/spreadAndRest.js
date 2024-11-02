"use strict";
{
    // spread operator
    // rest operator
    // destructuring
    // spread operator
    const friends1 = ["mridul", "shohan", "safin", "alamin"];
    const friends2 = ["billa", "nazmul", "shuvo"];
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
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // console.log('mentors 1' , mentors1);
    // console.log('mentors 2' , mentors2);
    // console.log('mentors list' , mentorList);
    // rest operator
    const myFriends = (frend1, frend2, frend3) => {
        // return [frend1, frend2, frend3];
        console.log(frend1, frend2, frend3);
    };
    // console.log('my friend' , myFriends("a" , "b" , "c"));
    const myFriends1 = (...rest) => {
        rest.forEach((friend) => {
            console.log("Hello", friend);
        });
    };
    //   console.log("my friend", myFriends1("a", "b", "c", "d", "e"));
}
