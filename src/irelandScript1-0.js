var username;

document.getElementById("main").onclick=function(){
document.getElementById("main").innerHTML = "Click me to increment";
username = document.getElementById("username").value;
document.getElementById("username").disabled = true;
var xmlhttp;
if(window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.readyState ==4 && xmlhttp.status == 200)
		{
			console.log("we are init");
			document.getElementById("response").innerHTML = 
			xmlhttp.responseText;
			console.log(xmlhttp.responseText);
		}

	}
	console.log(username);
	xmlhttp.open("GET", "IrelandInit.php?q="+username, true);
	xmlhttp.send();

}


/** Register User Function
* Takes the values entered into the registerUsername and registerDisplayName boxes
* and sends them in a | deliminated variable to registerUser.php
*
**/
function registerUser(){
    var registerUserName = document.getElementById("registerUsername").value;
    var registerDisplayName = document.getElementById("registerDisplayName").value;
    var xmlhttp;
    if(window.XMLHttpRequest)
        {
            xmlhttp = new XMLHttpRequest();
        }
        else
        {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function()
        {
            if(xmlhttp.readyState ==4 && xmlhttp.status == 200)
            {
                console.log("we are init");
                document.getElementById("innercover").innerHTML = 
                xmlhttp.responseText;
                console.log(xmlhttp.responseText);
            }

        }
        console.log("Username: " + registerUserName + " Display Name: " + registerDisplayName);
        xmlhttp.open("GET", "registerUser.php?q="+registerUserName+"|"+registerDisplayName, true);
        xmlhttp.send();
}

//Form Toggler
function toggler(divId) {
    $("#" + divId).toggleClass('hidden');
}

//Load Different Pages
function loadPage(page){
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("innercover").innerHTML = xmlhttp.responseText;
        }
    };
    if(page == "Home"){
        xmlhttp.open("GET","home.php",true);
        xmlhttp.send();
    }else if(page == "Stats"){
        xmlhttp.open("GET","stats.php",true);
        xmlhttp.send();
    }else if(page == "Leaderboard"){
        xmlhttp.open("GET","leaderboard.php",true);
        xmlhttp.send();
    }else{
        xmlhttp.open("GET","error.php",true);
        xmlhttp.send();
    }
}

var refreshBoard = function()
{
	var xmlhttp;
	if(window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.readyState ==4 && xmlhttp.status == 200)
		{
			document.getElementById("board").innerHTML = 
			xmlhttp.responseText;
		}

	}
	xmlhttp.open("GET", "irelandRefresh.php", true);
	xmlhttp.send();
	console.log("refresh");
}

setInterval(refreshBoard, 5000);
