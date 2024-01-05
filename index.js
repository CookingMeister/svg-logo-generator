import inquirer from 'inquirer';
import validator from 'validator';
import fs from 'fs';
import { generateCircleSVG, generateTriangleSVG, generateSquareSVG } from './lib/shapes.js';

// Prompt user for input
  const text = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'What are your three characters for the text?'
    }
  ]);

  const textColor = await inquirer.prompt([
    {
      type: 'input',
      name: 'textColor',
      message: 'What is the color of the text?'
    }
  ]);

  const shape = await inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like to generate?',
      choices: ['Circle', 'Triangle', 'Square']
    }
  ]);
  
  const fillColor = await inquirer.prompt([
    {
      type: 'input',
      name: 'fillColor',
      message: 'What is the fill color of the shape?'
    }
  ]);

  // Save SVG to file
const logo = `${shape.shape}.svg`;
fs.writeFileSync(logo, svg);
console.log(`Generated ${logo}`);