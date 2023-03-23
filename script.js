
var cityname = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"];

//Login Page
document.getElementById("form").onsubmit = function login() {

    event.preventDefault();
    var firstvalue = document.getElementById("text1").value;
    var secondvalue = document.getElementById("text2").value;
    var thirdvalue = document.getElementById("text3").value;

           sessionStorage.setItem("firstvalue",firstvalue);
           let name= sessionStorage.getItem(firstvalue);

    if (secondvalue === "admin@user.com" && thirdvalue === "123456") {
        alert("Login successful!");
        window.location.href = "homepage.html";
        sessionStorage.setItem("firstvalue",firstvalue);
        let name= sessionStorage.getItem(firstvalue);
        document.getElementById("head").innerText=name;

    } else {
        alert("Invalid email or password.");
    }
}

//Add your City

function show() {
    for (let i = 0; i < cityname.length; i++) {
        let count = i + 1;
        document.getElementById('box').innerHTML += count + ') ' + cityname[i] + '<br>'

    }
}


function add() {
    let City = prompt("Enter city name");
    let newCity = City.toLowerCase();
     
       
       if (!newCity || newCity.length < 3) {
        alert("Please enter a valid city")
        return
    } else {
        cityname.push(newCity);
        document.getElementById('box').innerHTML =  newCity + " is added into the list "
    }

}










