//scopes

// global scope
// let x = 10;
// var y = 20;


// function scope
// function myFunction() {
//   let a = 20;
//   var b = 30;
// }

// console.log(b)


// block scope
// 1. დაწერეთ for ციკლი, 0 დან 25 - მდე console.log ში დაბეჭდეთ ინდექსი i
// for (let i = 0; i < 25; i++) {
//   // console.log(i);
//
//   let c = 20;
//   // var d = 30;
// }

// console.log(c)
// console.log(d)


// console.log('end of for loop')

// // 2. დაწერეთ while ციკლი 0 დან 20 - მდე console.log ში დაბეჭდეთ ინდექსი i

let i = 0;
// while (i < 20) {
//   console.log(i);
//   i++;
// }

// console.log('end of while loop', i)

// 3. დაწერეთ do while ციკლი 0 დან 30 - მდე console.log ში დაბეჭდეთ ინდექსი i

i = 0;

// let j = 0;
// do {
//   // console.log(i);
//   i++;
// }while(i < 30)
// console.log('end of do while loop')

// 4. მოცემული გვაქვს მასივი const numbers = [2,3,6,7,8,9,23,24,29]. for ლუპის დახმარებით შეამოწმეთ მასივის
// ყველა ელემენტი და  კონსოლში გამოიტანეთ ამ მასივიდან მხოლოდ ლუწი რიცხვები.
const numbers = [2,3,6,7,8,9,23,24,29]

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     // console.log(numbers[i]);
//   }
// }



// 5. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;
// currentDay ცვლადი გვაძლევს რეალურ კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.
// ( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი, ყოველდღე სხვადასხვა მნიშვნელობას დაგიბრუნებთ) ,
// დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა,
// 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.
// new String('test')

const currentDay = new Date().getDay();
let day = '';
switch (currentDay) {
  case 0:
    day = 'კვირა';
    break;
  case 1:
    day = 'ორშაბათი';
    break;
  case 2:
    day = 'სამშაბათი';
    break;
  case 3:
    day = 'ოთხშაბათი';
    break;
  case 4:
    day = 'ხუთშაბათი';
    break;
  case 5:
    day = 'პარასკევი';
    break;
  case 6:
    day = 'შაბათი';
    break;
  default:
    day = '';
}

// console.log(day)

//functions

function greetUser(userName) {
  console.log('Hello, ', userName)
  
}

// console.log(calculateProductTotalPrice(2000, 5))

// greetUser('John         ')
// greetUser('Jane')
// greetUser()
// greetUser()
// greetUser()

function calculateProductTotalPrice(price=0, quantity=0) {
  if(price < 0 || quantity < 0) {
    return 'Invalid input';
  }
  
  
  return {
    totalPrice: price * quantity,
    convertPrice: ()=>{
      return price * quantity * 3.2;
    },
  };
  // console.log('test');
}


const product1 = calculateProductTotalPrice(2000, 5)
const product2 = calculateProductTotalPrice(-300, 5) // {totalPrice: -1500}
const newFn = calculateProductTotalPrice;   //function

// console.log(product1)

const calculate2 = function () {
  return 'test';
}

const arrCalculate3 = (price, count) => {
  return price * count;
}



// console.log(arrCalculate3(10, 2))
// console.log(arrCalculate3(100, 7))


const dataToUse = data;

// console.log(dataToUse)


const logData = (el, index, array) => {
  console.log('array element', index)
}


// dataToUse.forEach(logData)

dataToUse.forEach((el, index, array)=>{
  if(el.discount > 0) console.log(el);
})


const filteredArray = dataToUse.filter((el)=>{
  return el.quantity >= 5;
})

// console.log(filteredArray);

const firstAvailableElement = dataToUse.find((el)=>{
  return el.quantity >= 1;
})

// console.log(firstAvailableElement)

const isEveryElAvailable = dataToUse.every((el, index, arr)=>{
  return el.quantity >= 5;
})

// console.log(isEveryElAvailable)


const isSomeElAvailable = dataToUse.some((el, index, arr)=>{
  return el.quantity >= 5;
})

// console.log(isSomeElAvailable)

const formatedArray = dataToUse.map((el, index, arr)=>{
  // const myObject = {
  //   title: el.title.toUpperCase(),
  //   price: el.price,
  // }
  
  return  `<p>${el.title}</p>`
})

console.log('formatedArray', formatedArray)



// Object.keys(firstAvailableElement)
// Object.values(firstAvailableElement)
// Object.entries(firstAvailableElement)
