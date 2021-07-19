//hide placeholder
var hideplaceholder = document.querySelectorAll("form input");
    hideplaceholder.forEach(place=>
    {
        var hold = place.getAttribute("placeholder")
        place.onfocus = function()
        {
            place.setAttribute("placeholder", " ");
        }
        place.onblur = function()
        {
            place.setAttribute("placeholder", hold);
        }
    } );
    
    
    //pass==confirm
var password, confirm;
function validation()
{
password = document.inputform.pass.value;
confirm = document.inputform.confpass.value;
if(password !== confirm)
{
    alert("Passward don't same");   
    document.querySelector("form").setAttribute("action", " ");
}
}

//sign as an admin

var user_admin = 'admin',
    pass_admin = 'admin123';

    document.querySelector("#login").addEventListener("submit", function(e){
        e.preventDefault();
        var useradmin = document.adminform.useradmin.value,
            passadmin = document.adminform.passadmin.value;
        if(user_admin === user_admin && pass_admin===passadmin){
            location.assign("../admin/index.html");
        }
            else{
            location.assign("..//index.html");
            }
    });