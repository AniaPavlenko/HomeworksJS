// 1
for (let i = 1; i < 11; i++){
  if(i % 3 === 0 ){
    console.log('FizBuz')
  }else if(i % 2 === 0){
    console.log('Fiz')
  }else{(i)
    console.log('Buz')
  }
}


// 2
let number = 10;
let result = 1;
      
for (i=0; i < number; ++i){
  if(result *=(i + 1)){
    }
  }
console.log(result)


// 3
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let total = 0

for (let i = 1; i < weeksAmount + 1; i++){
  if (i % 2 === 0){
    total += 2
  }else{
    total += 3
  }
}
console.log(total)


//5 
const medianNumber = 6; 
for (i = 1; i < medianNumber + 1; i++){
  let namOfInline = medianNumber * 2 - 1;
  let dash = medianNumber - i;
  let tag = namOfInline - dash*2;{
    console.log('-'.repeat(dash) + '#'.repeat(tag) + '-'.repeat(dash))
  }
}