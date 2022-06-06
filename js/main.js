// modal popups - ecoInfo

var modal = document.getElementById("ecoInfo");
var btn = document.getElementById("get_info");
var span = document.getElementsByClassName("close1")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// confirm password
const reg_form = document.getElementById("register_form");

function validatePassword(){
  var password = document.getElementById('newtrpassword')
  var confirm_password = document.getElementById('newtrpassword_repeat')
    if (password.value=="")
    {
        password.setCustomValidity("Passwords must not be empty");
        return false;
      } 
    else if (password.value != confirm_password.value) 
    {
        confirm_password.setCustomValidity("Пароли не совпадают");
        return false;
    } else {
        confirm_password.setCustomValidity('');
        return true;
    }
}

reg_form.elements['newtrpassword'].onchange = validatePassword;
reg_form.elements['newtrpassword_repeat'].onkeyup = validatePassword;

// post to /register request

reg_form.addEventListener('submit', async (e) => {
  if (validatePassword() === true){
    e.preventDefault();
    const data = new FormData(reg_form);
    const value = Object.fromEntries(data);
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(value), 
      redirect: 'http://localhost:5000/reg_thanks.html/'
    };
    fetch('http://localhost:8000/register/', 
      options)

    // console.log(options) // DELETE AFTER DEBUG!!!

}})

// post to /api-token-auth request

// log_form.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const data = new FormData(log_form);
//   const value = Object.fromEntries(data.entries());
//   const options = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(value)
//   };
//   fetch('http://localhost:8000/register/', options)
// })




// // swipe things
//   // import Swiper JS
//   import Swiper from 'swiper';
//   // import Swiper styles
//   import 'swiper/css';

