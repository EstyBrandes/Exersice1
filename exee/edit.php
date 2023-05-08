<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="css/style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

  <body>
  <header>
        <h2 class="wedding">Wedding Dress & God Bless</h2>
        <h3 class="wedding">Every Bride Deserves Her Dream Dress</h3>
    </header>
  <?php

if(isset($_GET['submit'])){
    // Get the form data
    $fullName = $_GET['fullName'];
    $email = $_GET['mail'];
    $phone = $_GET['phone'];
    $address = $_GET['address'];
    $age = $_GET['age'];
    $interests = $_GET['interests'];


 <h2> Your Wedding Dress Choice: </h2>
    echo "Full Name: " . $fullName . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Phone Number: " . $phone . "<br>";
    echo "Address: " . $address . "<br>";
    echo "Size: " . $age . "<br>";
    echo "<h2>You selected the following wedding dress styles:</h2>";
				echo "<ul>";
				foreach($interests as $interests) {
					echo "<li>$interests</li>";
				}
				echo "</ul>";
			} else {
				echo "<p class="style">Please select at least one wedding dress style.</p>";
			}

    <p> We Start Working On Making Your Dream Come True </p>
  
?>

    
  </body>
</html>