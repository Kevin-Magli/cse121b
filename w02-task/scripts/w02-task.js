/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Kevin Martire Magliocchi";

let currentYear = new Date().getFullYear();

let profilePicture = "images/me.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;
yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFood = [" Chocolate Cake", " Cheeseburgers", " Pizza", " Lasagna", " Pasta", " Ice Cream", " Açai", " Nutella"];
foodElement.textContent = favoriteFood;

let anotherFavoriteFood = " Bacon";
favoriteFood.push(anotherFavoriteFood);
foodElement.innerHTML += `<br><br>${favoriteFood}`;

favoriteFood.shift();
foodElement.innerHTML += `<br><br>${favoriteFood}`;

favoriteFood.pop();
foodElement.innerHTML += `<br><br>${favoriteFood}`