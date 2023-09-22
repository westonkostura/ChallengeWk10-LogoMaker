const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");
const render = require("./lib/createSVG");
const renderSVG = require("./lib/createSVG");

//questions for inquirer
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

//fuynction to save file to folder
function writeToFile(fileName, data) {
  fs.appendFile(`./Logos/${fileName}.svg`, data, (err) =>
    err ? console.log(err) : console.log("Logo is now created and is saved in the 'Logos' folder!")
  );
}

//init function to initialize project
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
    var createSVG = renderSVG(answer);
    writeToFile(answer.logoText, createSVG);
  });
}

init();
