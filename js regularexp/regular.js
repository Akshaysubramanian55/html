{
    const str1="This cat is white";
    const str2="rat eats fish";
    const str3="is it ok fishee";
    const str4= `
    Hello
    good meat
    is always good 
    haii
    `;
   
    

    const regexp1 =/a/;
    const result1= regexp1.test(str1);
    console.log("result 1 : ",result1);//true => check if a is in the string
    const regexp2 =/A/i;
    const result2=regexp2.test(str1);
    console.log("result2 : ",result2);//true here a IS CASE INSENSITIVE

    const regexp3 =/abc/;
    const result3=regexp3.test(str1);
    console.log("result3 : ",result3);//FALSE 

    //[]-response range

    const regexp4=/[crb]a/;
    const result4=regexp4.test(str1);
    console.log("result 4 : ",result4);//true =>CHECK IS C OR R OR B IS PRESENT BEFORE A

    const regexp5=/[a-z]a/i;
    const result5=regexp5.test(str1);
    console.log("result 5 : ",result5);//true=> IT IS CASE INSENSITIVE  and check is a-z is present before a

    const regexp6=/[a-z0-9]a/i;
    const result6=regexp6.test(str1);
    console.log("result 6 : ",result6);//true => case INSENSITIVE and also check if a-z or 0-9 is present before a

    const regexp7=/^rat/i;
    const result7=regexp7.test(str2);
    console.log("result7 : ",result7);//true checks if the string starts with rat

    const regexp8=/fish$/i;
    const result8=regexp8.test(str2);
    console.log("result8 : ",result8);//true checks if str2 ends with fish

    const regexp9=/^good/im;//m-flag for multiline matching
    const result9=regexp9.test(str4);
    console.log("result9 : ",result9);  //check if string 4 starts with good

    const regexp10=/good$/im;//m-flag for multiline matching
    const result10=regexp10.test(str4);
    console.log("result10 : ",result10);

    const regexp11=/fishes?/im; //words before ? is optional for matching
    const result11=regexp11.test(str3);
    console.log("result11 : ",result11);//true

    const regexp12=/fish(es)?/im;//(es) is a group
    const result12=regexp12.test(str3);
    console.log("result : ",result12);//true

    const regexp13=/fishes*$/i;//letter before *can occur multiple times
    const result13=regexp13.test(str3);
    console.log("result : ",result13);//false

    const regexp14=/fishe+$/i;//letter before+ can occur multiple times but one occurence is mandatory
    const result14=regexp14.test(str3);
    console.log("result 14 : ",result14);//true

    const regexp15=/fishe.$/i;//any character can occur after fishe a character in place of '.' is mandatory
    const result15=regexp15.test(str3);
    console.log("result 15 : ",result15);//true

    const regexp16=/fishe.*$/i;
    const result16=regexp16.test(str3);
    console.log("result 16 : ",result16);//true


}

{
    //input validation
    //a-z ,A_Z,0-9
    //_
    //starts with chara
   
  // const regexInp=/^[a-z][a-z0-9_]*$/i;
  // function checkResult(value){
  //   const result=regexInp.test(value);
  //   if(result){
  //       return '';
  //   }else{
  //       return 'invalid string';
  //   }
  // }
  // const value="_J_9ashdjd";
  // let validation_result =checkResult(value);
  // console.log("validation_result : ",validation_result);

  // function onChange(arg){
  //   let validation_result=checkResult(arg.value);
  //   let label =document.getElementById('error');
  //   if(validation_result){
  //       label.innerHTML=validation_result;
  //   }else{
  //       label.innerHTML=validation_result;
  //   }
  // }
}

const str5="Hello";

const regexp17=/[kjm]/i;//if there is k,j or m in the string it will be true 
const result17=regexp17.test(str5);
console.log("Result17 : ",result17);//false

const regexp18=/[^kjm]/i;// of no k,j or m it will be true
const result18=regexp18.test(str5);
console.log("Result18 : ",result18);//false

const regexp19=/[H+]/;//atleast one H is required
const result19=regexp19.test(str5);
console.log("Result : ",result19);//true

const regexp20=/o$/i;//atleast one o at the end
const result20=regexp20.test(str5);
console.log("Result : ",result20);//true

const regexp21=/o?$/i;// o at the end is optional
const result21=regexp21.test(str5);
console.log("Result21 : ",result21);//true

const regexp22=/o+$/i;// atleast one o is required at the string ending
const result22=regexp22.test(str5);
console.log("Result21 : ",result22);//true

//{}=> indicates n.o of characters,a{2} means "aa"  i.e 2 a is required

const regexp23=/L{2}o$/i;//exactly 2 l is required
const result23=regexp23.test(str5);
console.log("Result23 : ",result23);//true


const regexp24=/L{2,4}o$/i;// o should be after 2-4 l's
const result24=regexp24.test(str5);
console.log("Result24 : ",result24);//true

const regexp25=/HEL{2,4}o$/i;//o should be exactly after 2-4 l's 
const result25=regexp25.test(str5);
console.log("Result25 : ",result25);//true

const regexp26=/HEL{2,}o$/i;//2 or more l is required
const result26=regexp26.test(str5);
console.log("Result26 : ",result26);//true



