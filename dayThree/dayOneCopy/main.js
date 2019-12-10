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

window.onload = function (){
    var imgOne = document.getElementById("picture");
    var imgTwo = document.getElementById("imageOne");
    var imgOneSrc = imgOne.getAttribute("src");
    
    imgOne.onclick = function (){
        var imageSrc = imgOne.getAttribute("src");

        if (imageSrc === "myPic.jpg") {
            imgOne.setAttribute("src", "oldForest.jpg");
        } else {
            imgOne.setAttribute("src", "myPic.jpg");
        }
    }

    // imgOne.onclick = function(){
    //     if (imgOneSrc === "myPic.jpg") {
    //         imgTwo.setAttribute("src", "myPicOne.jpg");
    //     } else {
    //         imgTwo.setAttribute("src", "oldForestOne.jpg");
    //     }
    // }
}


var myCar = {
    make: "mercedes",
    model: "who knows",
    year: 2019,
    bio: function(){
        console.log(this.make + " " + this.model + " " + this.year);
    }
}

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    this.bio = function(){
        console.log(this.make + " " + this.model + " " + this.year);
    }
}

var newCar = new Car("test", "test1", "test2");

var janeCar = new Car("honda", "idl", 1555);

function Person(name, favFood, favColor){
    this.name = name;
    this.favFood = favFood;
    this.favColor = favColor;
}

var franklin = new Person("Franklin", "rice", "red");



var library = [
    {
        title: "the road ahead",
        author: "bill gates",
        readingStatus: true
    },
    {
        title:  "steve jobs",
        author: "apple and fruits",
        readingStatus: true
    },
    {
        title: "mockingjay",
        author: "susan collins",
        readingStatus: false
    }];

var libraryLength = library.length;

// for (i = 0; i <= libraryLength; i ++) {
//     console.log(library[i]);
// }


function readingStatus() {
    for (var i = 0; i < libraryLength; i++) {
        var book = library[i].title + " " + "by" + " " + library[i].author;
        if (library[i].readingStatus === true) {
            console.log(book + " " + "was read")
        } else {
            console.log(book + " " + "was not read")
        }
    }
};

