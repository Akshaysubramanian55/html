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

    let movieContainer = document.getElementById('movie_container');
    let content = '';

    for (let i = 0; i < parsedMovieData.length; i++) {
        content += `
            <div class="card">
                
                <div class="card_body">
                    <h5 class="card-title">${parsedMovieData[i].title}</h5>
                    <h6 class="card-genre">${parsedMovieData[i].genre}</h6>
                    <h6 class="card-director">${parsedMovieData[i].director}</h6>
                    <button onclick="handleEdit('${parsedMovieData[i]._id}')">Edit</button>
                    <button onclick="handleSave('${parsedMovieData[i]._id}')">Save</button>
                    <button onclick="handleDelete('${parsedMovieData[i]._id}')">Delete</button>
                </div>
            </div>
        `;
    }

    movieContainer.innerHTML = content;
}

// Call the function to fetch and display movie data
getMovieData();
