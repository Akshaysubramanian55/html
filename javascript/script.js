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

    let trimmedstring=str.trim();// trim -removes white space from both the endss
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
    console.log("concatstring : ",concatstring);//joins 2 stringss

    let padstart=str.padStart(15,"h");
    console.log("padstart : ",padstart);

    let padEnd=str.padEnd(15,"h");
    console.log("padsEnd: ",padEnd);

    let charAtstring=str.charAt(2);//returns the specified index
    console.log("charAt 0: ",charAtstring);

    let charcodeAtstring=str.charCodeAt(5);//returns unicode at specified position on string
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

     let json_to_obj=JSON.parse(json_str);// parse => json string to js obj
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
//function

{
    //function defnition
    function printHello(){
        console.log("Hello World");
    }
    printHello();//function call

    //Named Function
     function getage(){
        return 22;
        console.log("not  executable as statements after returns do not execute");
     }

     age=getage();
     console.log("Age : ",age);

     //anonymous function
     let getname = function(){
        console.log("get the name function called");
        return "akshay";
     }
     let name=getname();
     console.log("name : ",name);

     //arrow function

     let getmarks =() => {
        console.log("Arrow function is called");
        return 80;
     }
     let mark=getmarks();
     console.log("mark :",mark );
// function with parameter
     function greeting(message1,message2){
        console.log("message1 : ",message1);
        console.log("message2 : ",message2);
     }
     greeting("hello","hai")//arguments
 //sum using function
     function sum(limit){

    let sum=0;
    for(i=0;i<=limit;i++){
        sum=sum+i;
    }
    console.log("sum : ",sum);
     }
     sum(10);
//factorial using function
     function factorial (num){

    let fact=1;
   
    for(i=num;i>0;i--){
        fact=fact*i;
    }
    console.log("factorial : ",fact);
     }
     factorial(6);


     //fibinocci using function
     function fibinocci(limit){
        console.log("fibinocci series");
  let sum1=0;
  let a=0;
  let b=1;
  
  let i=0;
   while(i<=limit){
    sum1=sum1+a;
    console.log(sum1);
    a=b;
    b=sum1;
    i++;
   }  
 
}
fibinocci(10);
}

