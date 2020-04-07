const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!

  // Find the index of the occurance of n the given number in the array
  let i = nums.indexOf(n);

  // Return the next number after n
  return nums.includes(n) && nums[++i] || null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!

  let countForZero = 0;
  let countForOne = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      countForZero++;
    }
    else {
      countForOne++;
    }
  }

  return {
    "0": countForZero,
    "1": countForOne
  };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!

  return Number(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  // .flat() method to flatten sub-arrays to create a new array with all the sub-array elements concatnated 
  // Use .reduce() method to execute reducer function on each element of the array, resulting in a single output value.
  return arrs.flat().reduce((accumulator, currentValue) => accumulator + currentValue)
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!

  let arrCopy = [...arr];
  let [first] = [arrCopy.splice(0, 1)]
  let [last] = [arrCopy.splice(-1)]

  return [...last, ...arrCopy, ...first];
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!

  return Object.values(haystack).toString().toLowerCase().includes(searchTerm.toUpperCase().toLowerCase());
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!

  return str.replace(/[^\w\s]/g, '')
    .toLowerCase()
    .split(/\s/)
    .reduce((map, word) =>
      Object.assign(map, {
        [word]: (map[word])
          ? map[word] + 1
          : 1,
      }),
      {}
    );
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
