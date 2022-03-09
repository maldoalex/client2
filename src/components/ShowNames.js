// Remove the duplicates in 2 Javascript objects (found in readme), add the results to an array and output the list of distinct names in an unordered list below this paragraph when this link is clicked. If the operation has been completed already, notify the user that this has already been done.

const obj1 = {
  names: [
    "Matt Johnson",
    "Matt Johnson",
    "Bart Paden",
    "Ryan Doss",
    "Jared Malcolm",
  ],
};
const obj2 = {
  names: [
    "Matt Johnson",
    "Bart Paden",
    "Bart Paden",
    "Jordan Heigle",
    "Jordan Heigle",
    "Tyler Viles",
  ],
};

//Create empty array
let distinctNames = [];

//Iterate over objects to pass in non-duplicate names into distinctNames array
obj1.names.forEach((name) => {
  if (!distinctNames.includes(name)) {
    distinctNames.push(name);
  }
});

obj2.names.forEach((name) => {
  if (!distinctNames.includes(name)) {
    distinctNames.push(name);
  }
});

//Get elements from DOM and store in variables
const nameList = document.querySelector(".name-list");
const listLink = document.getElementById("listLink");

//Function that maps over array and creates ul
const showNames = () => {
  const ul = distinctNames
    .map((name) => {
      return `<ul><li>${name}</li></ul>`;
    })
    .join("");
  nameList.innerHTML = ul;
};

//Event cb function the renders element or alert based on if/else case
listLink.addEventListener("click", () => {
  if (nameList.innerHTML === "") {
    showNames();
  } else {
    alert("The distinct list has already been displayed.");
  }
});
