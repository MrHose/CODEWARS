//INSTRUCTIONS-----------------------------------------------------------------------------------------------------------------------------------------------------
/*Move the first letter of each word to the end of it, then add "ay" to the end of the word.
Leave punctuation marks untouched.*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//SOLUTION---------------------------------------------------------------------------------------------------------------------------------------------------------
function pigIt(str) {
  const arr = str.split(" ");
  let result = "";
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length === 1 && i === arr.length - 1) {
      return result + arr[i];
    }
    result += arr[i].slice(1) + arr[i].charAt(0) + "ay ";
  }
  return result.slice(0, -1);
}
//EXAMPLES---------------------------------------------------------------------------------------------------------------------------------------------------------

/*pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !*/
