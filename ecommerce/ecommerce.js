{
    let xhr =new XMLHttpRequest();

    xhr.open('get','https://fakestoreapi.com/products');
  console.log("xhr : ",xhr);
xhr.send();
xhr.onreadystatechange =function(){
    console.log("ready state : ",xhr.readyState);
    console.log("status : ",xhr.status);
    let product=document.getElementById('product');
    if (xhr.readyState==4){
        if(xhr.status ==200){
            let response = xhr.response;
            console.log("response : ",response);
            console.log("type of response : ",typeof(response));
 
            let parsed_response =JSON.parse(response);
            console.log("parsed_response: ",parsed_response);
            console.log("type of parsed_response : ",typeof(parsed_response));

            datas ='';
            // for(let i=0;i<parsed_response.length;i++){
            //     datas=datas +`
            //     <div>
            //     <div>${parsed_response.title}</div>
            //     </div>`
            // }
            // product.innerHTML=datas;
        }else{
            console.log("failed...");
           }
        }else{
            console.log("status not completed");;
        }
    }
}

 
 
