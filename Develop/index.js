// TODO: Include packages needed for this application

const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'Title',
        message:'What is your title? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            }
            else {
                console.log("Please enter a title.")
                return false;
            };
        }
    },
    {
        type:'input',
        name:'Purpose',
        message:'What is the purpose of your project? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            }
            else {
                console.log("Please give a descirption.")
                return false;
            };
        }
    },
    {
        type:'input',
        name:'Built with',
        message:'What was it built with?'
    },
    {
        type:'input',
        name:'Installation',
        message:'How do you Install it?'
    },
    {
        type:'input',
        name:'Usage',
        message:'How do you use it?'
    },
    {
        type:'checkbox',
        name:'Licenses',
        message:'What License has been applied?',
        choices:['MIT','GNU GPLv3','GNU LGPLv3', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        type:'input',
        name:'Contributors',
        message:'Name of Contributors'
    },
    {
        type:'input',
        name:'Weblink',
        message:'What is the link to your website?'
    },
    {
        type:'input',
        name:'Github name',
        message:'Github name to redirect to your Github profile'
    },
    {
        type:'input',
        name:'Email',
        message:'What is your email?'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
