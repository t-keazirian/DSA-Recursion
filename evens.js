// write a function that accepts an array of numbers and returns a new array containing just the even numbers

const array = [1, 2, 3, 4, 5, 6];

const evens = array => {
	if (array.length === 0) {
		return [];
	} else if (array[0] % 2 === 0) {
		return [array[0] + evens(array[(1, array.length - 1)])];
	} else {
		return evens(array[(1, array.length - 1)]);
	}
};

console.log(evens(array));
