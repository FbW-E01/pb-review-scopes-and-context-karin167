if (true) {
  var name = "Joel";
}
const likes = "Cooding";
console.log(name);
console.log(likes);
//not a global - inside a scope
//only the var will work . but not the const or let
//ReferenceError: likes is not defined
//if the (const likes = "Cooding";) it was outside from the scope it will work very well
//because its inside a scope its not defined

//2
// function x() {
//   console.log("this is the first", this);
// }
// console.log("this is second", this);
// x();
//this function is inside a scope- give me a details about that
//the second not showing to us nothing and the first one showing to us the details about the 'this'

//3
class test {
  constructor() {
    console.log(this);
  }
}
new test();
// just a curly braces {}  print only the name of the class and also {} the curly braces

//4
const randome = () => {
  return Math.floor(Math.random() * 10);
};
console.log(randome());

//5
const cat = () => {
  console.log(`"Meow" means “woof” in cat."`);
};
cat();
//6
const typeOf1 = () => {
  const foo = true;
  return typeof foo;
};
console.log(typeOf1());
//7
const fun1 = () => {
  let str1 = "Hello";
  return str1.slice(0, 1);
};
console.log(fun1());
//8
const arr22 = ["banana", "mango", "kiwi", "whatermelon"];
const arr23 = () => {
  return arr22[0];
};
console.log(arr23());
//9
const arr3 = "SHALOM";
const arr4 = () => {
  if (arr3.length === 3) {
    return true;
  } else {
    return false;
  }
};
console.log(arr4());
