const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "5.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `imgs/${chosenImage}`;

document.body.appendChild(bgImage);