//sum of odd and even
function summ1(limit){
    console.log("sum")
     sum1=0;
     sum2=0
    for (let i=0;i<=limit;i++){
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
summ1(50);
// sum and average of elements in array


function sumofarray(arr){

    
    let sum=0;

    for (i=0;i<arr.length;i++){
        sum=sum+arr[i];
        return sum;
    }
    

    avg=sum/arr.length;
    console.log("average : ",avg);


    let min=arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
}
let a2=[10,20,30,6,0];
let resultsum =sumofarray(a2);
sumofarray(a2);
console.log("sum of elements : ",resultsum);

function minandmax(arr){
    
    let sum=0;
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
    return max
    console.log("maximum number : ",max);
}
let a1=[10,20,60,40,50,4,0]
 minandmax(a1);

//reverse a string
function reverse(){
    let str="hello";
    let reverse='';
    for(i=str.length-1;i>=0;i--){
        reverse=reverse+str[i];
    }
    console.log("reverse : ",reverse);
}
reverse();

// uppercase and lowercase elements of array
function upperandlower(letterarray){

    let upperarray=[];
    let lowerarray=[];
    for(let i=0;i<letterarray.length;i++){
        upperarray[i]=letterarray[i].toUpperCase();
        lowerarray[i]=letterarray[i].toLowerCase();
    }
    console.log("UpperCase array : ",upperarray);
    console.log("lowercase array : ",lowerarray);
}
upperandlower(['a','B','d']);

//multiplication tabel

function multiplication(limit){
    
    for (let i=1;i<=limit;i++){
        
        for (let j=0;j<=10;j++){
            console.log(`${i}*${j}=${i*j}`);
        }
        console.log("\n");
    }
}
multiplication(10);

//triange pattern using function
function pattern(rows){
    let string=''
    for(i=1;i<=rows;i++){
        for(j=1;j<=i;j++){
            string=string+'*';
        }
       string=string+'\n';
    }
    console.log(string);
}
pattern(5);

{
      let a='helloA';
      for(let i=0;i<a.length;i++){
            if (a[i]=='a'||a[i]=='A'||a[i]=='e'||a[i]=='E'||a[i]=='i'||a[i]=='I'||a[i]=='o'||a[i]=='O'||a[i]=='u'||a[i]=='U') 
            console.log(a[i]);  
        }
}

{
  let arr=[1,2,3,4,5,1,2];
  let arr1=[];

  for(let i=0;i<arr.length;i++){
     for(let j=i+1;j<=arr.length;j++){
        if(arr[i]===arr[j]){
          arr1[i]=arr[i];
         
        }
     }
    
  }
  console.log(arr1);
}


{
    console.log("\n\n\n");

    function update(a){
        a="New Value";
        console.log("From Update Function ,a :",a);
    }

    function updateArr(arr){
        arr[0]="New Value";
    }

    function updateobj(obj){
        obj.name="jane";
    }

    let a=10;
    let arr=[1,2,3,4,5];
    let obj ={name :"John",age :45};

    //call by value
    console.log("value of a before update :",a);
    update(a);
    console.log("value of a after update : ",a);

    //call by reference 
    console.log("value of arr before update : ",arr);
    updateArr(arr);
    console.log("value of arr after update : ",arr);

    //call by reference
    console.log("value of obj before update : ",obj);
    updateobj(obj);
    console.log("value of obj after update : ",obj);

 
// closure 
// A function along with its environment


    function outerFunction(){
        let greetings="haii! from outer Function ";
        function InnerFunction(){
            function InnerFunction1(){
                console.log(greetings);
            }
            return InnerFunction1;
        }
        return InnerFunction;
    }

    let result =outerFunction();
    console.log("result : ",result);

    let result1 =result();
    console.log("result1 : ",result1);
    result1();

    // let innerfun=function InnerFunction(){
    //     console.log(greetings);
    // };
    // console.log(innerfun);

    // // innerfun();


//     let butn=document.getElementById('btn');
//     console.log("button : ",butn);
//     console.log("Button Content : ",btn.textContent);//textcontent or InnerHTML

//     let container=document.getElementsByClassName('container');
//     console.log("container : ",container);

//     console.log("container 1 : ",container[0]);
//     console.log("content of container 1 : ",container[0].textContent);

//     console.log("container 2 : ",container[1]);
//     console.log("content of container 2 : ",container[1].textContent);

//     console.log("container 3 : ",container[2]);
//     console.log("content of container 3 : ",container[2].textContent);

//     let para=document.getElementsByTagName('p');
//     console.log("para : ",para);

//     console.log("para 1: ",para[0]);
//     console.log("content of para 1: ",para[0].textContent);

//     console.log("para 2: ",para[1]);
//     console.log("content of para 2: ",para[1].textContent);

//     let listItem =document.querySelector('.container #box ul li');
//     console.log("LIST ITEM : ",listItem);
//     console.log("content of li : ",listItem.innerHTML);

//     let btn1=document.getElementById('butnn');
//     btn1.innerHTML ="click me";
}
{
    // let btn=document.getElementById('btn');
    // console.log("btn: ",btn);

    // let inp=document.getElementById('inp');
    // console.log("inp : ",inp);

    // btn.addEventListener('click', function(){
    //    alert("button clicked1");
    // });

    // btn.addEventListener('mouseover',function(){
    //     console.log("mouseover function fired.....");
    // });

    // btn.addEventListener('mouseout',function(){
    //     console.log("mouseout event fired.....");
    // });


    // btn.addEventListener('mousemove', function(){
    //     console.log("mousemove event fired......");
    // });

    // btn.addEventListener('mousedown',function(){
    //     console.log("mouserdown function fired.....");
    // });

    // btn.addEventListener('mouseup',function(){
    //     console.log("mouseup event fired....");
    // });

    // inp.addEventListener('keydown',function(){
    //     console.log("keydown event fired....");
    // });

    // inp.addEventListener('keyup',function(){
    //     console.log("keyup event fired....");
    // });


//     console.log("\n\n\n");
// // math functions 
//     console.log("sqrt (4) : ",Math.sqrt(4));
//     console.log("round(10.4 : ",Math.round(10.4));
//     console.log("round(10.9 : ",Math.round(10.9));
//     console.log("ceil(4.2) : ",Math.ceil(4.2));
//     console.log("ceil(4.9) : ",Math.ceil(4.9));
//     console.log("floor(10.1) : ",Math.floor(10.1));
//     console.log("floor(10.9) : ",Math.floor(10.9));
//     console.log("abs(2) : ",Math.abs(2));
//     console.log("abs(-2) : ",Math.abs(-2));
//     console.log("PI : ",Math.PI);
//     console.log("max(10,20,30) : ",Math.max(10,20,30));
//     console.log("min(10,20,30) : ",Math.min(10,20,30));
//     console.log("power(2,3)  : ",Math.pow(2,3));


//     console.log("\n\n\n");

//     //callback function
//     function printHello(callback){
//         console.log("callback : ",callback);
//         callback();
//         console.log("helloooo....");
//     }
//     let callback=function(){
//         console.log("callback function");
//     }
//      printHello(callback);

//      //timer
//     //  setTimeout (function(){
//     //  console.log("from timeout function...")
//     //  },5000);

//     //  setInterval(function(){
//     //     console.log("from interal function");
//     //  },3000);
// }

// {
//     function putzero(value){
//        return value<10?"0"+value:value;
//     }

//     function show(){
//         var time=document.getElementById('time');
//         var dt= new Date();
//         var hours = dt.getHours();
//         var minutes = dt.getMinutes();
//         var seconds = dt.getSeconds();

//         var ampm=hours>12?"pm":"am";
//         time.innerHTML = putzero(hours%12) +":" +putzero(minutes) + ":" + putzero(seconds) +ampm ;

//         setTimeout( function(){
//            show();
//         },1000);
//     }
//     show();
// }

// {

//     console.log("\n\n\n");

//  //spread operator
//     let arr=[1,2,3,4,5];
//     console.log("arr : ",arr);

//     let arr_cont=[...arr,6];
//     console.log("obj_cont : ",arr_cont);

//     let obj ={
//         firstName :" Mike",
//         LastName :" Hardy"
//     }
//     console.log("obj : ",obj);


//     let obj_cont ={
//         ...obj,
//         age : 30
//     }
//     console.log("obj_cont : ",obj_cont);
// }
// {
//     console.log("\n\n\n");
    
//     //Destructuring

//     let arr =[1,2,3,4,5];
//     console.log("arr : ",arr);

//     let [a,b,c,d,e]=arr;
//     console.log("a : ",a);
//     console.log("b : ",b);
//     console.log("c : ",c);
//     console.log("d : ",d);
//     console.log("e : ",e);


//     let obj ={
//         firstName : "john",
//         LastName : "Henry"
//     }
//     console.log("obj : ",obj);

//     let {firstName,LastName} =obj;

//     console.log("FirstName : ",firstName);
//     console.log("lastName : ",LastName)
// }

// {
//     console.log("\n\n\n");
//     //Nested Destructuring

//     let matrix =[
//         [1,2,3],
//         [4,5,6],
//         [7,8,9],
//     ]
//     console.log("matrix : ",matrix);

//     let [row1,row2,row3] =matrix;
//     console.log("row1 : ",row1);
//     console.log("row2 : ",row2);
//     console.log("row3 : ",row3);


//     let [a,b,c] =row1;
//     let [d,e,f] =row2;
//     let [g,h,i] =row3;

//     console.log("a : ",a);
//     console.log("b : ",b);
//     console.log("c : ",c);
//     console.log("d : ",d);
//     console.log("e : ",e);
//     console.log("f : ",f);
//     console.log("g : ",g);
//     console.log("h : ",h);
//     console.log("i : ",i);

//     let obj ={
//         firstName : "mark",
//         lastName : "hardy",
//         age : 30,
//         address :{
//             street : "mystreet",
//             city : "Ernakulam",
//             pin : 683544,
//         }
//     }
//     console.log("obj : ",obj);


//     let {firstName,lastName,age,address :{street,city,pin}} =obj;

//     console.log("firstName : ",firstName);
//     console.log("lastName : ",lastName);
//     console.log("age : ",age);
//     console.log("street : ",street);
//     console.log("city : ",city);
//     console.log("pin : ",pin);
// }

// {
//     function arrayspread(arr1,arr2){
         

//         let arr3 =[...arr1,...arr2];
//         console.log("arr3 : ",arr3);
//     }
     
//     arrayspread(arr1=[1,2,3,4],arr2=[5,6,7]);
//     console.log("arr1 : ",arr1);
//     console.log("arr2 : ",arr2);
    


//     function objectspread(obj1,obj2){
//         let obj3 ={
//             ...obj1,
//             ...obj2
//         }
//         console.log("obj3 : ",obj3);
//         console.log("Obj1 : ",obj1);
//         console.log("obj2 : ",obj2);
//     }
    
//     objectspread({firstName : "mark",lastname: "hardy"},{age : 30 });
   
// }
{
    let arr= [
        { name : "akhil", mark :48 ,place : "kollam"},
        { name : "anil", mark : 49 ,place : "ernakulam"},
        { name :"vimal", mark : 50 ,place :"kottayam"},
        { name : "kiran", mark :49 ,place : "alapuzha"},
    ]

    //for each
     arr.forEach((element,index) =>{
      console.log("index : ",index);
      console.log("element : ",element.name);
     });
     //find

     let findresulrt = arr.find((element)=>{
     return element.name =="anil";
     
     });
     console.log("findresult : ",findresulrt);

     //filter
     let filterresult = arr.filter((element,index)=>{
        return element.mark ==49;
     });
     console.log("filterresult : ",filterresult);
     
     //map

     let mapresult = arr.map((element)=>{
        return element.name;
     });
     console.log("mapresult : ",mapresult);

     //reduce

     let totalmarks = arr.reduce((total,element)=>{
      return total+element.mark;
     },0);
     console.log("totalmark : ",totalmarks);
}
// {
//     console.log("\n\n\n");


//     let arr =[1,2,3,4,5];
//     //squares
//    let arr2 = arr.map((element)=>{
//          return element*element; 
//     });
//     console.log(arr2); 
   

//     //first even number

//    let even = arr.find((element)=>{
//      return element%2==0;
//     });
//     console.log("even : ",even);

//     //all even numbers

//     let even_filter =arr.filter((element)=>{
//         return element%2==0;
//     });
//     console.log("even numbers : ",even_filter);

//     //double

//     let double =arr.map((element)=>{
//         return element*2;
//     });
//     console.log("double : ",double);

//     //product positive
//  let arr1=[1,2,-5,9,10]
//     let productpositive=arr1.reduce((total,element)=>{
//            if(element>0){
//           return  total*element;
//            }
//            return total;
//     },1);
//    console.log(productpositive);
// }

// {
//     console.log("\n\n\n");
// // let person = {
// //    firstName : "john",
// //    lastName :"dae",
// //    age : 30,
// //  getage : function(){
// //     console.log (` Age of ${this.firstName} is ${this.age}`);
// // }
// // }
// // person.getage();

// // console.log("this : ",this);

// // function greet(message1,message2){
// //     console.log(`${message1} and ${message2} ${this.firstName}`);
// // }

// // // greet("hello" ,"haii");
// // // greet.call(person,"hello","haii");
// // // greet.apply(person,["haii","hello"]);
// // let bindedresult =greet.bind(person,"hello","hai");
// // console.log(bindedresult());








// //constructor function to cteare objects of similar types

// // function person (name ,age ,mark){
// //     this.name =name;
// //     this.age =age;
// //     this.mark =mark;

// //     this.greeting =function(){
// //       console.log(`hai ${this.name},your mark is ${this.mark} `);
// //     }
// // }

// // let person1 =new person ("Harry",18,30);
// // console.log("person1 : ",person1);
// // person1.greeting();

// // let person2 =new person ("Tim",17,20);
// // console.log("person2 : ",person2);
// // person2.greeting();

// // let person3 =new person ("David",18,26);
// // console.log("person3 : ",person3);
// // person3.greeting();

// // person.prototype.getAgeandMark =function(){
// //     console.log(`hai ${this.name},your age is ${this.age} and your mark is ${this.mark}`);
// // }
// // person1.getAgeandMark();

// class person {
//     name;
//     age;
//     mark;
     
//      constructor(name,age,mark){
//         this.name =name;
//         this.age =age;
//         this.mark =mark;  
//      }
//      greeting(){
//         console.log(`haii ${this.name}`);
//      }
// }
// let person1 =new person ("Tim",17,20);
// console.log("person1 : ",person1);
// person1.greeting();

// let person2 =new person ("Harry",18,20);
// console.log("person2 : ",person2);
// person2.greeting();

// let person3= new person("david",18,25);
// console.log("person3 : ",person3);
// person3.greeting();

// person.prototype.getAgeandMark =function(){
//     console.log(`hai ${this.name},your age is ${this.age} and your mark is ${this.mark}`);
// }
// person1.getAgeandMark();
// person2.getAgeandMark();
// person3.getAgeandMark();


// class Animal {
//     name;
//      constructor(name){
//         this.name =name;
//      }
//      printName(){
//         console.log(`Animal name is ${this.name}`);
//      }
// }
// let myAnimal = new Animal("monkey");
// console.log("my Animal : ",myAnimal);
// myAnimal.printName();

// let myAnimal1 = new Animal("Tiger");
// console.log("my Animal1 : ",myAnimal1);
// myAnimal1.printName();

// //inheritance

// class Dog extends Animal{
//     color;
//    constructor(name,color){
//     super(name)//calls parent constructor
//     this.color =color;
//    }
//    printcolor(){
//     console.log(` color of ${this.name} is ${this.color}`);
//    }
// }

// let myDog =new Dog("Arjun","black");
// console.log("my Dog : ",myDog);
// myDog.printName();
// myDog.printcolor();


// class vehicle {
//     name;
//     company;
    
//      constructor(name,company,){
//         this.name =name;
//         this.company =company;
        
//      }
//      printvehicle(){
//         console.log(`The vehicle is ${this.name} and by ${this.company}`);
//      }
// }
// let vehicle1= new vehicle("car","bmw",);
// console.log("vehicle1 : ",vehicle1);
// vehicle1.printvehicle();

// let vehicle2= new vehicle("Aeroplane","Qatar Airways",);
// console.log("vehicle2 : ",vehicle2);
// vehicle2.printvehicle();


// class bike extends vehicle{
//     color;
//     constructor(name,company,color){
//         super(name,company);
//         this.color=color;
//     }
//     printcolor(){
//         console.log(` color of ${this.name} is ${this.color}`);
//        }
// }
// let mybike =new bike("bike","kawasaki","black");
// console.log("mybike : ",mybike);
// mybike.printcolor();
// mybike.printvehicle();



// class MyButton {
//     button;
//     constructor(content){
//       this.button =document.createElement('button');
//       this.button.innerHTML =content;
//       document.body.appendChild(this.button);
//     }
//     set width(width){
//         this.button.style.width =width +"px";
//     }
//     set height(height){
//         this.button.style.height =height +"px";
//     }
//     get width(){
//         return this.button.style.width;
//     }
//     get height (){
//         return this.button.style.height;
//     }
//     onclick(fn){
//         this.button.onclick=fn;
//     }
// }
// let myButton =new MyButton('Click Here');
// console.log("MyButton : ",myButton);
// myButton.width=100;
// myButton.height=50;
// console.log("MyButtonWidith : ",myButton.width);
// console.log("MyButton.Height : ",myButton.height);
// myButton.onclick(function(){
//    console.log("Button Clicked....");
// });

//  class YellowButton extends MyButton{
//     onclick(fn){
//         this.button.onclick=function(){
//             fn();
//             this.button.style.background ="yellow";
//         }.bind(this);
//     }
//  }
//  let myYellowButton = new YellowButton("Yellow Button");
//  myYellowButton.width=150;
// myYellowButton.height=100;
// console.log("MyYellowButtonWidith : ",myYellowButton.width);
// console.log("MyYellowButton.Height : ",myYellowButton.height);
// myYellowButton.onclick(function(){
//     console.log("Button Clicked....");
//  });
// }
{
    //java script is synchronous single threded language =>it can handle only one operation at a time 

    console.log("first line");
    console.log("second line");
    // setTimeout(() => {
    //     console.log("from set time out");
    // },5000);//this is asynchronous funtion 

    // let datas=fetch('https://jsonplaceholder.typicode.com/users'); //asynchronous
    // console.log("datas : ",datas);//console is not synchronous
    console.log("third line");//this will be executed ahead of the timer function as it is asynchronous fntn and it will executed seperately
//web space engine
//javascript engine =>call back queue and microstact queue(higher priority)
//event loop => responsible for executing the code, collecting and processing events, and executing queued sub-tasks. (a loop that runs continuously and checks for tasks that are waiting to be executed.)
//call stact =>used by JavaScript to keep track of multiple function calls


// ajax and xhr request 

let xhr =new XMLHttpRequest();//xhr request can be used to request data from any server


let btn11=document.getElementById('btn11');
btn11.addEventListener('click',() =>{
    xhr.send();
});
//get, post,put,delete
xhr.open ("get",'https://jsonplaceholder.typicode.com/users');


console.log("xhr : ",xhr);

//onreadystatechange holds status of the request $$$ define function to be executed when ready state change
//readystate 0 => request not initialized
//readystate 1 =>server connection established
//readystate 2 =>request received
//readystate 3 =>processing request 
//readystate 4 => request finished and response is ready

xhr.onreadystatechange =function(){
    console.log("ready state : ",xhr.readyState);
    console.log("status : ",xhr.status);
let content=document.getElementById('content');
    if (xhr.readyState==4){
       if(xhr.status ==200){
           let response = xhr.response;
           console.log("response : ",response);
           console.log("type of response : ",typeof(response));

           let parsed_response =JSON.parse(response);
           console.log("parsed_response: ",parsed_response);
           console.log("type of parsed_response : ",typeof(parsed_response));

            datas ='';
            for(let i=0;i<parsed_response.length;i++){
                datas=datas +`
                <tr>
                <td>${parsed_response[i].id}</td>
                <td>${parsed_response[i].name}</td>
                <td>${parsed_response[i].username}</td>
                <td>${parsed_response[i].website}</td>
                <tr/>
                `
            }
            content.innerHTML=datas;
       }else{
        console.log("failed...");
       }
    }else{
        console.log("status not completed");;
    }
}
}}
