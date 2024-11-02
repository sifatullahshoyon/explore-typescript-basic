{
  // Reference Type --> Object

  const user: {
    // company: 'Dev Daynamos'; // type --> literal types
    readonly company: string; // type --> literal types
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Dev Daynamos",
    firstName: "Sifat",
    // middleName: 'Ullah',
    lastName: "Shoyon",
    isMarried: false,
  };

  // user.company = 'Daynamic Codars'; // Error Cannot assign to 'company' because it is a read-only property.ts(2540)

  // Readonly
  const user1: {
    company: string; // type --> literal types
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Dev Daynamos",
    firstName: "Sifat",
    // middleName: 'Ullah',
    lastName: "Shoyon",
    isMarried: false,
  };

  user1.company = "PH";
}
