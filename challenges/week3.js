function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] * nums[i]);            //square original numbers
  }
  return result;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let count = 0;
  let sub = [];
  for (let i = 0; i < people.length; i++) {
    sub.push(people[i].subjects);
  }
  return sub.flat(1).length;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}


module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
