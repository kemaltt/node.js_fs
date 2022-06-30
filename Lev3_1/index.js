const fs = require("fs");

const addText = (text) => {
  return text;
};

fs.mkdir("assets", (err) => {
  if (err) {
    console.log("Directory created successfully.");
    return;
  }

  fs.readFile("./assets/data.txt", (err, data) => {
    if (err) {
      console.log("File does not exist.");
    }

    fs.writeFile("./assets/data.txt", addText("Hallo Welt!!!"), (err) => {
      console.log("File created successfully.");
    });
  });
});
