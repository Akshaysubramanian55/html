const express=require('express');
const app=express();
const dotenv =require('dotenv');
const path =require('path');
const fs=require('fs');
dotenv.config();


app.use(express.static(__dirname+"/client"));
app.use(express.json());

app.post('/submit',(req,res)=>{
    const body=req.body;

    const folderpath ='./datas';
    const fileName='datas.json';
    const filepath=path.join(folderpath,fileName);

    if(!fs.existsSync(folderpath)){
        fs.mkdirSync(folderpath,{recursive:true});
    }
    let fileContent =fs.readFileSync(filepath,"utf-8");
    console.log("fileContent: ",fileContent);

    let dataArr=[];

    if(fileContent===""){
        dataArr.push(body);
        let json_data=JSON.stringify(dataArr);

        fs.writeFile(filepath,json_data,(err)=>{
            if(err){
                res.status(400).send("failed");
            }else{
                res.status(201).send("success");
            }
        });

    }else{

        let parsedFileContent=JSON.parse(fileContent);
        parsedFileContent.push(body);

        let json_data=JSON.stringify(parsedFileContent);

        fs.writeFile(filepath,json_data,(err)=>{
            if(err){
                res.status(400).send("failed");
            }else{
                res.status(201).send("success");
            }
        })
    }
})