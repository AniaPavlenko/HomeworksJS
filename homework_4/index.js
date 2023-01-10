const enroleeArr = [{
  name: 'Сергей',
  surname: 'Войлов',
  ratingPoint: 1000,
  schoolPoint: 1000,
  course: 2,
},
{
  name: 'Татьяна',
  surname: 'Коваленко',
  ratingPoint: 880,
  schoolPoint: 700,
  course: 1,
},
{
  name: 'Анна',
  surname: 'Кугир',
  ratingPoint: 1430,
  schoolPoint: 1200,
  course: 3,
},
{
  name: 'Станислав',
  surname: 'Щелоков',
  ratingPoint: 1130,
  schoolPoint: 1060,
  course: 2,
},
{
  name: 'Денис',
  surname: 'Хрущ',
  ratingPoint: 1000,
  schoolPoint: 990,
  course: 4,
},
{
  name: 'Татьяна',
  surname: 'Капустник',
  ratingPoint: 650,
  schoolPoint: 500,
  course: 3,
},
{
  name: 'Максим',
  surname: 'Меженский',
  ratingPoint: 990,
  schoolPoint: 1100,
  course: 1,
},
{
  name: 'Денис',
  surname: 'Марченко',
  ratingPoint: 570,
  schoolPoint: 1300,
  course: 4,
},
{
  name: 'Антон',
  surname: 'Завадский',
  ratingPoint: 1090,
  schoolPoint: 1010,
  course: 3
},
{
  name: 'Игорь',
  surname: 'Куштым',
  ratingPoint: 870,
  schoolPoint: 790,
  course: 1,
},
{
  name: 'Инна',
  surname: 'Скакунова',
  ratingPoint: 1560,
  schoolPoint: 200,
  course: 2,
},
];



class Student {
constructor(enrollee) {
  this.id = Student.ID++;
  this.name = enrollee.name;
  this.surname = enrollee.surname;
  this.ratingPoint = enrollee.ratingPoint;
  this.schoolPoint = enrollee.schoolPoint;
  this.isSelfPayment = true;
  Object.assign(this, enrollee);


  Student.listOfStudents.push(this)
  // Student.listOfStudents.sort(function(a, b) {return a.schoolPoint-b.schoolPoint}).sort(function(a, b) {return a.ratingPoint-b.ratingPoint}).reverse()
  Student.checkSelfPayment()

}

static ID = 1;

static listOfStudents = [];


static checkSelfPayment(){
  const newListOfStudents = Student.listOfStudents;

  for(const index in newListOfStudents){
    const student = newListOfStudents[index];

    if(newListOfStudents.length <= 5){
      student.isSelfPayment = false;
    }
  }
}

}


for(const enrollee of enroleeArr) {
new Student(enrollee);
}


console.log(Student.listOfStudents)





