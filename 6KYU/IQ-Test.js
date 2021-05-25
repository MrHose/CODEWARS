//INSTRUCTIONS-----------------------------------------------------------------------------------------------------------------------------------------------------
/*Bob is preparing to pass IQ test.
The most frequent task in this test is to find out which one of the given numbers differs from the others.
Bob observed that one number usually differs from the others in evenness.
Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//SOLUTION---------------------------------------------------------------------------------------------------------------------------------------------------------
function iqTest(numbers){
  const arr = numbers.split(' ');
  if(arr[0]%2 === arr[1]%2){
    let pos = 3;
    for(i = 2; i < arr.length; i++) {
    if(arr[i] % 2 != arr[0] % 2 ) {return pos}
      pos += 1;
  }
  } else {
    if(arr[0] % 2 === arr[2] % 2) {return 2}
  }
  return 1
}
//EXAMPLES---------------------------------------------------------------------------------------------------------------------------------------------------------

/*iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd*/
