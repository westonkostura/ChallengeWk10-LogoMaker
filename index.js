const inquirer = require('inquirer')
const fs = require('fs');



const questions = [
    {
        type: "input",
        message: "Enter text (up to 3 characters):",
        name: logoText
    },
    {
        type: "input",
        message: "Enter color text(keywords only): ",
        name: logoColor
    },
    {
        type: "list",
        message: "Choose a shape for the background:",
        name: logoShape
    },
    {
        type: "input",
        message: "Enter text (up to 3 characters):",
        name: logoText
    },

]