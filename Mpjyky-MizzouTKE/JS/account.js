/* References:
        1. https://www.youtube.com/watch?v=flItyHiDm7E&ab_channel=codefoxx
        2. User Authentication Lecture by: Trey Shaw 
*/

$("#nav_logo").click(function() {
    window.location.href = '../HTML/index.html'
    });

/* Start of code from reference 1 */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navLinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".linkHov").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove(".active");
    navMenu.classList.remove(".active");
}))
/* End of code used from reference 1 */

/* Start of code used from reference 2 */
/* 
    Also I would like to make a huge shoutout to Xin for helping me solve bugs here.
    
    NOTE: AJAX and JQuery are both used here
*/
$(function(){
    $('#login-submit').click(function(e){
        e.preventDefault();
        $.post("../HTML/process.php", {
            action: 'login',
            username: $('#username').val(),
            password: $('#password').val()
        },function(data){
            if(data == 'Login: Success'){
                window.location.href = '../HTML/logged_in.html';
            }
            else{
                $("#login-form-header").html(data);
            }
        })
    });
});
/* End of code used from reference 2 */