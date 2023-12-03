/*console.log("hello js from external js...");
document.write("from js");*/

var a=10;//number
console.log("a: ",a);
console.log("this is :",typeof(a));

var str="this is a string";//string
console.log("str: ",str);
console.log("this is :",typeof(str));

var bool1=true;//boolean
console.log("bool1: ",bool1);
console.log("this is :",typeof(bool1));

var bool2=false;//boolean
console.log("bool2: ",bool2);
console.log("this is :",typeof(bool2));

var u=undefined;//undefined
console.log ("u: ",u);
console.log("this is :",typeof(u));

var n=null;//null
console.log('n: ',n);
console.log("this is :",typeof(n));

//global object
console.log(window);
var bike="hero honda";
window.console.log("bike : ",bike);

//variable scopes

//var
/*
    - add to global variable
    - function scoped
    -can be redclared and modified at any time
*/
{
var car="bmw";
console.log("car : ",car);
console.log("window.car : ",window.car);
var car;
car="audi";
console.log("car : ",car);
car="benz";
console.log("car : ",car);
}
console.log("car from outside block: ",car);

//let

/*
    - donot add to global variable
    - block scoped
    - cannot be redeclared
    - can update value later
    - declaration and initialization can be done in two steps
*/ 
{
let fruit="apple";
console.log("fruit : ",fruit);
console.log("window.fruit: ",window.fruit);
 // let fruit; cannot redeclare error
 fruit="orange";
 console.log("fruit: ",fruit);
  let food;
  food="rice"
}
//console.log("fruit from outside: ",fruit); error fruit not defined

//const 

/* 
    - do not add to global scope
    - block scope
    - cannot be redeclared
    - cannot update value later
     - declaration and initialization can be done only in one steps
*/
{
 const place="new york";
 console.log("place :",place);
 console.log("window.place :",window.place);
 //const place;
 //place="mumbai";error Assignment to constant variable.
 //const country; missing initializer in const declaration
}
//console.log("place from outside: ",place); error place not defined


{
    let str ="Hello World";
    let str2="haiiii"

    let length=str.length;
    console.log("length = :",length);

    let toUpperCase =str.toUpperCase();
    console.log("upperCase: ",toUpperCase);

    let toLowerCase =str.toLowerCase();
    console.log("LowerCase: ",toLowerCase);

    let length1=str.toUpperCase().length;
    console.log("length: ",length1);

    let length2=str.toLowerCase().length;
    console.log("length: ",length2);

    let trimmedstring=str.trim();
    console.log("trimmedstring : ",trimmedstring);
    let trimmedStringLength=trimmedstring.length;
    console.log("length of trimmed string : ",trimmedStringLength);


    let lefttrim=str.trimStart();
    console.log("trimmed left : ",lefttrim);
    let trimleftlength=lefttrim.length;
    console.log("trimleftlength : ",trimleftlength);


    let righttrim=str.trimEnd();
    console.log("trimmed right : ",righttrim);
    let trimrightlength=righttrim.length;
    console.log("trimrightlength : ",trimrightlength);

    let substring=str.substring(0,3);
    console.log("substring : ",substring);

    let replacedString= str.replace("Hello","Hai");
    console.log("replacedstring : ",replacedString);


    let isStartsWith=str.startsWith("Hello");
    console.log("startwith : ",isStartsWith)

    let isEndsWith=str.endsWith("Hello");
    console.log("endwith : ",isEndsWith)

    let splitstring=str.split(',');//converts string to array
    console.log("splitstring : ",splitstring);

    let joinedarray=splitstring.join(' '); //converts array to string
    console.log("joinedstring : ",joinedarray);

    let slicedstring=str.slice(3,8);
    console.log("slicedstring : ",slicedstring);

    let replacedallstring=str.replaceAll("o","z");
    console.log("replacedallstring : ",replacedallstring);

    let concatstring=str.concat(" ",str2);
    console.log("concatstring : ",concatstring);

    let padstart=str.padStart(15,"h");
    console.log("padstart : ",padstart);

    let padEnd=str.padEnd(15,"h");
    console.log("padsEnd: ",padEnd);

    let charAtstring=str.charAt(2);
    console.log("charAt 0: ",charAtstring);

    let charcodeAtstring=str.charCodeAt(5);
    console.log("charcodeAt 0: ",charcodeAtstring);
}
 //array
{
    let arr2=[10,20,"mango",30,40,[1,"a",3]];
    console.log("legth of arr: ",arr2.length);


    let arr1=new Array(10,23,12,456);
    console.log("arr1:",arr1);

    let arr=[10,20,30,40,50,60];
    console.log("arr[2]",arr[2]);

    console.log("index of 40",arr.indexOf(40));

    arr.push("End");//add element to end of array
    console.log("push:",arr);

    arr.unshift("start");//add element to start of array
    console.log("unshift: ",arr);

    arr.pop();//remove element from end of array
    console.log("pop: ",arr);

    arr.shift();//remove element from start of array
    console.log("shift: ",arr);

    arr.splice(2,2);//arr.splice(start index,n.o of elements to be spliced)
    console.log("splice :",arr);

    arr.splice(3,0,55); // add 55 to the third index
    console.log("splice: ",arr);

    arr[1]=100;//add element to the array at specified index
    console.log("arr[]:",arr);
}
 //objects
{
 let obj={
    firstname:"john",
    lastname:"terry",
    age:42,
    american:false,
    marks:[1010,80,90],
    address :{
        state: "kerala",
        district:"ernakulam",
    }
 }
     console.log("obj: ",obj);

     console.log("firstname: ",obj.firstname);
     console.log("american: ",obj.american);

     obj.firstname="dwane";
     console.log("obj: ",obj);

     obj.email="dwane@gmail.com";
     console.log("obj: ",obj);

     obj.phone="1234567890";
     console.log("obj: ",obj);


     //JSON string

     let json_str=JSON.stringify(obj);//converts js object to JSON string
     console.log("json_str:",json_str);

     json_str.firstname//not possible as it is a string

     //JSON string format

     let json_str_format=`{
        "firstname":"john",
        "lastname":"terry",
        "age":42,
        "american":false,
        "marks":[1010,80,90],
        "address" :{
            "state": "kerala",
            "district":"ernakulam",
        }
     }`;

     let json_to_obj=JSON.parse(json_str);
     console.log("json_to_obj:",json_to_obj);
}


