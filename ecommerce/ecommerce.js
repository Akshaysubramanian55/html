{
    let xhr =new XMLHttpRequest();
    let btn11=document.getElementById('btn11');
btn11.addEventListener('click',() =>{
    xhr.send();
});

    xhr.open('get','https://fakestoreapi.com/products');
  console.log("xhr : ",xhr);

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
            //    datas=datas +`
            // //     <tr>
            // //     <td>${parsed_response[i].title}</td>
            // //     <td>${parsed_response[i].description}</td>
            // //     <td>${parsed_response[i].price}</td>
            // //     <td>${parsed_response[i].category}</td>
            // //     <td><img src="${parsed_response[i].image}" alt=""></td>
            //     <tr/>
            //     `
              datas=datas+`
              <div>
              <div >${parsed_response[i].title }</div>
              <div>${parsed_response[i].description}</div>
              <div>${parsed_response[i].price}</div>
              <div>${parsed_response[i].category}</div>
              <div><img src="${parsed_response[i].image}" alt="" height=200px width=20% border=2px solid></div>
              </div>
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
   
}

 
 
