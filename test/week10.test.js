const { sumDigits } = require("../challenges/week10");
const { createRange } = require("../challenges/week10");
//const { getScreentimeAlertList } = require("../challenges/week10");



describe("sumDigits", () => {
    test("It throws an error if not passed a number", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");

        /* expect(() => {
             sumDigits("a");
         }).toThrow("n is required");
 
         expect(() => {
             sumDigits("4");
         }).toThrow("n is required"); */
    });

    test("It returns the sum of all its digits,", () => {
        const result = sumDigits([1, 2, 3]);
        const expected = 6;
        expect(result).toBe(expected);
    });
    test("It works okay with decimal", () => {
        expect(sumDigits([4, 5, 6.0, 7])).toBe(22);
    });
});

describe("createRange", () => {
    /*test("It throws an error if not passed start arguement", () => {
       expect(() => {
           createRange(end = 11, step = 2);
       }).toThrow("start is required");
   });
 
   test("It throws an error if not passed end arguement", () => {
       expect(() => {
           createRange("start = 3, end = 0, step = 2");
       }).toThrow("end is required");
   });

    test("It throws an error if start and end arguements are not numbers", () => {
        expect(() => {
            createRange("start = a, end = b, step = 2");
        }).toThrow("start and end arguements must be numbers");
    });*/


    test("it returns a range of numbers as an array", () => {
        const result = createRange(start = 3, end = 11, step = 2)
        const expected = [3, 5, 7, 9, 11]
        expect(result).toEqual(expected);
    })

    test("it assumes step is 1 when not provided and it also returns a range of numbers as an array", () => {
        const result = createRange(start = 3, end = 7)
        const expected = [3, 4, 5, 6, 7]
        expect(result).toEqual(expected);
    })

    test("it accepts negative numbers as arguements and returns a range of numbers as an array", () => {
        const result = createRange(start = -2, end = 3);
        const expected = [-2, -1, 0, 1, 2, 3]
        expect(result).toEqual(expected);
    });
})
/*
describe("getScreentimeAlertList", () => {
    test("it returns an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ]
    });
})
*/
