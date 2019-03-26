var groupArrayElements = require('../src/groupArrayElements');
var assert = require('assert');

describe("groupArrayElements()", function() {
	it("should divide the provided array into equally sized arrays", function() {
		assert.deepEqual(groupArrayElements([1, 2, 3, 4, 5, 6], 1), [[1, 2, 3, 4, 5, 6]]);
		assert.deepEqual(groupArrayElements([1, 2, 3, 4, 5, 6], 2), [[1, 2, 3], [4, 5, 6]]);
		assert.deepEqual(groupArrayElements([1, 2, 3, 4, 5, 6], 3), [[1, 2], [3, 4], [5, 6]]);
		assert.deepEqual(groupArrayElements([1, 2, 3, 4, 5, 6], 6), [[1], [2], [3], [4], [5], [6]]);
	});

	it("should put any remaining elements in the final group if array cannot be divided equally", function() {
		assert.deepEqual(groupArrayElements([1, 2, 3, 4, 5], 3), [[1, 2], [3, 4], [5]]);
		assert.deepEqual(groupArrayElements([1, 2, 3, 4, 5, 6], 4), [[1, 2], [3, 4], [5, 6]]);
	});
	it("should group items individually if the number of groups is greater tha the array length", function() {
		assert.deepEqual(groupArrayElements([1, 2, 3, 4, 5], 10), [[1], [2], [3], [4], [5]]);
	});
	it("should return an empty array if given an empty array", function(){
		assert.deepEqual(groupArrayElements([], 10), []);
	});
	it("should throw an error if the first argument isn't an array", function(){
		const errorMessage = "inputArray parameter must be an array";
		assert.throws( () => groupArrayElements(undefined, 10), errorMessage);
		assert.throws( () => groupArrayElements("string", 10), errorMessage);
		assert.throws( () => groupArrayElements(10, 10), errorMessage);
		assert.throws( () => groupArrayElements(NaN, 10), errorMessage);
		assert.throws( () => groupArrayElements(null, 10), errorMessage);
		assert.throws( () => groupArrayElements(null), errorMessage);
		assert.throws( () => groupArrayElements(), errorMessage);
	});
	it("should throw an error if the second argument isn't an positive integer", function(){
		const errorMessage = "n parameter must be an whole number greater than zero";
		assert.throws( () => groupArrayElements([], 0), errorMessage);
		assert.throws( () => groupArrayElements([], -0), errorMessage);
		assert.throws( () => groupArrayElements([], -1), errorMessage);
		assert.throws( () => groupArrayElements([], 1.5), errorMessage);
		assert.throws( () => groupArrayElements([], Infinity), errorMessage);
		assert.throws( () => groupArrayElements([], -Infinity), errorMessage);
		assert.throws( () => groupArrayElements([], undefined), errorMessage);
		assert.throws( () => groupArrayElements([], "string"), errorMessage);
		assert.throws( () => groupArrayElements([], NaN), errorMessage);
		assert.throws( () => groupArrayElements([], null), errorMessage);
		assert.throws( () => groupArrayElements([]), errorMessage);
	});
	it("should not alter the input array", function(){
		let array = [1,2,3,4,5,6];
		groupArrayElements(array, 2);
		assert.deepEqual(array, [1,2,3,4,5,6]);
	});
});

