console.log("Loops in js");
// if - statement


let userAge = 26;
if (userAge == 45)
{
  console.log("you are old");
}
else if(userAge <30 && userAge>20)
{
    console.log("you are about to old");
}
else
{
  console.log("you are too young");
}

//switch - statement
switch(userAge){
    case 26:
            console.log("you are young");
            break;
    case 34:
            console.log("you are about to old");
            break;  
    case 45:
            console.log("you are too old");
            break; 
    default:
        console.log("No matches is found");
}
//for - loop
let n = 10;
for(i = 0;i<= 10; i++)
{
    console.log(i);
}
//while- loop
let count = 0;
while(count<=10)
{
    console.log(count);
    count++;
}
//do-while
let N = 0;
do
{
    console.log(N);
    N++;

}while(N<=10);

// display array  using for loop
let myColors =["black","blue","gray","pink"];
// for(let i=0;i<=myColors.length;i++)
// {
//     console.log(myColors[i]);
// }
for(let x of myColors )
{
    document.write(x + "<br>");
}

//display objects using for loop
let myData =
{
    firstName :"Athira",
    lastName :"Ravi"
};

for( let x in myData ){
    document.write(myData[x] + "<br>");
}
