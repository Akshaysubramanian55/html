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





app.put('/editData', (req, res) => {
    const editId = req.params.id;
    const editData = req.body;
    
    const folderpath = './datas';
    const fileName = 'datas.json';
    const filePath = path.join(folderpath, fileName);

    if (!fs.existsSync(folderpath)) {
        fs.mkdirSync(folderpath, { recursive: true });
    }

    let fileContent = fs.readFileSync(filePath, 'utf-8');
    let dataArr = [];

    if (fileContent !== '') {
        dataArr = JSON.parse(fileContent);

        const existingDataIndex = dataArr.findIndex(item => item.id === editId);

        if (existingDataIndex !== -1) {
            // Replace existing data with new data
            dataArr[existingDataIndex] = { id: editId, ...editData };
            const updatedJsonData = JSON.stringify(dataArr);

            fs.writeFile(filePath, updatedJsonData, (err) => {
                if (err) {
                    res.status(400).send('failed to update');
                } else {
                    res.status(200).send('success');
                }
            });
        } else {
            res.status(404).send('data not found');
        }
    } else {
        res.status(404).send('file not found');
    }
});




app.delete('/deleteData',  (req, res) => {
    
    let data = req.body;
    console.log("body", data);

    const { id } = req.params;
    const folderPath = './datas';
    const fileName = 'datas.json';
    const filePath = path.join(folderPath, fileName);


    if (!fs.existsSync(filePath)) {
        res.status(400).send('Data not found');
    }
    let fileContent =fs.readFileSync(filePath,"utf-8");
    console.log("fileContent: ",fileContent);

      
  
     
      
        
      let dataArr = JSON.parse(fileContent);
      console.log("dataARr: ",dataArr);
  
      const dataIndex = dataArr.findIndex(item => item.id == id);
  
      console.log("dataIndex: ",dataIndex)
      if (dataIndex === -1) {
        res.status(404).send("Data not found");
      }else{
        // Delete the specific item at the found index
      dataArr.splice(dataIndex,1);
  
  
      // Write the updated data (without the deleted item) back to the file
       fs.writeFileSync(filePath, JSON.stringify(dataArr));
  
      res.status(200).send("success");
      }
  
      
      
  
     
  });
  










app.listen(process.env.PORT,()=>{
    console.log(`server running at http://localhost:${process.env.PORT}`);
});