console.log("hey");
//functions- Definition and function call
function myFunc()
{
  let a = "Todays time up";
  myFunc1();
  return a;

}


function myFunc1()
{
    let data = "Flycatch infotech pvt.Kochin";
    console.log(data);
    
}
function myFunc2()
{
    let a = 34;
    let b = 56;
    let c = a + b;
    myFunc1();
    return c;

  

}
//parameter passing
function add(z)
{
  let a1 = 10;
  let b1 = z ;
  let c1 = a1 + b1;
  return c1;
}
//Arrow Function
 samplearrow1 = (val) =>
 {
  return val;
 }
 samplearrow2 = val => val;

 addition = (r) =>
 {
   let a1 = 12;
   let b1 = r;
   let val = a1 + b1
  return val;
 }
 //objects-Key value pairs
 
 let user = {
      firstName : "Athira",
      middleName : "N",
      lastName : "Ravi",
 };
 //Arrays
 let myArray = [2,4,6,8,10];
 let myPets = ["dogs","cats","goats"];

 console.log(myFunc2());
console.log(myFunc());
console.log(add(5));
console.log(samplearrow1 (10));
console.log(samplearrow2 ("Arrow functions"));
console.log(addition (10));
console.log(user);
console.log(user.firstName);
console.log(user.middleName);
console.log(user.lastName);
console.log(myArray);
console.log(myPets);
console.log(myPets[0]  +  "," +  myPets[2]);

//string methods
let val = "Bottle Arts";
let res = val.length;
console.log(res);
console.log(val.indexOf('A'));
console.log(val.indexOf('p'));
console.log(val.lastIndexOf('s'));
console.log(val.search('e'));
console.log(val.search('p'));
console.log(val.includes('Arts'));
console.log(val.includes('welcome'));
console.log(val.slice(0,6));
console.log(val.slice(7));
console.log(val.slice(10));
console.log(val.slice(-1));//last position
console.log(val.slice(-5));

// number methods
let a = "15";
let b = 10;
console.log(a);
console.log(b);
console.log(typeof a);
console.log(typeof b);
console.log(typeof parseInt(a));
console.log(typeof toString(b));


