// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// These are the input variables that selects the HTML elements of the input forms. 
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

// The querySelector() method selects the first element that matches a specified CSS selector(s).
let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

// USING OBJECTS SO THESE ARE COMMENTED OUT. NO NEED FOR THESE CODE.

// let images = ['https://i.scdn.co/image/ab67616d0000b27388e3cda6d29b2552d4d6bc43', 'https://i1.sndcdn.com/artworks-QUNlJPXC65rG-0-t500x500.jpg', 'https://images.genius.com/aa6fcc79f20a55c5a75fd81e3344e2ca.1000x1000x1.png']
// let songNames = ['Heather', "IT'S YOU", "Glue Song"]
// let artists = ['Conan Gray', 'MAX (feat. keshi)', 'Beabadoobee']
// let songLinks = ['https://www.youtube.com/watch?v=24u3NoPvgMw', 'https://www.youtube.com/watch?v=zWxuc8L0W_Y', 'https://www.youtube.com/watch?v=y1cBhJLNNXU']


//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.

let song1 = {
  imageUrl: 'https://i.scdn.co/image/ab67616d0000b27388e3cda6d29b2552d4d6bc43',
  songName: 'Heather',
  artist: 'Conan Gray',
  songLink: 'https://www.youtube.com/watch?v=24u3NoPvgMw'
};

let song2 = {
  imageUrl: 'https://i1.sndcdn.com/artworks-QUNlJPXC65rG-0-t500x500.jpg',
  songName: "IT'S YOU",
  artist: 'MAX (feat. keshi)',
  songLink: 'https://www.youtube.com/watch?v=zWxuc8L0W_Y'
};

let song3 = {
  imageUrl: 'https://images.genius.com/aa6fcc79f20a55c5a75fd81e3344e2ca.1000x1000x1.png',
  songName: 'Glue Song',
  artist: 'Beabadoobee',
  songLink: 'https://www.youtube.com/watch?v=y1cBhJLNNXU'
};

// task 14: create an array that stores all of the objects.
let songsArray = [song1, song2, song3];


//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.


function addSongInfo() {

  // This is used to empty out the display divs.
  emptyDisplay();

  // These are the variables that grabs the input values from the input forms. 
  let imageInput = document.querySelector(".image").value;
  let songNameInput = document.querySelector(".song-name").value;
  let artistInput = document.querySelector(".artist").value;
  let songLinkInput = document.querySelector(".song-link").value;

  // This is the object variable that stores the input values into a new object each time the add button is clicked. 
  let newSong = {
    imageUrl: imageInput,
    songName: songNameInput,
    artist: artistInput,
    songLink: songLinkInput
  };

  // The .push method is used to push the new object we created into our songsArray. 
  songsArray.push(newSong);
}

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.

  // These are going to be my variables to select my HTML input elements.
  // let imageInput = document.querySelector(".image");
  // let songNameInput = document.querySelector(".song-name");
  // let artistInput = document.querySelector(".artist");
  // let songLinkInput = document.querySelector(".song-link");

  // // Retrieving input values
  // let imageUrl = imageInput.value; 
  // let songName = songNameInput.value;
  // let artist = artistInput.value; 
  // let songLink = songLinkInput.value; 

  // // These are to create my new elements. 
  // let imageDiv = document.createElement("div");
  // let songDiv = document.createElement("div");
  // let artistDiv = document.createElement("div");
  // let linkDiv = document.createElement("div");

  // // Setting inner HTML content for the created elements
  // imageDiv.innerHTML = `<img src="${imageUrl}" alt="Song Image">`;
  // songDiv.textContent = songName;
  // artistDiv.textContent = artist;
  // linkDiv.innerHTML = `<a href="${songLink}" target="_blank">Listen</a>`;

  
// task 10: use `.push()` to add each input value to the correct array.
  
//   images.push(imageUrl);
//   songNames.push(songName);
//   artists.push(artist);
//   songLinks.push(songLink);
// }



/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  
  // images.forEach(function(imgs) {
  //   // First, we create a new HTML element from our          javascript file by making a variable and use          the createElement method. 
  //   // Then, we use a method called appendChild to           add the new element to the display div.
  //   let img = document.createElement("img");
  //   img.src = imgs;
  //   displayImage.appendChild(img);
  // });

  // songNames.forEach(function(song) {
  //   // Repeat for song names.
  //   let songs = document.createElement("p");
  //   songs.innerHTML = song;
  //   displaySong.appendChild(songs);
  // });;

  // artists.forEach(function(artist) {
  //   // Repeat for artists. 
  //   let arts = document.createElement("p"); 
  //   arts.innerHTML = artist;
  //   displayArtist.appendChild(arts);
  // });

  // songLinks.forEach(function(link) {
  //   // Repeat for song links.
  //   let links = document.createElement("a");
  //   links.innerHTML = `<a href="${link}">${link}</a>`;
  //   displayLink.appendChild(links);
  // });

  // This is my new forEach function for objects to add prestored objects into the display divs.
  songsArray.forEach(function(song) {

    // First, we create a new HTML element.
    // Then, I grab the imageUrl key value from the object and set it to the src attribute of the new image element.
    // Lastly, I append the new image element to the displayImage div. 
    let img = document.createElement("img");
    img.src = song.imageUrl;
    displayImage.appendChild(img);

    let songElement = document.createElement("p");
    songElement.textContent = song.songName;
    displaySong.appendChild(songElement);

    let artistElement = document.createElement("p");
    artistElement.textContent = song.artist;
    displayArtist.appendChild(artistElement);

    let linkElement = document.createElement("a");
    // the methods here are to edit the new a (link) element with its needed properties to function. 
    linkElement.href = song.songLink;
    linkElement.target = "_blank";
    linkElement.textContent = "Listen";
    displayLink.appendChild(linkElement);
  });
  
}


// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();



// This is my deleteButton selection variable. 
let deleteButton = document.querySelector(".delete");

// This is my eventListener to make the button work. The function deleteLastSong will be called when the button is clicked. That is where the code to delete the last song will be. 
deleteButton.addEventListener("click", deleteLastSong);

// Function to delete the last song from the playlist.
function deleteLastSong() {

  // This is used to empty out the display divs each time the button is clicked so that my playlist doesn't repeat old songs to add. We don't want to add 2+ songs at once. 
  emptyDisplay();
  
  if (songsArray.length > 0) {
    songsArray.pop();
    displaySongInfo();
  } else {
    alert("Playlist is empty. No songs to delete.");
  }
}