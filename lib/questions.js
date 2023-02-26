const questions = [
    {
      type: "list",
      name: "role",
      message: "What is employee's role within the team?",
      choices: ["Manager", "Engineer", "Intern"]
    },
    {
      type: "input",
      name: "name",
      message: "What is their name?",
      validate: name => {
        let accept = name.match(/^[a-zA-Z] + [a-zA-Z]+$/g);
        if (accept) {
            return true;
        }
        return "Please enter a valid full name";
        },
    },
    {
      type: "input",
      name: "id",
      message: "What is their Employee ID number?",
      validate: id => {
        let accept = id.match(/^[0-9a-zA-Z]+$/g);
        if (accept) {
            return true;
        }
        return "Please enter a valid ID.";
        },
    },
    {
      type: "input",
      name: "email",
      message: "What is their email address?",
      validate: email => {
        let accept = email.match(/\S + @\S + \.\S + /g);
        if (accept) {
            return true;
        }

        return "Please enter a valid email.";
        },
    },
    // Manager's question
    {
      type: "input",
      name: "number",
      message: "What is Manager's office number?",
      when: answers => {
        return answers.role === "Manager";
        },
      validate: officeNumber => {
        let accept = officeNumber.match(/^[0-9] + $/g);
        if (accept) {
            return true;
        }
        return "Please enter a valid Office Number.";
        },
    },
    // Engineer's question
    {
      type: "input",
      name: "github",
      message: "What is Engineer's github username?",
      when: answers => {
        return answers.role === "Engineer";
        },
        validate: github => {
            let accept = github.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i);
            if (accept) {
                return true;
            }
            return "Please enter a valid github username";
        },
    },
    // Intern's question
    {
      type: "input",
      name: "school",
      message: "What is Intern's school name?",
      when: answers => {
        return answers.role === "Intern";
        },
      validate: school => {
        let accept = school.match(/^[0-9a-zA-Z]+$/g);
        if (accept) {
            return true;
        }
        return "Please enter a valid school name";
        }
    },
    // Question if another team member needs to be added
    {
      type: "confirm",
      name: "addTeamMember",
      message: "Add another team member?",
      default: true
    }
];

module.exports = questions;