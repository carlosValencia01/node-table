const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    demandOption: false,
    default: false,
  })
  .option("t", {
    alias: "till",
    type: "number",
    demandOption: false,
    default: 10,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "Base must be a number";
    }
    return true;
  }).argv;

module.exports = {
  argv,
};
