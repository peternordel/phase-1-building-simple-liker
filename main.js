// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll('.like-glyph');

for (const heart of hearts) {
  heart.addEventListener('click', (e) => {
    const element = e.target; //this is the span containing the heart that was clicked
    mimicServerCall()
    //When the "server" returns a success status:
    .then(() => {
      //if heart is empty
      if(element.className === 'like-glyph') {
        //Change the heart to a full heart
        element.innerText = FULL_HEART;
        //Add the .activated-heart class to make the heart appear red
        element.className = 'activated-heart'
      }
      //if heart is full
      else {
        //Change the heart to an empty heart
        element.innerText = EMPTY_HEART;
        //Change the span class back to like-glyph if heart is full when clicked
        element.className = 'like-glyph';
      }
    })
    .catch(() => {
      //Get the correct element
      const element = document.getElementById('modal');
      //Display the error modal by removing the .hidden class
      element.className = '';
      //Display the server error message in the modal
      alert("Server failure!");
      //Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
      setTimeout(() => element.className = 'hidden', 3000)
    })
  })
};


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
