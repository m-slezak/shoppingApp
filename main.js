import shoppingList from './shoppingList.js'

const food = shoppingList.filter(item => item.category === 'food');

const foodPrice = food.reduce((acc, item)=> acc + item.price, 0)

console.log(foodPrice);

const mostExpensive = shoppingList.find(item => item.price > 500);
console.log(mostExpensive)

