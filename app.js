const express=require('express');
const app=express();
const dotenv =require('dotenv');
const path =require('path');
const fs=require('fs');
dotenv.config();


app.use(express.static(__dirname+"/client"));
app.use(express.json());

app.get('/test',(req,res)=>{
    res.status(200).send("success");
});

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

        fs.writeFileSync(filepath,json_data,(err)=>{
            if(err){
                res.status(400).send("failed");
            }else{[{"name":"john","email":"john@gmail.com","password":"john123"},{"name":"john123","email":"john@gmail.com","password":"john123"}]
                res.status(201).send("success");
            }
        });

    }else{

        let parsedFileContent=JSON.parse(fileContent);
        parsedFileContent.push(body);

        let json_data=JSON.stringify(parsedFileContent);

        fs.writeFileSync(filepath,json_data,(err)=>{
            if(err){
                res.status(400).send("failed");
            }else{
                res.status(201).send("success");
            }
        })
    }
})

app.get('/getData',  (req, res) => {

    const folderPath = './datas';
    const fileName = 'datas.json';
    const filePath = path.join(folderPath, fileName);

    if (!fs.existsSync(filePath)) {
        res.status(400).send('Data not found');
    } else {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const dataArr = JSON.parse(fileContent);

        res.status(200).send(dataArr);
    }
})












app.listen(process.env.PORT,()=>{
    console.log(`server running at http://localhost:${process.env.PORT}`);
});