<?php
$servername = "localhost";
$username = "normal_user";
$password = "";
$dbname = "ireland";
$q = $_GET["q"];

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$qArray = explode("|", $q);

$sql = "INSERT INTO users_drink (Username, Display_Name)
	VALUES ('".$qArray[0]."','".$qArray[1]."')";
	$result = mysqli_query($conn, $sql);
	if($result)
	{
		echo "Welcome ".$qArray[1];
	}
	else
	{
		echo "entry not created";
	}

?>