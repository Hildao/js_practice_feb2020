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
  let arr = words.slice(1)
  let result = []
  arr.map((word) => result.push(word.charAt(0).toUpperCase() + word.slice(1)))

  return words.length > 1 ? `${words[0]}${result.join('')}` : words.toString()
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
  let menuArr = menu.map((arr) => Object.values(arr.ingredients)).some((i) => i.includes(ingredient));
  return menuArr
}


function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  //filter arr1 and arr2 then sort the duplicated numbers in ascending order.
  let duplicate = arr1.filter((item) => arr2.includes(item)).filter((item, index, arr) => arr.indexOf(item) === index).sort();
  return duplicate;
}


module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
