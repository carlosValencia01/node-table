const fs = require("fs");
const colors = require("colors");

const createFile = async (base, list, till = 10) => {
  try {
    let out = "";
    for (let i = 1; i <= till; i++) {
      out += `${base} X ${i} = ${base * i}\n`;
    }

    fs.writeFileSync(`./files/tabla-${base}.txt`, out);
    if (list) {
      console.log(out.green);
    }
    return `tabla-${base}.txt Created`;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createFile,
};
