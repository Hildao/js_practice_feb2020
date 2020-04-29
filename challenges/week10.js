/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");

  sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += parseInt(n[i]);
  };
  return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (typeof start !== "number" || typeof end !== "number") throw new Error("start and end arguements must be numbers");
  if (step !== undefined && typeof step !== 'number') throw new Error("step arguement must be a number");

  let Array = [];
  if (step === undefined) {
    step = 1;
  }

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      Array.push(i);
    }
    return Array;
  };
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  if (!Array.isArray(users)) throw new Error("Try again. An Array and a string is required");

  newArr = []
  // Loop through users to get each user
  users.forEach((user) => {
    user.screenTime.forEach((apptime) => {       //  Loop through screentime to get each user screentime
      let sumScreenTime = Object.values(apptime.usage).reduce((a, b) => a + b);  // use reduce() to get the sum of screentime
      if (apptime.date === date && sumScreenTime > 100) {
        newArr.push(user.username)
      }
    });
  });
  return newArr;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (typeof hexStr !== "string") throw new Error("Hexcode is required to be a string. Please try again");

  // 6-digit hex value, concatenate the first two for red, next 2 for green and the last 2 for blue
  //  To get the values for the final RGB() string, prepend the variables with + to convert them from strings back to numbers which will yield the decimal needed

  let r = 0, g = 0, b = 0;

  //  6 digits  
  if (hexStr.length === 7) {
    r = "0x" + hexStr[1] + hexStr[2];
    g = "0x" + hexStr[3] + hexStr[4];
    b = "0x" + hexStr[5] + hexStr[6];
  };
  return "rgb(" + +r + "," + +g + "," + +b + ")";
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  if (!Array.isArray(board)) throw new Error("Incorrect arguement, board is required as an array");

  /** 
  There are 8 possible winning positions to check
  row1 = [0, 1, 2]
  row2 = [3, 4, 5]
  row3 = [6, 7, 8]
  col1 = [0, 3, 6]
  col2 = [1, 4, 7]
  col3 = [2, 5, 8]
  diagonal1 = [0, 4, 8]
  diagonal2 = [2, 4, 6]
*/

  let arr = [].concat(...board);

  let result = "";

  if ((arr[0] !== null) && arr[0] === arr[1] && (arr[1] === arr[2])) result = arr[0]
  else if ((arr[3] !== null) && arr[3] === arr[4] && (arr[4] === arr[5])) result = arr[3]
  else if ((arr[6] !== null) && arr[6] === arr[7] && (arr[7] === arr[8])) result = arr[6]
  else if ((arr[0] !== null) && arr[0] === arr[3] && (arr[3] === arr[6])) result = arr[0]
  else if ((arr[1] !== null) && arr[1] === arr[4] && (arr[4] === arr[7])) result = arr[1]
  else if ((arr[2] !== null) && arr[2] === arr[5] && (arr[5] === arr[8])) result = arr[2]
  else if ((arr[0] !== null) && arr[0] === arr[4] && (arr[4] === arr[8])) result = arr[0]
  else if ((arr[2] !== null) && arr[2] === arr[4] && (arr[4] === arr[6])) result = arr[2]
  else result = null;

  return result;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
