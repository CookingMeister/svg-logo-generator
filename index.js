import inquirer from "inquirer";
import validator from "validator";
import fs from "fs";
import { Shape, Circle, Triangle, Square } from "./lib/shapes.js";

// Prompt user for input
async function promptUser() {
  const text = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "What are your three characters for the text?",
    },
  ]);

  const textColor = await inquirer.prompt([
    {
      type: "input",
      name: "textColor",
      message: "What is the color of the text?",
    },
  ]);

  const shape = await inquirer.prompt([
    {
      type: "list",
      name: "shape",
      message: "What shape would you like to generate?",
      choices: ["Circle", "Triangle", "Square"],
    },
  ]);

  const fillColor = await inquirer.prompt([
    {
      type: "input",
      name: "fillColor",
      message: "What is the fill color of the shape?",
    },
  ]);
}

// Generate SVG
const answers = await promptUser();
const logo = generateLogo(
  answers.text,
  answers.textColor,
  answers.shape,
  answers.fillColor
);
function generateLogo() {
  switch (answers.shape) {
    case "Circle":
      svg = new Circle(
        answers.fillColor,
        answers.textColor,
        answers.text
      ).render();
      break;
    case "Triangle":
      svg = new Triangle(
        answers.fillColor,
        answers.textColor,
        answers.text
      ).render();
      break;
    case "Square":
      svg = new Square(
        answers.fillColor,
        answers.textColor,
        answers.text
      ).render();
      break;
  }
}

// Save SVG to file
fs.writeFileSync(logo, svg);
console.log(`Generated ${logo}`);
