//INSTRUCTIONS-----------------------------------------------------------------------------------------------------------------------------------------------------
/*Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//SOLUTION---------------------------------------------------------------------------------------------------------------------------------------------------------
function dirReduc(arr){
  
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === 'NORTH' && arr[i+1] === 'SOUTH') {arr.splice(i, 2);i-=2}
    if(arr[i] === 'SOUTH' && arr[i+1] === 'NORTH') {arr.splice(i, 2);i-=2}
    if(arr[i] === 'EAST' && arr[i+1] === 'WEST') {arr.splice(i, 2);i-=2}
    if(arr[i] === 'WEST' && arr[i+1] === 'EAST') {arr.splice(i, 2);i-=2}
  }
  
  return arr
}
//EXAMPLES---------------------------------------------------------------------------------------------------------------------------------------------------------

/*describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
Test.assertSimilar(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])

  });
});*/