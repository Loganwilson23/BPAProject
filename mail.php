<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['mesaage'];


$mailheader = "From:" . $name . "<" . $email . ">\r\n";
$recipient = "loganpizzawilson@gmail.com";
mail($recipient, $subject, $message, $mailheader)
    or die("Error!");

echo' 
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Car Dealership</title>

        <link rel="stylesheet" href="CSS/contact.css">
       
  
  
      
      
      </head>
    <body>
<div class="body-container">
  <div class="container">
    <h1>Thank you for contacting us. One of our emplyees will get back to you soon!</h1>
    <p class="back">Go back to the <a href="index.html">home page</a></p>
   
  </div>
</div>
 
    </body>
</html>

';

?>