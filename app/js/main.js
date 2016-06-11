'use strict';

var logininput = Array.prototype.slice.call(document.getElementsByClassName('login__formFieldInput'));
var container = document.getElementsByClassName('container')[0];
var loginSubmit = document.getElementsByClassName('login__formSubmit')[0];
var successmsg = document.getElementsByClassName('successmsg')[0];
var checkmark = document.getElementsByClassName('successmsg__checkmarkPath')[0];

function animation() {
  successmsg.classList.toggle('_is-up');
  checkmark.classList.toggle('_animation');
  setTimeout('successmsg.classList.remove("_is-up")', 2000);
  setTimeout('checkmark.classList.remove("_animation")', 2000);
}
container.addEventListener('click', function (e) {
  return e.stopPropagation();
});

logininput.forEach(function (item) {
  item.addEventListener('change', function () {
    if (item.value != '') {
      if (item.classList.contains('_notempty') === false) {
        item.classList.add('_notempty');
      }
    } else {
      item.className = item.className.replace(' _notempty', '');
    };
  });
});

var signupToggle = document.getElementsByClassName('_signup')[0];
var loginToggle = document.getElementsByClassName('_login')[0];
var signup = document.getElementsByClassName('signUp')[0];
var login = document.getElementsByClassName('login')[0];

signupToggle.addEventListener('click', function () {
  login.style.display = 'none';
  signup.style.display = 'block';
});

loginToggle.addEventListener('click', function () {
  signup.style.display = 'none';
  login.style.display = 'block';
});

document.getElementsByClassName("signUp__signbtn")[0].addEventListener("click", function (event) {
  event.preventDefault();
  animation();
});
document.getElementsByClassName("_fb")[0].addEventListener("click", function (event) {
  event.preventDefault();
});
document.getElementsByClassName("_google")[0].addEventListener("click", function (event) {
  event.preventDefault();
});

loginSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  animation();
});