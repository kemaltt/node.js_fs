const fs = require("fs");

fs.readdir("./MyFunnyFolder", (err) => {
  if (err) {
    console.log("Folder does not exist.");

    fs.mkdir("./MyFunnyFolder", (err) => {
      if (err) {
        console.log("Folder does not exist.");
      }
      console.log("Folder created successfully.");
    });
    return;
  }

  fs.rmdir("./MyFunnyFolder", (err) => {
    if (err) {
      console.log("Folder does not exist.");
    }
    console.log("Folder deleted successfully.");
  });
});

fs.access("./what/isThis.txt", (err) => {
  if (err) {
    console.log("File does not exist.");
  }
  fs.mkdir("./what", (err) => {
    if (err) {
      console.log("Folder does not exist.");
      return;
    }
    console.log("what created successfully.");
    fs.writeFile("./what/isThis.txt", "Hello World", (err) => {
      if (err) {
        console.log("File does not exist.");
      }
      console.log("File created successfully.");
    });
  });
});
