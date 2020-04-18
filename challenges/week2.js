function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  //Math.ceil() function always rounds a number up to the next largest whole number or integer.
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let sheepCount = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === "sheep") {
      sheepCount++;
    }
  }
  return sheepCount;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.address.city === "Manchester" && person.address.postCode.charAt(0).toUpperCase() === "M") {
    return true;
  } else {
    return false;
  }

}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
