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

$result = mysqli_query($conn, "SELECT Username FROM users_drink WHERE Username = '".$q."'");
if(mysqli_num_rows($result)==0)
{	
	$sql = "INSERT INTO users_drink (Username, Display_Name)
	VALUES ('".$q."','".$q."')";
	$result = mysqli_query($conn, $sql);
	if($result)
	{
		echo "Welcome ".$q;
	}
	else
	{
		echo "entry not created";
	}
}	
else {
	$sql = "UPDATE users_drink
	SET Num_of_Guinness = Num_of_Guinness+1
	WHERE NOW() - Last_Drink > 5 AND Username = '".$q."'";
	mysqli_query($conn, $sql);
	$affectedRows = mysqli_affected_rows($conn);
	if($affectedRows>0)
	{
		$sql = "UPDATE users_drink
		SET Last_Drink = NOW()
		WHERE Username = '".$q."'";
		$test =mysqli_query($conn, $sql);
		$newSql = "SELECT Num_of_Guinness
		FROM users_drink
		WHERE Username='".$q."'";
		$newResult = mysqli_query($conn, $newSql);
		if($newResult){
			while($row = mysqli_fetch_row($newResult))
			{
			echo "You have drank ".$row[0];
			}
		
		}
		mysqli_free_result($newResult);
		
	}
	else
	{
		echo "You cannot spam the button silly";
	}
	
}
//mysqli_free_result($result);
mysqli_close($conn);


?>