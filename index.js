import inquirer from "inquirer";
import validator from "validator";
import fs from "fs";
import { Shape, Circle, Triangle, Square } from "./lib/shapes.js";

// Prompt user for input
async function promptUser() {
  try {
    const text = await inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "What are your three characters for the text?",
        validate: (input) => {
          if (validator.isEmpty(input)) {
            return "Text cannot be empty";
          }
          return true;
        },
      },
    ]);
    const textColor = await inquirer.prompt([
      {
        type: "input",
        name: "textColor",
        message: "What is the color of the text?",
        validate: (input) => {
          if (validator.isEmpty(input)) {
            return "Text color cannot be empty";
          }
          return true;
        },
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
        validate: (input) => {
          if (validator.isEmpty(input)) {
            return "Shape color cannot be empty";
          }
          return true;
        },
      },
    ]);
    return text, textColor, shape, fillColor;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// Generate SVG
const init = async () => {
  try {
    const { text, textColor, shape, fillColor } = await promptUser();
    const svg = generateLogo(text, textColor, shape, fillColor);

    // Save SVG to file
    fs.writeFileSync("logo.svg", svg);
    console.log(`Generated ${svg}`);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

function generateLogo(text, textColor, shape, fillColor) {
  let svg;
  switch (shape) {
    case "Circle":
      svg = new Circle(fillColor, textColor, text).render();
      break;
    case "Triangle":
      svg = new Triangle(fillColor, textColor, text).render();
      break;
    case "Square":
      svg = new Square(fillColor, textColor, text).render();
      break;
    default:
      return "Invalid shape";      
  }
  console.log(svg);
  return svg;
}

// Call init() to start prompts
init();
