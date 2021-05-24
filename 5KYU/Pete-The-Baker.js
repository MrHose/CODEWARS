//INSTRUCTIONS-----------------------------------------------------------------------------------------------------------------------------------------------------
/*Pete likes to bake some cakes. He has some recipes and ingredients.
Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients
(also an object) and returns the maximum number of cakes Pete can bake (integer).
For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
Ingredients that are not present in the objects, can be considered as 0.*/
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//SOLUTION---------------------------------------------------------------------------------------------------------------------------------------------------------
function cakes(recipe, available) {
  //recorrer las keys de recipe buscandolas en available
  //si no están devuelve 0
  //si están almacena en result el parseint de la division available/recipe
  //vamos actualizando result solo cuando encuentra resultado menor
  //pintamos result
  let result = 1000;
  for (const [key, value] of Object.entries(recipe)) {
    result = !(key in available)
      ? 0
      : available[key] / recipe[key] < result
      ? parseInt(available[key] / recipe[key])
      : result;
  }
  return result;
}
//EXAMPLES---------------------------------------------------------------------------------------------------------------------------------------------------------

/*// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); */