{
    let a=20;
    if (a==10){
        console.log("succeed");
    }else if(a==15){
        console.log("processing");
    }else if(a==20){
        console.log("completed");
    }
    else{
        console.log("failed");
    }
}
 {
    let num1=10;
     
    let postIncNum=num1++;
    console.log("postIncNum : ",postIncNum);

    num2=10;
     let preIncNum=++num2;
     console.log("preIncNum : ",preIncNum);

    num3=10;
    let preDecNum=--num3;
    console.log("preDecNum : ",preDecNum);

    num4=10;
    let postDecNum=num4--;
    console.log("postDecNum : ",postDecNum);

  num5=10;
  num6= 10

  if(num5==num6){
    console.log("values are equal");
  }
  if (num5 ===num6){
    console.log("values and datatypes are equal")
  }
  if(num6 !=11){
    console.log("not equal t0 11")
  }
 }

 let day=5;

 switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        brreak;
 }

 //loops 


 //for loop
 {
    for(let i=0;i<10;i++){
        console.log("Hello World");
      
    }

    for(let i=1;i<=10;i++){

        if(i==3){
            continue;
        }

        if(i==8){
            break;
        }
        console.log(i);
    }
 }
 //while loop
 {
    let j=0;
    while(j<10){
        console.log("Haii");
        j++;
    }
 }
 //do while loop
  {
    let k=11;
    do{
        console.log("Welcome");
       k++;
    }while(k<10);
 }
{
    let product=1;
    for(i=1;i<=5;i++){
        product=product*i;
    }
    console.log("product : ",product);

    {
        let fact=1;
        for(l=1;l<=5;l++){
            fact1=fact*l;
        }
        console.log("factorial- 1: ",fact1);
    }
    
}
{
    let sum=0;
    for(i=0;i<=10;i++){
        sum=sum+i;
    }
    console.log("sum : ",sum);
}
{
    let fact=1;
    let num=5;
    for(i=num;i>0;i--){
        fact=fact*i;
    }
    console.log("factorial : ",fact);
}
{
    let n1=0;
    let n2=1;
    let n3=0;
    
    console.log(n1,n2);
   for (let i=0;i<10;i++){
    n3=n1+n2;
    console.log(n3);
    n1=n2;
    n2=n3;
    
   }
}
{
    console.log("fibinocci series");
  let sum1=0;
  let a=0;
  let b=1;
  let limit=5;
  let i=0;
   while(i<=limit){
    sum1=sum1+a;
    console.log(sum1);
    a=b;
    b=sum1;
    i++;
   }  

}

{
     console.log("sum")
     sum1=0;
     sum2=0
    for (let i=0;i<=50;i++){
        if(i%2==0){
            sum1=sum1+i;
        }
        
        if(i%2==1){
            sum2=sum2+i;
        }
        
    }
    console.log(sum1);
    console.log(sum2);
}

{
    let arr=[10,20,50,60,90,6];
    let sum=0;

    for (i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    console.log("sum : ",sum);

    avg=sum/arr.length;
    console.log("average : ",avg);


    let min=arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }

    console.log("minimum number : ",min);

    let max=arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log("maximum number : ",max);
}
{
    let arr=[10,50,60,-20,22,-95];

    for(i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]=arr[i]*-1;
        }
    }
    console.log("arr : ",arr)
}
{
    let str="hello";
    let reverse='';
    for(i=str.length-1;i>=0;i--){
        reverse=reverse+str[i];
    }
    console.log("reverse : ",reverse);
}

{
    let letterarray=['a','B','d'];
    let upperarray=[];
    let lowerarray=[];
    for(let i=0;i<letterarray.length;i++){
        upperarray[i]=letterarray[i].toUpperCase();
        lowerarray[i]=letterarray[i].toLowerCase();
    }
    console.log("UpperCase array : ",upperarray);
    console.log("lowercase array : ",lowerarray);
}
{
    for (let i=1;i<=10;i++){
        
        for (let j=0;j<=10;j++){
            console.log(`${i}*${j}=${i*j}`);
        }
        console.log("\n");
    }
}
{
    let string=''
    for(i=1;i<=5;i++){
        for(j=1;j<=i;j++){
            string=string+'*';
        }
       string=string+'\n';
    }
    console.log(string);
}

