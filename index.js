const inquirer = require("inquirer");
const validator = require("validator");
const fs = require("fs");
const { Shape, Circle, Triangle, Square } = require("./lib/shapes.js");


// Prompt user for input
async function promptUser() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "What are your three characters for the text?",
        validate: (input) => {
          if (!validator.isLength(input, { min: 3, max: 3 })) {
            return "Text must be exactly 3 characters";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "textColor",
        message: "What is the color of the text?",
        validate: (input) => {
          if (validator.isEmpty(input)) {
            return "Text color cannot be empty";
          }
          const color = input.toLowerCase();
          const validColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white', 'gray'];
          if(!validColors.includes(color) && !validator.isHexColor(input)) {
            // Value is a valid color name or hex color
            return "Text color must be a valid hex color or color name";
          }
          return true;
        },
      },
      {
        type: "list",
        name: "shape",
        message: "What shape would you like to generate?",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "color",
        message: "What is the fill color of the shape?",
        validate: (input) => {
          if (validator.isEmpty(input)) {
            return "Shape color cannot be empty";
          }
          const color = input.toLowerCase();
          const validColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white', 'gray'];
          if(!validColors.includes(color) && !validator.isHexColor(input)) {
            // Value is a valid color name or hex color
            return "Color must be a valid hex color or color name";
          }
          return true;
        },
      },
    ]);
    return answers;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// Generate SVG
const init = async () => {
  try {
    let answers = await promptUser();
    const { text, textColor, shape, color } = answers;
    const svg = generateLogo(text, textColor, shape, color);

    // Save SVG to file
    fs.writeFileSync("./examples/logo.svg", svg);
    console.log(`Generated svg logo saved to logo.svg`);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

function generateLogo(text, textColor, shape, color) {
  let svg;
  switch (shape) {
    case "Circle":
      svg = new Circle(color, textColor, text).renderSvg();
      break;
    case "Triangle":
      svg = new Triangle(color, textColor, text).renderSvg();
      break;
    case "Square":
      svg = new Square(color, textColor, text).renderSvg();
      break;
    default:
      return "Invalid shape";
  }
  console.log(svg);
  return svg;
}

// Call init() to start prompts
init();
