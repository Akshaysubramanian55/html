async function submitform() {
   let title = document.getElementById('title').value;
   console.log("name : ", title);

   let genre = document.getElementById('genre').value;
   console.log("email : ", genre);

   let director = document.getElementById('director').value;
   console.log("password : ", director);

   let imageInput = document.getElementById('image');

   if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();

      reader.onload = async function (e) {
         const base64Image = e.target.result;
         console.log("base64Image: ", base64Image);

         let data = {
            title,
            genre,
            director,
            base64Image,
         }

         let json_data = JSON.stringify(data);
         try {
            let response = await fetch('/submit', {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: json_data,
            });

            let parsed_response = await response.text();

            if (parsed_response === "success") {
               alert("Submitted successfully");
            } else {
               alert("Submission failed");
            }
         } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while submitting the form");
         }
      }

      reader.readAsDataURL(imageInput.files[0]);
   }
}

async function getMovieData() {



   let movieData = await fetch('/getMovies');
   let parsedMovieData = await movieData.json();


   let movieContainer = document.getElementById('card_body');
   let content = '';

   console.log("parseddata : ",parsedMovieData);

   for (let i = 0; i < parsedMovieData.length; i++) {
      content += `
         
      
            
      <div class="card_body">
      <img src="${parsedMovieData[i].image}" alt="User Image" style="max-width: 100px; max-height: 100px;">
      <h5 class="card-title" name="title" id="title-${parsedMovieData[i]._id}">${parsedMovieData[i].title}</h5>
      <h6 class="card-genre" id="genre-${parsedMovieData[i]._id}">${parsedMovieData[i].genre}</h6>
      <h6 class="card-director" id="director-${parsedMovieData[i]._id}">${parsedMovieData[i].director}</h6>
      <a href="details.html" onclick="detailsmovie('${parsedMovieData[i]._id}')">Details</a>
       </div>
  
            
        `;
   }

   movieContainer.innerHTML = content;
}

// Call the function to fetch and display movie data
getMovieData();


async function detailsmovie(id) {

   let _id = id;
   console.log("_id : ", _id)

   let title = document.getElementById(`title-${id}`).value;
   console.log("name : ", title);


}
