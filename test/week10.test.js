const { sumDigits } = require("../challenges/week10");
const { createRange } = require("../challenges/week10");
const { getScreentimeAlertList } = require("../challenges/week10");
const { hexToRGB } = require("../challenges/week10");
const { findWinner } = require("../challenges/week10");


describe("sumDigits", () => {
    test("It throws an error if not passed a number", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");
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
    test("It throws an error if not passed start arguement", () => {
        expect(() => {
            createRange();
        }).toThrow("start is required");
    });

    test("It throws an error if not passed end arguement", () => {
        expect(() => {
            createRange(3);
        }).toThrow("end is required");
    });

    test("It throws an error if start and end arguements are not numbers", () => {
        expect(() => {
            createRange("a", "b");
        }).toThrow("start and end arguements must be numbers");
    });

    test("It throws an error if start and end arguements are not numbers", () => {
        expect(() => {
            createRange(3, 11, [1]);
        }).toThrow("step arguement must be a number");
    });

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

describe("getScreentimeAlertList", () => {
    test("It throws an error if not passed users", () => {
        expect(() => {
            getScreentimeAlertList();
        }).toThrow("users is required");
    });
    test("It throws an error if not passed date", () => {
        expect(() => {
            getScreentimeAlertList(["usher"]);
        }).toThrow("date is required");
    });
    test("It throws an error if not passed an array and a string as arguements", () => {
        expect(() => {
            getScreentimeAlertList("usher", 2019 - 12 - 11);
        }).toThrow("Try again. An Array and a string is required");
    });

    test("it returns an array of usernames of users who have used > 100 minutes of screentime for a given date.", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                    { date: "2019-06-15", usage: { twitter: 50, instagram: 42, facebook: 32 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                    { date: "2019-06-15", usage: { mapMyRun: 0, whatsApp: 25, facebook: 40, safari: 50 } },
                ]
            },
        ]

        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(users, "2019-06-15")).toEqual(["beth_1234", "sam_j_1989"]);
        expect(getScreentimeAlertList(users, "2019-06-11")).toEqual([]);
    });
})

describe("hexToRGB", () => {
    test("It throws an error if not passed hexStr", () => {
        expect(() => {
            hexToRGB();
        }).toThrow("hexStr is required");
    });

    test("It throws an error if passed incorrect hexadecimal format", () => {
        expect(() => {
            hexToRGB(2211337);
        }).toThrow("Hexcode is required to be a string. Please try again");
    });


    test("it transforms the hex code into an RGB code format", () => {
        expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)")
        expect(hexToRGB("#E53131")).toEqual("rgb(229,49,49)")
    });
});

describe("findWinner", () => {
    test("It throws an error if not passed a board", () => {
        expect(() => {
            findWinner();
        }).toThrow("board is required");
    });

    test("It throws an error if not passed a board as an array", () => {
        expect(() => {
            findWinner("board");
        }).toThrow("Incorrect arguement, board is required as an array");
    });

    test("Returns X if player X has won, 0 if player 0 has won, and null if there is currently no winner", () => {
        const board = [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ]

        const board1 = [
            [null, "X", "X"],
            ["0", "0", "0"],
            ["X", null, null]
        ]

        const board2 = [
            [null, "0", "X"],
            ["0", "X", null],
            ["X", null, "0"]
        ]

        const board3 = [
            ["0", "0", "X"],
            ["0", "0", "X"],
            ["X", "X", "0"]
        ]

        const board4 = [
            ["X", "0", "0"],
            ["0", "X", "X"],
            ["X", "X", "0"]
        ]

        expect(findWinner(board)).toEqual("X");
        expect(findWinner(board1)).toEqual("0");
        expect(findWinner(board2)).toEqual("X");
        expect(findWinner(board3)).toEqual("0");
        expect(findWinner(board4)).toEqual(null);
    });

});

