const calculator=require("./node_modules/sum-difference-multiplication-division/maths.js")
const add = require("./add.js")
 const mul=require("./multiply.js")
const sub=require("./subtract.js")
const divide=require("./divide.js")
let addition=`Addition= ${add(2,3)}`;
let subtration=`Subtration= ${sub(2,3)}`;
let multi=`Multiplication= ${mul(2,3)}`;
let divi=`Divide= ${divide(2,3)}`;
console.log(addition,subtration,multi,divi);


