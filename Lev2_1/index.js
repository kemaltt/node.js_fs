const fs = require("fs");
const { data } = require("./data.js");

// console.log(data);

const newData = data
  .map((item) => {
    return `${item.id} - ${item.title} 
    ${item.description}`;
  })
  .join("\n");

// console.log(newData);

fs.writeFile("./data.txt", newData, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created!");
  }
});

// fs.writeFileSync("./data.txt", newData);

// fs.writeFile("./Lev2_1/data.json", JSON.stringify(data), (err)=> {
//     if (err) throw err;
//     console.log("The file has been saved!");

// })
