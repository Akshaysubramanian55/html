async function submitform(){
    let title=document.getElementById('title').value;
    console.log("name : ",title);
 
    let genre=document.getElementById('genre').value;
    console.log("email : ",genre);
 
    let director=document.getElementById('director').value;
    console.log("password : ",director);
 
    let data={
       title,
       genre,
       director,
    }
    let json_data=JSON.stringify(data);
    let response= await fetch('/submit',{
      "method":"POST",
      "headers":{
       "Content-Type":"application/json",
      },
      "body":json_data,
 
    });
 
    let parsed_response = await response.text();
 
    if (parsed_response==="success"){
       alert("submitted successfully");
    }else{
       alert("submition failed");
    }
 }

async function getMovieData() {

   
    // Assuming the server endpoint for movie data is http://localhost:3000/getMovies
    let movieData = await fetch('/getMovies');
    let parsedMovieData = await movieData.json();

    let movieContainer = document.getElementById('card_body');
    let content = '';

    for (let i = 0; i < parsedMovieData.length; i++) {
        content += `
            
            
                <div class="card_body">
                   <img src="../images/ozler.jpg">
                    <h5 class="card-title">${parsedMovieData[i].title}</h5>
                    <h6 class="card-genre">${parsedMovieData[i].genre}</h6>
                    <h6 class="card-director">${parsedMovieData[i].director}</h6>
                   <a href="details.html " onclick="deatailsmovie('${parsedMovieData[i]._id}')">Details</a>
                </div>
            
        `;
    }

    movieContainer.innerHTML = content;
}

// Call the function to fetch and display movie data
getMovieData();


async function deatailsmovie(id){
   let _id=id;
   console.log("id : ",_id);

   // let movieData = await fetch('/getMovies');
   //  let parsedMovieData = await movieData.json();

//     let movieContar = document.getElementById('detailsbody');
//     let content = '';

//     for (let i = 0; i < parsedMovieData.length; i++) {
//       content += `
            
            
//       <div class="deatil_body" onclick="showMovieDetails(${parsedMovieData[i].id}")>
//          <img src="../images/ozler.jpg">
//           <h5 class="card-title">${parsedMovieData[i].title}</h5>
//           <h6 class="card-genre">${parsedMovieData[i].genre}</h6>
//           <h6 class="card-director">${parsedMovieData[i].director}</h6>
//          <a href="details.html">Details</a>
//       </div>
  
// `;
//     }
//     movieContar.innerHTML = content;
// if(parsedMovieData.id===_id){
  
// }
}
