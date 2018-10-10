/*

Recursion Exercises Using Array Methods!

The first few should be easy but we need to turn some regular array functions into a more functional form!
Use any previous implementations in the later ones. Use function composition. Use recursion when possible.

*/

// Head
// Return the first item in an array. Is useful when you need to separate the first item from the rest of the array items. To do this, we make use of destructuring assignment.

// const array = [1, 2, 3, 4, 5]
// head(array) // 1

// Tail
// Return all but the first item in an array.

// const array = [1, 2, 3, 4, 5]
// tail(array) // [2,3,4,5]

// Def
// Return if argument supplied is defined.

// const defined = 'this is defined'
// def(defined) // true
// def(doesntExist) // false

// Undef
// Return if argument supplied is undefined.

// const defined = 'this is defined'
// undef(defined) // false
// undef(doesntExist) // true

// Copy
// Returns a copy of an array without using Array.slice(). Makes use of spread. (don't use the length property, do use recrusion)

// let array = [1, 2, 3, 4, 5]
// let copied = copy(array)
// copied.push(6)

// array // [1,2,3,4,5]
// copied // [1,2,3,4,5,6]

// Length
// Return the length of an array. This is a very simple form of looping through an array with recursion, even though the values of the array don’t matter in this case (increments up starting at 1 for every item in array). We include the len param to avoid tail recursion.

// const array = [1, 2, 3, 4, 5]
// length(array) // 5

// Reverse
// Return a reversed array. Use recursion.

// const array = [1, 2, 3, 4, 5]
// reverse(array) // [5,4,3,2,1]

// First
// Returns a new array that contains the first n items of the given array. Use recursion.

// const array = [1, 2, 3, 4, 5]
// first(array, 3) // [1,2,3]

// Last
// Returns a new array that contains the last n items of the given array.

// const array = [1, 2, 3, 4, 5]
// last(array, 3) // [3,4,5]

// Slice
// Returns a new array with value inserted at given index.

// const array = [1, 2, 4, 5]
// slice(array, 2, 3) // [1,2,3,4,5]

// isArray
// Returns if the value supplied is an array. Allows us to write Array.isArray() in a more functional manner.

// const array = [1, 2, 3, 4, 5]
// isArray(array) // true

// Flatten
// Combines nested arrays into a single array.

// const array1 = [1, 2, 3]
// const array2 = [4, [5, [6]]]
// flatten([array1, array2]) // [1,2,3,4,5,6]

// Swap
// Return a new array with 2 items swapped based on their index.

// const array = [1, 2, 3, 4, 5]
// swap(array, 0, 4) // [5,2,3,4,1]

// Map
// From MDN: “…creates a new array with the results of calling a provided function on every element in this array.”

// const double = x => x * 2
// map([1, 2, 3], double) // [2,4,6]

// Filter
// From MDN: “…creates a new array with all elements that pass the test implemented by the provided function.”

// const even = x => x % 2 === 0
// const odd = x = !even(x)
// const array = [1, 2, 3, 4, 5]

// filter(array, even) // [2,4]
// filter(array, odd) // [1,3,5]

// Reject
// The opposite of filter, returns an array that does not pass the filter function.

// const even = x => x % 2 === 0
// const array = [1, 2, 3, 4, 5]

// reject(array, even) // [1,3,5]

// Partition
// Splits an array into two arrays. One whose items pass a filter function and one whose items fail.

// const even = x => x % 2 === 0
// const array = [0, 1, 2, 3, 4, 5]

// partition(array, even) // [[0,2,4], [1,3,5]]

// Reduce
// From MDN: “…applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.”

// const sum = (memo, x) => memo + x
// reduce([1, 2, 3], sum, 0) // 6

// const flatten = (memo, x) => memo.concat(x)
// reduce([4, 5, 6], flatten, [1, 2, 3]) // [1,2,3,4,5,6]

// ReduceRight
// Similar to reduce, but applies the function from right-to-left.

// const flatten = (memo, x) => memo.concat(x)

// reduceRight([[0, 1], [2, 3], [4, 5]], flatten, []) // [4, 5, 2, 3, 0, 1]

// Partial
// Partially apply a function by filling in any number of its arguments.

// const add = (x, y) => x + y
// const add5to = partial(add, 5)

// add5to(10) // 15

// SpreadArg
// Convert function that takes an array to one that takes multiple arguments. This is useful when partially applying.

// const add = ([x, ...xs]) => def(x) ? parseInt(x + add(xs)) : []
// add([1, 2, 3, 4, 5]) // 15

// const spreadAdd = spreadArg(add)
// spreadAdd(1, 2, 3, 4, 5) // 15

// ReverseArgs
// Reverse function argument order.

// const divide = (x, y) => x / y
// divide(100, 10) // 10

// const reverseDivide = reverseArgs(divide)
// reverseDivide(100, 10) // 0.1

// Pluck
// Extract property value from array. Useful when combined with the map function.

// const product = { price: 15 }
// pluck('price', product) // 15

// const getPrices = partial(pluck, 'price')
// const products = [
// { price: 10 },
// { price: 5 },
// { price: 1 }
// ]
// map(products, getPrices) // [10,5,1]

// Flow
// Each function consumes the return value of the function that came before.

// const getPrice = partial(pluck, 'price')
// const discount = x => x * 0.9
// const tax = x => x + (x * 0.075)
// const getFinalPrice = flow(getPrice, discount, tax)

// looks like: tax(discount(getPrice(x)))
// -> get price
// -> apply discount
// -> apply taxes to discounted price

// const products = [
// { price: 10 },
// { price: 5 },
// { price: 1 }
// ]

// map(products, getFinalPrice) // [9.675, 4.8375, 0.9675]

// Compose
// The same as flow, but arguments are applied in the reverse order. Compose matches up more naturally with how functions are written. Using the same data as defined for the flow function:

// const getFinalPrice = compose(tax, discount, getPrice)

// looks like: tax(discount(getPrice(x)))

// map(products, getFinalPrice) // [9.675, 4.8375, 0.9675]

// Min
// Return the smallest number in an array. Returns Infinity if array supplied is empty.

// const array = [0, 1, 2, 3, 4, 5]

// min(array) // 0

// Max
// Return the largest number in an array. Returns -Infinity if array supplied is empty.

// const array = [0, 1, 2, 3, 4, 5]

// max(array) // 5

// Factorial
// Returns the factorial of a number. Uses an accumulator to allow replacing of stack frames to allow larger factorials to be returned.

// factorial(5) // 120

// Fibonacci
// Returns the Fibonacci number at the given place.

// fib(15) // 610

// Quicksort
// Sort an array from smallest to largest. This is done by re-ordering the array so that it contains two sub-arrays, one with smaller values, the other with larger values. The above steps are recursively applied to each sub-array until there are no arrays left, which is flatten to return a sorted array.

// const array = [8, 2, 6, 4, 1]

// quicksort(array) // [1,2,4,6,8]

// Everything as a Reduction
// Many of the functions above can be converted into reductions, which should increase performance in most, if not all cases. This also shows the flexibility of the reduce function.

// Answers here: https://medium.com/dailyjs/functional-js-with-es6-recursive-patterns-b7d0813ef9e3
