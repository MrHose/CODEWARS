//INSTRUCTIONS-----------------------------------------------------------------------------------------------------------------------------------------------------
/*Please write a function that will take a string as input and return a hash. The string will be formatted as such.
The key will always be a symbol and the value will always be an integer.*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//SOLUTION---------------------------------------------------------------------------------------------------------------------------------------------------------
function strToHash(str) {
  const arr = str.split(", ");
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    const key = value.split("=");
    if (value) {
      result[key[0]] = parseInt(key[1]);
    }
  }
  return result;
}
//EXAMPLES---------------------------------------------------------------------------------------------------------------------------------------------------------

/*"a=1, b=2, c=3, d=4"
This string should return a hash that looks like
{ 'a': 1, 'b': 2, 'c': 3, 'd': 4}*/
