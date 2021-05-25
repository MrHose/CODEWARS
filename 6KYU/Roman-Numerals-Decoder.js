//INSTRUCTIONS-----------------------------------------------------------------------------------------------------------------------------------------------------
/*Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer.
You don't need to validate the form of the Roman numeral.
Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately,
starting with the leftmost digit and skipping any 0s.
So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII).
The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//SOLUTION---------------------------------------------------------------------------------------------------------------------------------------------------------
function solution(roman){
const values = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  let result =0;
const arr = roman.split('');
  for(let i=0; i<arr.length; i++){
    result += values[arr[i]];
  }
  return result = arr[arr.length - 2] === 'I' && arr[arr.length - 1] != 'I' ? result - 2 : result
}
//EXAMPLES---------------------------------------------------------------------------------------------------------------------------------------------------------

/*solution('XXI'); // should return 21*/
