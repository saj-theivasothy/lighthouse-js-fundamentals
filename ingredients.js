const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
	console.log(ingredients[i]);
	i++;
}

console.log("\n");
// Write a for loop that prints out the contents of ingredients:
for (let j = 0; j < ingredients.length; j++) {
	console.log(ingredients[j]);
}

console.log("\n");
// Write any loop (while or for) that prints out the contents of ingredients backwards:
let reverseIngredients = ingredients.slice(0).reverse();

for (let k = 0; k < ingredients.length; k++) {
	console.log(reverseIngredients[k]);
}