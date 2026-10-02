// console.log("This is connected! Hey CCL!");

// const userComment = "<img src='x' onerror='alert(\"You have been hacked\")'>";

// document.querySelector(".intro").innerHTML = userComment;

// const newListItem = "<li class='item'>Watermelons</li>";

// document.querySelector("#list").innerHTML += newListItem;
// console.log(document.querySelectorAll(".item"));

// const listOne = document.querySelector("li");
// console.log(listOne);


// //Change h1 text//
// document.getElementById("title").innerHTML = "My First DOM Project";
// //Replace intro paragraph//
// document.querySelector(".intro").innerHTML = "This is my new paragraph!";
// //use innerHTML to add a list item//
// document.querySelector("#list").innerHTML += "<li>Oranges</li><li>Mangos</li>";



// const dragonfruit = document.createElement("li");
// dragonfruit.textContent = "Dragonfruit";
// dragonfruit.classList.add("item");
// list.append(dragonfruit);

// const avocado = document.createElement("li");
// avocado.textContent = "Avocado";
// avocado.classList.add("item");
// list.prepend(avocado);




const container = document.querySelector("#container");

const card = document.createElement("div");
card.classList.add("card");

const me = document.createElement("h3");
me.textContent = "Chloe DeJ";

const food = document.createElement("p");
food.textContent = "My favorite food is pasta.";

const image = document.createElement("img");
image.setAttribute("src", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXanba0N7nU2d-cbLYbkP6wvBK2JBXNVJ82fWlDZQwbA&s=10");

card.append(me, food, image);

container.append(card);







const counter = document.createElement("div");
counter.id = "counter";
document.body.appendChild(counter);


const clickButton = document.createElement("button");
const doubleClickButton = document.createElement("button");
const mouseoverButton = document.createElement("button");

clickButton.textContent = "click";
doubleClickButton.textContent = "double click: ";
mouseoverButton.textContent = "mouseover: ";


counter.append(clickButton, doubleClickButton, mouseoverButton);


clickButton.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});

let count = 0;
const countDisplay = document.createElement("p");
counter.append(countDisplay);

doubleClickButton.addEventListener("dblclick", function () {
    count+=2;
    countDisplay.textContent = count;
});

mouseoverButton.addEventListener("mouseover", function () {
    count++;
    countDisplay.textContent = count;
});







