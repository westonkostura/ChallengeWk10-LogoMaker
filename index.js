const inquirer = require("inquirer");
const fs = require("fs");
const savefile = require('./lib/shapes')

const questions = [
  {
    type: "input",
    message: "Enter text (up to 3 characters):",
    name: "logoText",
  },
  {
    type: "input",
    message: "Enter color text(keywords only): ",
    name: "logoColor",
  },
  {
    type: "list",
    message: "Choose a shape for the background:",
    choices: ["Triangle", "Circle", "Square"],
    name: "logoShape",
  },
  {
    type: "input",
    message: "Enter shape color(keywords):",
    name: "logoShapeColor",
  },
];

function writeToFile(fileName, data) {
    fs.appendFile(`./Logos/${fileName}.svg`, data, (err) =>
      err ? console.log(err) : console.log("Logo is now created!")
    );
  }

function init() {
  console.log("**************************************************************");
  console.log("*   _                         __  __       _                 *");
  console.log(
    "*  | |                       |  \\/  |     | |                *"
  );
  console.log(
    "*  | |     ___   __ _  ___   | \\  / | __ _| | _____ _ __     *"
  );
  console.log(
    "*  | |    / _ \\ / _` |/ _ \\  | |\\/| |/ _` | |/ / _ \\ '__|    *"
  );
  console.log("*  | |___| (_) | (_| | (_) | | |  | | (_| |   <  __/ |       *");
  console.log(
    "*  |______\\___/ \\__, |\\___/  |_|  |_|\\__,_|_|\\_\\___|_|       *"
  );
  console.log("*                __/ |                                       *");
  console.log("*               |___/                                        *");
  console.log("*                 Enter criterias below:                     *");
  console.log("**************************************************************");

  inquirer.prompt(questions).then(function (answer) {
    console.log(answer);
    var createSVG = document.create
    writeToFile(answer.logoText, answer)
    
  });
}

init();
