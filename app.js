const { createFile } = require("./helpers/multiply");
const { argv } = require("./config/yargs");

createFile(argv.b, argv.l, argv.t)
  .then((nombreArchivo) => console.log(nombreArchivo))
  .catch((err) => console.log);
