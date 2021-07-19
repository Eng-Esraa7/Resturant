var all = document.querySelectorAll('.left');
all.forEach(li=>{
    li.addEventListener("click", (e)=>{
        var num = prompt("How many sandwiches do you need?");
        if (num>=1) {
    e.target.innerHTML = "Successfully ordered " + num + " sandwiches"; 
        }
        else{
            alert("Please Enter A valid number");
        }
    });
});

