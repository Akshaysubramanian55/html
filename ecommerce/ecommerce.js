{
    let xhr =new XMLHttpRequest();
    
  


    xhr.open('get','https://fakestoreapi.com/products');
    xhr.send();
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
              <h3 class="tittle">${parsed_response[i].title } </h3>
              <img src="${parsed_response[i].image}" alt=""class="images" height=200px width=80% border=2px solid>
              <p class="category"${parsed_response[i].category}</p>
              <p class="price">${parsed_response[i].price}</p>
              <button class="cart">Add Cart</button>
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

 
 
