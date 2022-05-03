const { readFile } = require("fs");
const { promisify } = require("util");

const readFileAsync = promisify(readFile);

const read = async (path, delimiter = "\n") => {
  console.log("merge-freeze");
  const content = await readFileAsync(path, "utf-8");
  return content.split(delimiter);
};

module.exports = {
  read,
};
