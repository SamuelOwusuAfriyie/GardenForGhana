

let button =  document.querySelector(".find");
let button2 =  document.querySelector(".find2");
let paragraph =  document.querySelector("#drop");
let paragraphClass =  document.querySelector(".drop");
let paragraph2 =  document.querySelector("#drop2");

 paragraph.style.display='none'
button.addEventListener('click',()=>{
paragraph.style.height = 'inherit';
 button.style.display = 'none'
paragraphClass.style.height = 'inherit'
paragraph.style.display = 'block'
})

paragraph2.style.display='none'
button2.addEventListener('click',()=>{
paragraph2.style.height = 'inherit';
button2.style.display = 'none'
paragraph2.style.display = 'block'
})

$(document).ready(function() {
$('#contact-form').submit(function(e) {
var name    = document.getElementById('inputName')
var email   = document.getElementById('inputEmail')
var message = document.getElementById('inputMessage');

if (!name.value || !email.value || !message.value) {
alertify.error("Please check your entries");
return false;
}
});
});
