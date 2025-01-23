// Declare and initialize variables
let characterName = "Super-Man";
let age = Math.floor(Math.random() * 100) + 1; 
let isSuperhero = true;
let specialPowers = ["flying", "invinsible", "super strength"];
let favoriteFood = "Burger";

// Function to generate a random character description
function generateCharacterDescription() {
    return `Meet ${characterName},${age}year old ${
        isSuperhero ? "superhero" : "ordinary person"
    } who loves ${favoriteFood} and has powers like ${specialPowers.join(", ")}!`;
}

// Function to update the displayed description
function updateDescription() {
    const descriptionElement = document.getElementById("characterDescription");
    descriptionElement.textContent = generateCharacterDescription();
}

// Event listeners
document.getElementById("generateButton").addEventListener("click", () => {
    characterName = "Super " + ["Pancakes", "Waffles", "Man"][Math.floor(Math.random() * 3)];
    age = Math.floor(Math.random() * 100) + 1;
    isSuperhero = Math.random() > 0.5;
    favoriteFood = ["pizza", "tacos", "Burger"][Math.floor(Math.random() * 3)];
    specialPowers = ["time travel", "super speed", "mind reading"];
    updateDescription();
});

document.getElementById("increaseAgeButton").addEventListener("click", () => {
    age++;
    updateDescription();
});

document.getElementById("decreaseAgeButton").addEventListener("click", () => {
    if (age > 0) age--;
    updateDescription();
});

document.getElementById("updateNameButton").addEventListener("click", () => {
    const nameInput = document.getElementById("characterNameInput").value;
    if (nameInput.trim()) characterName = nameInput;
    updateDescription();
});

document.getElementById("updateAgeButton").addEventListener("click", () => {
    const ageInput = parseInt(document.getElementById("characterAgeInput").value);
    if (!isNaN(ageInput) && ageInput >= 0) age = ageInput;
    updateDescription();
});

