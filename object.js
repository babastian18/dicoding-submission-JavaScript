const restaurant = {
  name: "PHD",
  city: "Tangerang Selatan",
  "favorite drink": "Es Kopi Susu",
  "favorite food": "Pizza",
  isVegan: false,
}
let name = restaurant.name

let favoriteDrink = restaurant["favorite drink"]

console.log (`${name} Memiliki Menu Favorit ${favoriteDrink}`)
