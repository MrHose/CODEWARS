//INSTRUCTIONS-----------------------------------------------------------------------------------------------------------------------------------------------------
/*Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//SOLUTION---------------------------------------------------------------------------------------------------------------------------------------------------------
function findMissingLetter(array) {
  let x = "";

  for (let i = 0; i < array.length; i++) {
    x = array[i].charCodeAt(0);
    if (array[i + 1].charCodeAt(0) - x > 1) {
      return String.fromCharCode(x + 1);
    }
  }
}
//EXAMPLES---------------------------------------------------------------------------------------------------------------------------------------------------------

/*
["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"*/
