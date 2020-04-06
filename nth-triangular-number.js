// 4. nth Triangular Number
// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

//                           *
//             *           *    *
// *     |   *   *  |   *    *    *  |

//  1st       2nd           3rd             nth? 

function nthTriNum(n) { // nth Triangular Number
  const displayArray = [];
  for (let i = 0; i < n; i++) {
    displayArray.push('*');
  };
  console.log(displayArray);

  if (n === 1) {return n};

  // A triangular number is simply the result of adding what was added in the previous step, plus one.

  // In this case, n represents the number of steps executed. We can extrapolate backward to find the triangular number at that step.

  return nthTriNum(n - 1) + n;
}
nthTriNum(3);
