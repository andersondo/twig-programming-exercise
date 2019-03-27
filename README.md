## Explanation
Function that accepts an array and a positive integer n. Returns the contents of the array divided into n arrays. When the array cannot be divided equally the last array will contain the remainder.

This function works by calling the splice method on a copy of input array.

`inputArray.splice(0, groupSize)` deletes an amount of elements from the array and returns them as an array.

groupSize is the desired length of each array of groupedElements and is calculated dividing the array length by n and rounding up.

Because the values are deleted from the array, the input array is cloned prior to splicing to prevent the unintended side-effect of altering the input array.

The function repeatedly splices the first N values off the copied array, until it's empty, to construct the desired output

When using `array.splice(start, deleteCount)` if there are less elements in `array` after the index `start` than is specified by `deleteCount`, splice will still delete and return all the elements after `start`.

A full description of splice can be found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

## How to run

Download this repository and open a terminal in the project directory.

Use `npm install` to install mocha

To run the tests use `npm test`

To try the function out for yourself run `node` in a terminal in the project directory and then run `var groupArrayElements = require('../src/groupArrayElements');` to import the function.

## Assumptions
I have made some assumptions to answer questions that I couldn't answer with the spec, I'll explain them below. I'm willing to make changes to this project if my assumptions are incorrect or if I have misunderstood the spec.

### Rounding up

Given the following example from the spec.

```
groupArrayElements([1, 2, 3, 4, 5], 3);
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```

I have assumed that when deciding how many elements should be in each group that the division should be rounded up. If the function did integer division and added the remainder to the last array it would return `[ [ 1 ], [ 2 ], [ 3, 4 ,5 ]]`. If this is the desired behaviour then it can be achieved by making the following changes although a total refactor might be a better approach

+ change `Math.ceil(inputArray.length / n)` to `Math.floor(inputArray.length / n)`
+ change `while(inputArray.length > 0){` to `for(let i = 0; i < n; i++){` 
+ add `groupedElements[groupedElements.length - 1].push(...inputArray)` before the return statement.

### No empty arrays
Because I made the assumption to round up, sometimes an array that can't be divided evenly will have no remainder. For example.

```
groupArrayElements(groupArrayElements([1, 2, 3, 4, 5, 6], 4);
// [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
```

I've made the assumption here that in this case this function should not append an empty array to the end to make n groups. If this is incorrect the desired behaviour can be achieved by changing `while(inputArray.length > 0){` to `for(let i = 0; i < n; i++){`

### N can be greater than the length of the array.

In the case where N is greater than the length of the array, each array element will be grouped individually. For example.

```
groupArrayElements(groupArrayElements([1, 2, 3], 5);
// [ [ 1 ], [ 2 ], [ 3 ] ]
```

If the desired behaviour is to append empty arrays to make N groups change `while(inputArray.length > 0){` to `for(let i = 0; i < n; i++){`.

If the desired behaviour is to not allow N to be greater than the length of the array then an error can be thrown by adding the following after the other input checks.

```
if(n > inputArray.length){
	throw new Error("N must be less than or equal to the length of the inputArray");
}
```

### Throwing errors is acceptable

It might be preferable to fail gracefully than to throw errors, in that case I would use `return [];` in place of the throw statements
