// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  // throw new Error('Remove this line and implement the function');
  var sum =0;
  for (let index = 0; index < birdsPerDay.length; index++) {
    sum+= birdsPerDay[index]
  }
  return sum;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  // throw new Error('Remove this line and implement the function');
const start = (week - 1) * 7;
  const end = start + 7;
  var sum = 0;
  for (let index = start; index < end ; index++) {
    sum += birdsPerDay[index]
  }
  return sum;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  // throw new Error('Remove this line and implement the function');
  for (let index = 0; index < birdsPerDay.length; index+=2) {
        birdsPerDay[index] += 1    
  }
}
