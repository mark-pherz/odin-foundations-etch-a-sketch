let size = prompt("Select the size of the grid from 4 to 100", 40);
if (size > 100) {
  size = 100;
}
const container = document.getElementById("container");

let boxSize = 960 / size;
let sized = boxSize.toString() + "px";

for (let i = 0; i < size * size; i++) {
  const newBox = document.createElement("div");
  newBox.classList.add("box");
  newBox.style.height = sized;
  newBox.style.width = sized;
  newBox.addEventListener("mouseover", () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    newBox.style.backgroundColor = randomColor;
  });
  newBox.addEventListener("mousedown", () => {
    newBox.style.backgroundColor = "black";
  });

  container.appendChild(newBox);
}
