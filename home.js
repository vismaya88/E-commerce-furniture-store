// navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 180){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg');
    }
})

// image collage

const collageImages = [...document.querySelectorAll('.collage-img')]

collageImages.map((item, i) => {
    item.addEventListener('mouseover', () => {
        collageImages.map((image, index) => {
            if(index != i){
                image.style.filter = `blur(10px)`;
                item.style.zIndex = 2;
            }
        })
    })

    item.addEventListener('mouseleave', () => {
        collageImages.map((image, index) => {
            image.style = null;
        })
    })
})
let ratingStarInput = [...document.querySelectorAll('.rating-star')];

ratingStarInput.map((star, index) => {
    star.addEventListener('click', () => {
        for(let i = 0; i < 5; i++){
            if(i <= index){
                ratingStarInput[i].src = `img/fill star.png`;
            } else{
                ratingStarInput[i].src = `img/no fill star.png`;
            }
        }
    })
})
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}
myInput.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
var psw = document.getElementById("psw")
  , cpsw = document.getElementById("cpsw");

function validatePassword(){
  if(psw.value != cpsw.value) {
    cpsw.setCustomValidity("Passwords Don't Match");
  } else {
    cpsw.setCustomValidity('');
  }
}

psw.onchange = validatePassword;
cpsw.onkeyup = validatePassword;




// Get form's DOM object
var f = document.querySelector('#signup');
f.addEventListener('submit', (e) => {
  // Stop submitting form by itself
  e.preventDefault();

  // Try sign-in with AJAX
  fetch('/signin', {
    method: 'POST',
    body: new FormData(e.target),
    credentials: 'include',
  })
    .then((res) => {
      if (res.status == 200) {
        return Promise.resolve();
      } else {
        return Promise.reject('Sign-in failed');
      }
    })
    .then((profile) => {
      // Instantiate PasswordCredential with the form
      if (window.PasswordCredential) {
        var c = new PasswordCredential(e.target);
        return navigator.credentials.store(c);
      } else {
        return Promise.resolve(profile);
      }
    })
    .then((profile) => {
      // Successful sign-in
      if (profile) {
        updateUI(profile);
      }
    })
    .catch((error) => {
      // Sign-in failed
      showError('Sign-in Failed');
    });
});
function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("review")) {
    image.src = "no fill star.png";
  } else {
    image.src = "fill star.png";
  }
}


