const yargs = require("yargs");

let list = [];

yargs.command({
  command: "add",
  describe: "Adding numbers 1-5 in the list",
  handler: () => {
    for (let i = 1; i <= 5; i++) {
      list.push(i);
    }
    console.log("Numbers added , the list : ",list);
  }
});

//////
yargs.command({
    command: "delete",
    describe: "Delete numbers 2, 3, 4, and 1 from the list",
    handler: () => {
      list = list.filter(num => ![2, 3, 4, 1].includes(num));
      console.log("Deleting [2, 3, 4, 1] , the list : ",list);
    }
  });

//////
yargs.command({
    command: "read",
    describe: "Reading the list",
    handler: () => {
      console.log("The list : ",list);
    }
  });
yargs.parse();

//Work done