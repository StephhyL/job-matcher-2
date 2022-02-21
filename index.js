const args = process.argv.slice(2);

// condition in place to allow for same result regardless of order of users.json and jobs.json entered on command line
const usersArray = args[0] === "users.json" ? args[0] : args[1];
const jobsArray = args[1] === "jobs.json" ? args[1] : args[0];
