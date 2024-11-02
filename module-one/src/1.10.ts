{
  // Union And Intersection

  // Union Type
  type FrontEndDeveloper = "React Js" | "Angular Js";
  type FullStackDeveloper = "Mern" | "Python";

  type Developer = FrontEndDeveloper | FullStackDeveloper;

  const newDeveloper: FrontEndDeveloper = "React Js";

  type User = {
    name: string;
    email?: string;
    age: number;
    gender: "Male" | "Female";
    bloodGroup: "A+" | "B+" | "O+" | "AB+" | "AB-";
  };

  const user1: User = {
    name: "SIFAT",
    age: 28,
    gender: "Male",
    bloodGroup: "A+",
  };

  // Intersection Type

  type OrdenaryGpDesigner = {
    skills: string[];
    designation1: "ordenaryGpDesigner";
  };

  type UiUxDesigner = {
    skills: string[];
    designation2: "uiUxDesigner";
  };

  type GrapichDesigner = OrdenaryGpDesigner & UiUxDesigner;

  const grapichDesigner: GrapichDesigner = {
    skills: ["ps", "ai", "xd", "in"],
    designation1: "ordenaryGpDesigner",
    designation2: "uiUxDesigner",
  };
}
