// // Solve problems by JavaScript::

// // Question 1: Get 1 to 255​ - Write a function that returns an array with all the numbers from 1 to 255.

// function all_num() {
//     arr = [];
//     for (var num=1; num<=255; num++) {
//         arr.push(num);
//     }
//     return arr;
// }

// console.log(all_num());



// //  Question 2: Get even 1000​ - Write a function that would get the sum of all the even numbers from 1 to
// // 1000. You may use a modulus operator for this exercise.
// function even_sum() {
//     sum=0;
//     for (var i = 1; i <=1000; i++){
//         if(i%2==0){
//             sum += i;

//         }
//     }
//     return sum;
// }

// console.log(even_sum());

// Answer:  250500


// // Question:3  Sum odd 5000​ - Write a function that returns the sum of all the odd numbers from 1 to 5000.
// // (e.g. 1+3+5+...+4997+4999).

// function odd_sum() {
//     sum = 0;
//     for (var i = 1; i <= 5000; i++) {
//         if (i % 2 == 1) {
//             sum += i;

//         }

//     }
//     return sum;
// }

// console.log(odd_sum());

// // Answer: 6250000


// // Question 4: Iterate an array​ - Write a function that returns the sum of all the values within an array. (e.g.
// //  [1,2,5] returns 8. [-5,2,5,12] returns 14).

// function call_value(arr) {
//     sum = 0;
//     for (let value of arr) {
//         sum += value;
//     }
//     return sum
// }

// arr = [1, 2, 5]
// arr1 = [-5, 2, 5, 12]
// console.log(call_value(arr1));

// // Answer : 14

// // Question 5: Find max​ - Given an array with multiple values, write a function that returns the maximum
// // number in the array. (e.g. for [-3,3,5,7] max is 7)

// function max_value(arr) {

//     max_value = Math.max.apply(Math, arr);
//     return max_value;

// }




// const arr = [-3, 3, 5, 7]
// console.log(max_value(arr));


// // Question:6 Find average​ - Given an array with multiple values, write a function that returns the average
// // of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

// function average(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     let average = sum / arr.length;
//     return average;

// }

// arr = [1, 3, 5, 7, 20];
// console.log(average(arr));


// // Question 7 : Array odd​ - Write a function that would return an array of all the odd numbers between 1 to
// // 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

// function push_odd_numbers() {
//     arr = [];
//     for (var i = 0; i < 50; i++) {
//         if (i % 2 == 1) {
//             arr.push(i)
//         }
//     }
//     return arr;
// }

// console.log(push_odd_numbers());


// // Question 8: Greater than Y​ - Given value of Y, write a function that takes an array and returns the
// // number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your
// // function will return 2. (There are two values in the array greater than 3, which are 5, 7).

// function greater_than_y(arr, y) {
//     var counter = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > y) {
//             counter++;
//         }
//     }
//     return counter;

// }

// arr = [1, 3, 5, 7];
// y = 3;
// console.log(greater_than_y(arr, y));


// // Question 9 : Squares​ - Given an array with multiple values, write a function that replaces each value in
// // the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

// function square(arr) {
//     new_arr = [];
//     for (var i = 0; i < arr.length; i++) {
//         new_arr.push(arr[i] ** 2);
//     }
//     return new_arr;

// }

// arr = [1, 5, 10, -2];
// console.log(square(arr));


// // Question 10:Negatives​ - Given an array with multiple values, write a function that replaces any negative
// // numbers within the array with the value of 0. When the program is done the array should
// // contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

// function negatives(arr) {
//     new_arr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             new_arr.push(arr[i] = 0);
//         } else
//             new_arr.push(arr[i]);

//     }
//     return new_arr;

// }

// arr = [1, 5, 10, -2];
// console.log(negatives(arr));

// // Question 11 : Max/Min/Avg​ - Given an array with multiple values, write a function that returns a new array
// // that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

// function find_all() {

//     new_arr = [];
//     max_value = Math.max.apply(Math, arr);
//     new_arr.push(max_value);
//     min_value = Math.min.apply(Math, arr);

//     new_arr.push(min_value);
//     sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];

//     }

//     var average = sum / arr.length;
//     new_arr.push(average);

//     return new_arr;

// }

// arr = [1, 5, 10, -2]
// console.log(find_all(arr));


// // Question 12: Swap Values​ - Write a function that will swap the first and last values of any given array.The
// // default minimum length of the array is 2.(e.g.[1, 5, 10, -2] will become[-2, 5, 10, 1]).

// function swap_first_to_last(arr) {
//     if ((arr.length) < 2) {
//         console.log("Invalid array length");
//     } else {
//         [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
//     }
//     return arr;
// }

// arr = [1, 5, 10, -2]
// console.log(swap_first_to_last(arr));

// // Question 13:  Number to String​ - Write a function that takes an array of numbers and replaces any
// // negative values within the array with the string 'Jessup'. For example if array = [-1,-3,2], your function will return ['Jessup','Jessup',2].

// function number_to_string(array) {
//     new_arr = [];
//     for (var value of array) {
//         if (value < 0) {
//             value = "Jessup";
//             new_arr.push(value);
//         } else
//             new_arr.push(value);
//     }
//     return new_arr;
// }

// array = [-1, -3, 2]
// console.log(number_to_string(array));