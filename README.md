## Explaination

This function works by calling the splice method on a copy of input array.

`inputArray.splice(0,n)` deletes n elements from the array and returns them as an array.

Because the values are removed from the array, the input array is cloned with `Array.from` prior to splicing to prevent the unintended side-effect of empting the input array.

The function repeatedly splices the first n values off the copied array, until it's empty, to construct the desired output

When using `array.splice(start, deleteCount)` if there are less elements in the array after the start point the is specified by deleteCount, splice will still delete and return all the elements after the start point.

A full description of splice can be found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice