///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

//added empty array so I could add data to it from the for loop.
const totalAcres = [];

// I created a for loop that would be the same length as fujiAchres and also add all of the values from each of the array values from each orchard.
for (let i = 0; i < fujiAcres.length; i++) {
  totalAcres.push(fujiAcres[i] + galaAcres[i] + pinkAcres[i]);
}

// I then logged 'totalAcres' to the console.
console.log(totalAcres);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// I created a variable of the sum of all the acres picked throughout the week
const totalAcresPicked = totalAcres.reduce((acc, acres) => acc + acres, 0);

// I then created a variable that found the average acres picked per day by taking the sum and then dividing it by 7.
const averageDailyAcres = totalAcresPicked / 7;

// I then logged 'totalDailyAcres' to the console.
console.log(averageDailyAcres);

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

//create a while loop to find out when the acres left is less than 1
while (acresLeft > 0) {
  // Increment the days by 1
  days++;
  // Subtract the daily average from acresLeft
  acresLeft -= averageDailyAcres;
}
// Log the number of days required to pick all apples
console.log(days);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// Create copies of the original arrays
const fujiTons = fujiAcres.slice();
const galaTons = galaAcres.slice();
const pinkTons = pinkAcres.slice();

// Calculate the daily tons picked for each variety
for (let i = 0; i < fujiTons.length; i++) {
  fujiTons[i] *= 6.5;
  galaTons[i] *= 6.5;
  pinkTons[i] *= 6.5;
}

// Log the arrays to the console
console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons);

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// find the total pounds picked per variety
const fujiPounds = fujiTons.reduce(
  (total, dailyTons) => total + dailyTons * 2000,
  0
);
const galaPounds = galaTons.reduce(
  (total, dailyTons) => total + dailyTons * 2000,
  0
);
const pinkPounds = pinkTons.reduce(
  (total, dailyTons) => total + dailyTons * 2000,
  0
);

// Log the total pounds picked per variety to the console
console.log(fujiPounds);
console.log(galaPounds);
console.log(pinkPounds);

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// Calculate profits per variety (pounds * price)
const fujiProfit = fujiPounds * fujiPrice;
const galaProfit = galaPounds * galaPrice;
const pinkProfit = pinkPounds * pinkPrice;

// Log profits for each variety to the console
console.log(fujiProfit);
console.log(galaProfit);
console.log(pinkProfit);

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// Calculate total profit (sum of profits for all varieties)
const totalProfit = fujiProfit + galaProfit + pinkProfit;

// Log the total profit to the console
console.log(totalProfit);
