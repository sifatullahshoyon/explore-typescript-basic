{
  //

  // nullable types / unknown types

  // nullable types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to search");
    }
  };

  searchName(null);

  // unknown types

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The Speed is ${convertedSpeed} ms^-1`);

    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The Speed is ${convertedSpeed} ms^-1`);
      
    } else {
      console.log("Wrong Input");
    }
  };

  getSpeedInMeterPerSecond(true);

  // never types

  const throwError = (message: string): never => {
    throw new Error(message);
  };

  throwError("something went wrong");

  //
}
