//1
const citiesAndCountries = {
  Kyiv: "Ukraine",
  NewYork: 'USA',
  Amsterdam: 'Netherlands',
  Berlin: 'Germany',
  Paris: 'France',
  Lisbon: 'Portugal',
  Vienna: 'Austria',
  };

const result = [];

for (let key in citiesAndCountries) {
  const cities = (`${key} is ${citiesAndCountries[key]}`);
  result.push(cities);
}
console.log(result);


//2 
const amount = 9;
const mainArr = [];

for(let i = 1; i <= amount; i+=3){
  const subArray  = [];
  for (let a = i; a <= i+2; a++) { 
    subArray[subArray.length] = a;
  }
  mainArr[mainArr.length] = subArray
}

console.log(mainArr)


//3
const namesOfDays = {
  ua: ["Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота", "Неділя",],
  en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Suturday","Sunday"],
}


function getNameOfDay(){
  const lang = 'ua';
  const day = 7;
  return (namesOfDays[lang][day-1])
}

console.log(getNameOfDay());


//4 
const sumSmallestNum = function(arrayOfNum){
  let minA = arrayOfNum[0];
  let minB = arrayOfNum[0];

  for(let i = 0; i < arrayOfNum.length; i++){
    if (arrayOfNum [i] < minA && arrayOfNum [i] !== minB) minA = arrayOfNum[i];
  }
  
  for(let j = 0; j < arrayOfNum.length; j++)
  if (arrayOfNum [j] < minB && arrayOfNum [j] !== minA) minB = arrayOfNum[j];
  console.log(minA + minB);
}


sumSmallestNum ([19, 5, 42, 2, 77]);