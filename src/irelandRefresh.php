<?php
$servername = "localhost";
$username = "normal_user";
$password = "";
$dbname = "ireland";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT Display_Name, Num_Of_Guinness FROM users_drink
		GROUP BY Num_Of_Guinness";

$result=mysqli_query($conn, $sql);
if($result)
{
	while($row = mysqli_fetch_row($result))
	{
		echo $row[0];
		echo " ";
		echo $row[1];
		echo " ";
		$mydate = getdate();
		echo "$mydate[month] $mydate[mday], $mydate[year]. $mydate[hours]:$mydate[minutes]:$mydate[seconds]";
		echo"<br>";
	}
}
mysqli_free_result($result);
mysqli_close($conn);


?>