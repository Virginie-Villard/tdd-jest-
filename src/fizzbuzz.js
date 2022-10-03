export function fizzBuzz(n) {
  let result = n;
  
  if (n % 3 === 0) {
    result = "fizz";
    if (n % 5 === 0) {
      result += "buzz";
    }
  } else if (n % 5 === 0) {
    result = "buzz";
  }
  return result;
}