// \ =>indicates excape character, used for matching any character which has special meaning

const regexp27=/\d/i;//if there is any digits it will be true or false
const result27=regexp27.test(str5);
console.log("Result27 : ",result27);//false

const regexp28=/\D/i;//if there is any non-digits it will be true or false
const result28=regexp28.test(str5);
console.log("Result28 : ",result28);//true

//suppose we want to match '.' in a string but it has special meaning so it will not work as expected it may match everything

const regexp29=/./i;// if there is a '.' it will match
const result29=regexp29.test(str5);
console.log("Result29 : ",result29);//true

//so we can write it as

const regexp30=/\./i;// if there is '.' in the string it will match else false
const result30=regexp30.test(str5);
console.log("Result30 : ",result30);//false

//so \(backslash) is used to escape special character

//date validation

//1

// | => indicate or case 1|2 induicates either 1 or 2 can occur

// const getexpfordate=/^\d{1,2}-\d{1,2}-\d{4}$/;// string should start with 1or 2 digits then '-' then 1 or 2 digits and end with 4 digits.

// //2

// const getexpfordate1=/^([012]?\d|3[01])-([0]\d|[1][012])-(\d{4})$/i;//in the first group if the first digit is 0,1,2 then the second digit can be 0-9 or if firt digit is 3 then second must be 0 or 1
// //in the second group if the first digit is 0 then the second is either 1o or 2.... if first digit is 1 then second chara is 0,1,2 
// // third group must have four digits


// function checkResult(value){
//   const result=getexpfordate1.test(value);
//   if(result){
//       return '';
//   }else{
//       return 'invalid string';
//   }
// }
// const value="_J_9ashdjd";
// let validation_result =checkResult(value);
// console.log("validation_result : ",validation_result);

// function onChange(arg){
//   let validation_result=checkResult(arg.value);
//   let label =document.getElementById('error');
//   if(validation_result){
//       label.innerHTML=validation_result;
//   }else{
//       label.innerHTML=validation_result;
//   }
// }

//e-mail validation
 
const getexpforemail=/^[a-z0-9_-]*@([a-z0-9]+)*(\.[a-z]{2,3})$/i;
function checkResult(value){
  const result=getexpforemail.test(value);
  if(result){
      return '';
  }else{
      return 'invalid string';
  }
}
const value="_J_9ashdjd";
let validation_result =checkResult(value);
console.log("validation_result : ",validation_result);

function onChange(arg){
  let validation_result=checkResult(arg.value);
  let label =document.getElementById('error');
  if(validation_result){
      label.innerHTML=validation_result;
  }else{
      label.innerHTML=validation_result;
  }
}
//^ and & can be used only at the start and end of the string inbetwwen the strings it cannot be used so we use lookaheads


//(?=)=> positive look ahead A(?=)B matches A only if A is followed by B
//(?!)=> negative lookahead A(?!)B matches A only if A is not followed by B
//(?<=)=>positive lookbehind (?<=B)A matches A only if A is preceeded by B
//(?<!)=>  Negative lookbehind (?<!B)A matches A only if A is not preceeded by B

{
  let datestring='19-12-2023';
  let regex=/-\d+-/;
  const result=datestring.match(regex);
  console.log("result : ",result);

  // inorder to match 12 exactly use lookaheads

  let regex1=/(?<=-)\d+(?=-)/;
  const result1=datestring.match(regex1);
  console.log("result1 : ",result1);


  //negative lookahead and negative lookbehind
  let phone="(91)1234567890";

  //match numbers outside of (91)

  const phoneregex=/(?<!\()\d+(?!\))/;
  const phoneresult=phone.match(phoneregex);
console.log("result phone : ",phoneresult);
}

function finduser(userid){
  let userinfo=[
    {
      id:1,
      name:"john",
      age:30,
    },
    {
      id:2,
      name:"jae",
      age:26,
    },
  ];
  let user=userinfo.find((element)=> element.id==userid);
  return user;
}
let user=finduser(1);
console.log("User : ",user);




function finduser1(userid){
  let userinfo=[
    {
      id:1,
      name:"john",
      age:30,
    },
    {
      id:2,
      name:"jae",
      age:26,
    },
  ];
  

//invoking an asynchronous operation

setTimeout(()=>{
  let user=userinfo.find((element)=> element.id==userid);
  return user;
},500);
}
let user1=finduser1(1);
console.log("User1 : ",user1);

//using promise

function finduser2(userid){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let userinfo=[
        {
          id:1,
          name:"john",
          age:30,
        },
        {
          id:2,
          name:"jae",
          age:26,
        },
      ];
      let user=userinfo.find((element)=> element.id==userid);
      if (user){
        resolve(user);
      }else{
        reject("user not found");
      }
    
  },3000);
});
}
// finduser2(2)
// .then((user)=>{
//   console.log("\n\n\n")
//   console.log("user : ",user);
//   console.log(user.name);
// })
// .catch((erroe)=>{
//   console.log("error",error);
// })
// .finally(()=>{
//   console.log("experiment completed");
// })

async function getdata(){


  try {
    let userdata=await finduser2(1);
  console.log("userdata : ",userdata);
  } catch (error) {
    console.log("error : ",error);
  }finally{
    console.log("completed");
  }
  
}
getdata();