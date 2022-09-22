import inquirer from 'inquirer'
console.log('Welcome To Project Installer')
inquirer.prompt([
    {
        type: 'checkbox',
        message: 'What would you like to do?',
        name: 'Operation',
        choices: [
            {
                name: 'Install Template From Existing Template'
            },
            {
                name: 'Create Your Own Template'
            }
        ]
    }
])