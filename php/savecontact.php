<?php
$servername = "";
$username = "";
$password = "";
$dbname = "";
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    echo "Error in Connection";
}

$name = $email = $message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    die( "Name is Required!");
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      die("Only letters and white space allowed!");
    }
  }
  
  if (empty($_POST["email"])) {
    die("Email is Required!");
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      die("Invalid Email Format!");
    }
  }

  if(empty($_POST["phone"])){
    die("Phone Number is Required!");
  } else {
    $phone = test_input($_POST["phone"]);
    if(!preg_match('/^[0-9]{10}+$/', $phone))
        die("Invalid Phone Number Format!")
}

  if (empty($_POST["message"])) {
    $message = "";
  } else {
    $message = test_input($_POST["message"]);
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
  
$sql = "INSERT INTO contactus(name,email,phone,message) VALUES('" . $name . "' , '" . $email . "','" . $phone . "', '" . $message . "')";

if (mysqli_query($conn, $sql)) {
    echo "Data Uploaded Successfully!";
}
mysqli_close($conn);
?>