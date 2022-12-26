const emplyeeArr = [
  {
      id: 1,
      name: 'Денис',
      surname: 'Хрущ',
      salary: 1010, 
      workExperience: 10, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
  },
  {
      id: 2,
      name: 'Сергей',
      surname: 'Войлов',
      salary: 1200, 
      workExperience: 12, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
  },
  {
      id: 3,
      name: 'Татьяна',
      surname: 'Коваленко',
      salary: 480, 
      workExperience: 3, /// стаж работы (1 = один месяц)
      isPrivileges: true, /// льготы
      gender: 'female'
  },
  {
      id: 4,
      name: 'Анна',
      surname: 'Кугир',
      salary: 2430, 
      workExperience: 20, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'female'
  },
  {
      id: 5,
      name: 'Татьяна',
      surname: 'Капустник',
      salary: 3150, 
      workExperience: 30, /// стаж работы (1 = один месяц)
      isPrivileges: true, /// льготы
      gender: 'female'
  },
  {
      id: 6,
      name: 'Станислав',
      surname: 'Щелоков',
      salary: 1730, 
      workExperience: 15, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
  },
  {
      id: 7,
      name: 'Денис',
      surname: 'Марченко',
      salary: 5730, 
      workExperience: 45, /// стаж работы (1 = один месяц)
      isPrivileges: true, /// льготы
      gender: 'male'
  },
  {
      id: 8,
      name: 'Максим',
      surname: 'Меженский',
      salary: 4190, 
      workExperience: 39, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
  },
  {
      id: 9,
      name: 'Антон',
      surname: 'Завадский',
      salary: 790, 
      workExperience: 7, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
  },
  {
      id: 10,
      name: 'Инна',
      surname: 'Скакунова',
      salary: 5260, 
      workExperience: 49, /// стаж работы (1 = один месяц)
      isPrivileges: true, /// льготы
      gender: 'female'
  },
  {
      id: 11,
      name: 'Игорь',
      surname: 'Куштым',
      salary: 300, 
      workExperience: 1, /// стаж работы (1 = один месяц)
      isPrivileges: false, /// льготы
      gender: 'male'
  },
];


//1
const Employee = function(emplyeeArr) { 
  this.id = emplyeeArr.id;
  this.name = emplyeeArr.name;
  this.surname = emplyeeArr.surname;
  this.salary = emplyeeArr.schoolPoints;
  this.isPrivileges = emplyeeArr.isPrivileges;
  this.gender = emplyeeArr.gender;
  //2
  this.getFullName = function() {
    return(`${this.name} ${this.surname}`)
  }
}

const emplyeeObj = new Employee(emplyeeArr[5])
console.log(emplyeeObj.getFullName());


//3
const employeeList = [];
for (const emplyee of emplyeeArr){
  employeeList.push(emplyee)
}
console.log(employeeList)


//4
const fullNamesOfEmployees = employeeList.map((empl) => {
  return `${empl.name} ${empl.surname}`
})

console.log(fullNamesOfEmployees)


//5
const getMiddleSalary = (employeeList) => {
  let sumSalary = 0;
  for (emplyee of employeeList) {
    sumSalary += emplyee.salary;
  }
  return Math.round(sumSalary / employeeList.length)
}

console.log(getMiddleSalary(employeeList)) 
