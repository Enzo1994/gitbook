var abc = 3;
// const abc = { a: 3 };
setInterval(() => {
  console.log("cjs", abc);
}, 1000);
module.exports = abc;
