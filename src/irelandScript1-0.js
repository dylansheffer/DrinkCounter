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
