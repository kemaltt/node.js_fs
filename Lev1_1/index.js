const fs = require("fs");

fs.writeFileSync("blog1.txt", "Hello World");
fs.writeFileSync("blog1.txt", "Hello World!!!");
fs.writeFileSync(
  "blog2.txt",
  "Node.js is a server-side javascript runtime environment"
);

// fs.mkdirSync("assets");
// fs.rmdirSync("assets");

fs.mkdir("assets", (err) => {
  if (err) {
    console.log("Directory created successfully.");
    return;
  }
});

fs.readdir("assets", (err) => {
  if (err) {
    console.log("Folder does not exist.");
    return;
  } else {
    fs.rmdir("assets", (err) => {
      console.log("Directory deleted successfully.");
    });
  }
});

fs.readFile("delete.txt", (err) => {
  if (err) {
    console.log("Folder does not exist.");
    fs.writeFile("delete.txt", "Hello World", (err) => {
      console.log("File created successfully.");
    });
  }

  fs.unlink("delete.txt", (err) => {
    if (err) {
      console.log("File does not exist.");
    }
    console.log("File deleted successfully.");
  });
});

// fs.writeFileSync("delete.txt", "Hello World");
// fs.unlinkSync("delete.txt");

// fs.writeFileSync("Hello.txt", "Hello World");
// fs.renameSync("Hello.txt", "HelloWorld.txt");
