const para = document.getElementById("player"); 
// above is a global variable, because it's outside any function 

para.addEventListener('click', updateName);
// event handler function 
function updateName() {
    // name is a local variable and can only be accessed through this function
    let name = prompt('Enter New Name');
    para.textContent = " Player 1: " + name;
    if(name == ""){
        para.textContent = "Player 1: No Name Entered";
    }
}

function validate() {
    // email and password are local variables
    // call from html function 
    var email = document.getElementById("emailinput").value;
    var password = document.getElementById("passwordinput").value;
    if(email == "" || password == ""){
        return;
    }
    if(password === "12345"){
        alert("email:" + email + " " + "password:" + password);
    }else{
        alert("Wrong password, try again");
    }
}

