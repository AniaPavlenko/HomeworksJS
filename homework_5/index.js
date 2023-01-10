//1
const counter = function () {
  let start = 0;

  return function (num) {
    let result = start += num; 
    return result
  }
}();


console.log(counter(3));
console.log(counter(5));
console.log(counter(228));




//2
const getUpdatedArr = function () { 
  let arr = [];

  return function (items) { 
    if (items === undefined) {
      return arr = [];
    } else{ 
      arr.push(items)
      return arr
    }
  }
}

const updateArr = getUpdatedArr();

console.log(updateArr(5))
console.log(updateArr({name: 'Vasya'}))
console.log(updateArr())
console.log(updateArr(4))

