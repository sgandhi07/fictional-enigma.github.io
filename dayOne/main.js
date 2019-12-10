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
    debugger
}

window.onload = function (){

    
    imgOne.onclick = function (){
        var imgOne = document.getElementById("picture");
        var imgTwo = document.getElementById("imageOne");
        var imgOneSrc = imgOne.getAttribute("src");
        var imgTwoSrc = imgTwo.getAttribute("src";)

        if (imageSrc === "myPic.jpg") {
            imgOne.setAttribute("src", "oldForest.jpg"),
            imgSrc;
        } else {
            imgOne.setAttribute("src", "myPic.jpg");
        }
    }       
};

var imgOne = document.getElementById("picture");

imgOne.onclick = function changePicture(){
    var imgOneSrc = imgOne.getAttribute("src");
    var imgTwoSrc = imgTwo.getAttribute("src");

    if (imgOneSrc === "myPic.jpg") {
        imgTwoSrc.setAttribute("src", "myPicOne.jpg");
    } else {
        imgTwoSrc.setAttribute("src", "oldForestOne.jpg");
    }d

    console.log(imgOneSrc);
    console.log(imgTwoSrc);
};

