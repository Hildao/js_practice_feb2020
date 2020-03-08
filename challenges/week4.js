function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const smallNums = nums.filter(num => num < 1);
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  return names.filter(name => name.startsWith(char));
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  return words.filter(words => words.startsWith('to'));
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  output = [];
  nums.forEach((num) => {

    //Math.trunc() method truncates the decimal part of the number and returns the integer part.
    if (num === Math.trunc(num)) {
      output.push(num);
    }
  });
  return output;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let output = [];
  users.forEach((user) => {
    output.push(user.data.city.displayName);
  });
  return output;
}


function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  output = [];
  nums.forEach((num) => {
    let x = Math.sqrt(num);
    output.push(Math.round(x * 100) / 100);
  });
  return output;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  output = [];
  sentences.forEach((sentence) => {
    if (sentence.toLowerCase().indexOf(str.toLowerCase()) != -1) {
      output.push(sentence);
    }
  });
  return output;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  output = [];

  //loop through the array to get each triangle array
  triangles.forEach((triangle) => {
    let longestSide = 0;

    //Loop through the sides in the triangle
    triangle.forEach((side) => {

      //if current side is larger than longestSide replace longestSide with current side
      if (side > longestSide) {
        longestSide = side;
      }
    });

    //Now push the value of longertSide into outPut array
    output.push(longestSide);
  });
  return output;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
