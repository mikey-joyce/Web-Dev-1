/* References:
        1. User Authentication Lecture by: Trey Shaw 
*/

/* Start of code used from reference 1 */
/* 
    Also I would like to make a huge shoutout to Xin for helping me solve bugs here.
    
    NOTE: AJAX and JQuery are both used here
*/
$(function(){
    $('#logout').click(function(e){
        
        e.preventDefault();
        $.post("../HTML/process.php", {
            action: 'logout' 
        },function(data){
            if(data == 'Logged out'){
                window.location.href = '../HTML/account.html';
            }
        });
    });
});
/* End of code used from reference 1 */