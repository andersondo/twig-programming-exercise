function groupArrayElements(inputArray, n){
	/*
		Function that accepts an array and a positive integer n.
		Returns the contents of the array divided into n arrays.
		When the array cannot be divided equally the last array will contain any remaining elements.
	*/
	let groupedElements = [];

	if(!Array.isArray(inputArray)){
		throw new Error("inputArray parameter must be an array");
	}

	if (!Number.isInteger(n) || n <= 0) {
		throw new Error("n parameter must be an whole number greater than zero");
	}

	const groupSize = Math.ceil(inputArray.length / n); //array length for element groups
	inputArray = Array.from(inputArray); //clone the array to prevent empting the inputArray

	while(inputArray.length > 0){
		//the splice function removes elements from an array and returns them
		groupedElements.push(inputArray.splice(0, groupSize));
	}
	return groupedElements;
}

module.exports = groupArrayElements;
