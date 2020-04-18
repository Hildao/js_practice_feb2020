const { sumMultiples } = require("../challenges/week9");
const { isValidDNA } = require("../challenges/week9");
const { getComplementaryDNA } = require("../challenges/week9");
const { isItPrime } = require("../challenges/week9");
const { createMatrix } = require("../challenges/week9");
const { areWeCovered } = require("../challenges/week9");

describe("sumMultiples", () => {
    test("It throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");

        expect(() => {
            sumMultiples("foo");
        }).toThrow("an Array is required");
        expect(() => {
            sumMultiples("4");
        }).toThrow("an Array is required");
    });

    test("it returns the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });

    test("it works okay with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    });

    test("return 0 if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("It throws an error if not passed a string", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");

        expect(() => {
            isValidDNA(["f", "O", "o"]);
        }).toThrow("str is required");

        expect(() => {
            isValidDNA(46);
        }).toThrow("str is required");
    });

    test("returns true if it receives a valid DNA string of characters C, G, T or A", () => {
        const result = isValidDNA("C", "G", "T", "A");
        const expected = true;
        expect(result).toBe(expected);
    });

    test("returns false if it receives an invalid DNA string of characters b, d, e", () => {
        const result = isValidDNA("b", "d", "e");
        const expected = false;
        expect(result).toBe(expected);
    });

    test("returns false if it receives a mixture of valid and  invalid DNA string of characters B, C, G", () => {
        const result = isValidDNA("B", "C", "G");
        const expected = false;
        expect(result).toBe(expected);
    });

    test("returns true if it receives a single valid DNA string of characters C", () => {
        const result = isValidDNA("C");
        const expected = true;
        expect(result).toBe(expected);
    });
});

describe("getComplementaryDNA", () => {
    test("It throws an error if not passed a string", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");

        expect(() => {
            getComplementaryDNA(463);
        }).toThrow("str is required");
    });

    test("returns a string of the complemetary base pairs. In DNA, T always pairs with A, and C always pairs with G.", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    });

    test("returns the DNA complimentary base pairs if it receives Lowercase and uppercase characters", () => {
        expect(getComplementaryDNA("AcTg")).toBe("TGAC");
    });

    test("returns the DNA complimentary base pairs if it receives all Lowercase characters", () => {
        expect(getComplementaryDNA("actg")).toBe("TGAC");
    });
});

describe("isItPrime", () => {
    test("It throws an error if not passed n", () => {
        expect(() => {
            isItPrime();
        }).toThrow("n is required");

        expect(() => {
            isItPrime("foo");
        }).toThrow("n is required");

        expect(() => {
            isItPrime("1");
        }).toThrow("n is required");
    });

    test("return true when it receives a primme number", () => {
        const result = isItPrime(7);
        const expected = true;
        expect(result).toBe(expected);
    });

    test("return false when number received is not a primme number", () => {
        const result = isItPrime(4);
        const expected = false;
        expect(result).toBe(expected);
    });
});

describe("createMatrix", () => {
    test("It throws an error if not passed n", () => {
        expect(() => {
            createMatrix();
        }).toThrow("n is required");

        expect(() => {
            createMatrix("A4", "foo");
        }).toThrow("n is required");


        expect(() => {
            createMatrix(1);
        }).toThrow("fill is required");
    });

    // <= complex value. Use toEqual for complex value
    test("returns a matrix of n * n when passed n", () => {
        expect(createMatrix(1, "foo")).toEqual([["foo"]]);
        expect(createMatrix(2, "foo")).toEqual([["foo", "foo"], ["foo", "foo",]]);
        expect(createMatrix(3, "foo")).toEqual([["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]]);
    });
});

describe("areWeCovered", () => {

    test("it returns false if there are no staff at all", () => {
        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    });

    test("it returns false if there are staff but < 3 are not scheduled to work", () => {
        const staff = [
            { name: "gary", rota: ["Monday", "Tuesday"] },
            { name: "paul", rota: ["Monday", "Tuesday", "Thursday"] },
            { name: "sally", rota: ["Monday", "Tuesday", "Thursday"] },
            { name: "jess", rota: ["Monday", "Tuesday", "Wednesday", "Friday"] },
            { name: "jack", rota: ["Thursday", "Saturday", "Sunday"] },
            { name: "Barry", rota: ["Tuesday", "Wednesday", "Sunday"] },
        ];

        expect(areWeCovered(staff, "Sunday")).toBe(false);
        expect(areWeCovered(staff, "Monday")).toBe(true);
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
        expect(areWeCovered(staff, "Thursday")).toBe(true);
        expect(areWeCovered(staff, "Friday")).toBe(false);
        expect(areWeCovered(staff, "Saturday")).toBe(false);
    });
});