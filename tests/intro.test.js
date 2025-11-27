import {describe, test, it, expect} from "vitest";
import {calculateAverage, factorial, fizzBuzz, max} from "../src/intro.js";


describe('max', () => {
    it('should return the first argument if it is greater', () => {
        // Arrange
        // Act
        // Assert
        expect(max(2, 1)).toBe(2);
    })

    it('should return the second argument if it is greater', () => {
        expect(max(2, 3)).toBe(3);
    })

    it('should return the first argument if it is equal', () => {
        expect(max(10, 10)).toBe(10);
    })
})

describe('fizzBuzz', () => {
    it('should return FizzBuzz when divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })
    it('should return Fizz when divisible by 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    })
    it('should return Buzz when divisible by 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    })
    it('should return the number as a string when not divisible by 3 or 5', () => {
        expect(fizzBuzz(7)).toBe('7');
    })
})

describe('calculateAverage', () => {
    it('should return the average of an array of numbers', () => {
        const numbers = [2, 4, 6, 8];
        const expectedAverage = 5;
        expect(calculateAverage(numbers)).toBe(expectedAverage);
    })

    it('should return NaN for an empty array', () => {
        const numbers = [];
        expect(calculateAverage(numbers)).toBeNaN();
    })

    it('should handle negative numbers correctly', () => {
        const numbers = [-2, -4, -6, -8];
        const expectedAverage = -5;
        expect(calculateAverage(numbers)).toBe(expectedAverage);
    })
})


describe('factorial', () => {
    it('should return the factorial of a positive integer', () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(3)).toBe(6);
        expect(factorial(4)).toBe(24);
    })

    it('should return 1 for 0 and 1', () => {
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
    })

    it('should return undefined for negative integers', () => {
        expect(factorial(-3)).toBeUndefined();
    })
})