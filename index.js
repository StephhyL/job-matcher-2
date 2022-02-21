const { readFile, jobMatch } = require("./helperFunction");
const args = process.argv.slice(2);

const userFile = args[0];
const jobFile = args[1];

Promise.all([readFile(userFile), readFile(jobFile)])
  .then((data) => {
    // wait for all the file data to gathered and parse them into JSON objects
    const users = JSON.parse(data[0]);
    const jobs = JSON.parse(data[1]);

    console.log("Here are the matches:");

    // display the matches by calling the jobMatch function
    jobMatch(users, jobs);
  })
  .catch((err) => console.log("Error has occurred:", err.message));
