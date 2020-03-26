let cjs = require("./cjs.js");

setTimeout(() => {
  cjs = 666;
  console.log("cjs2", cjs);
}, 3000);
