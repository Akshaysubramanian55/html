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
   
  const regexInp=/^[a-z] [a-z0-9_]*$/i;
  function checkResult(value){
    const result=regexInp.test(value);
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
}