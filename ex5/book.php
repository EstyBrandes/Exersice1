
<?php 
    //create a mySQL DB connection:
	include "config.php";

    $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
   
    //testing connection success
    if(mysqli_connect_errno()) {
        die("DB connection failed: " . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")"
        );
    }
?>
<?php 
	//get data from DB
    $query 	= "SELECT * FROM tbl_81_books order by name";
	$result = mysqli_query($connection, $query);
    if(!$result) {
        die("DB query failed.");
    }
?>

<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="css/style.css">
<script src="includes/getbookslist.js" defer></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>books list</title>
</head>

<body>
    <header id="header" class="page-header">
         <div class="page-header row">
       
            <div class="col-md-4">
                 <a href="#" class="logo">THE <span>BOOKSTORE </span></a>
            </div>

            <div class="col-md-4 col-md-offset-4">
            <!-- Search -->
                 <div class="catalog-search">
                    <input class="shuffle-search input_field " type="search" autocomplete="off" value="" maxlength="128" placeholder="Search Book" id="input-search"/>
                    <button type="button" name="button"  id='clickMe'><i class="fa fa-search" aria-hidden="true"></i></button>
                </div>

            </div>
        </div>
    </header>

    <main>
   
<?php
// Establish the database connection
// Assuming you have already established the connection before this point

// Check if the book ID is provided in the query string
if (isset($_GET['id'])) {
    $bookId = $_GET['id'];

    // Prepare the SQL query to fetch the book details
    $query = "SELECT * FROM tbl_81_books WHERE id = $bookId";
    $result = $connection->query($query);

    // Check if the query executed successfully
    if ($result) {
        // Check if the book exists in the database
        if ($result->num_rows > 0) {
            // Fetch the book details
            $row = $result->fetch_assoc();
            $id = $row['id'];
            $name = $row['name'];
            $description = $row['description'];
            $price = $row['price'];
            $author = $row['author'];
            $photo = $row['photo'];
            $secphoto = $row['secphoto'];
	    $category = $row['category']; 

            // Display the book details
            echo '<div class="book-details">';
            echo '<div class="book-info">';
            echo '<h1>' . $name . '</h1>';
            echo '<p class="author">Author: ' . $author . '</p>';
	    echo '<p>Category: ' . $category . '</p>';
            echo '<p>Description: ' . $description . '</p>';
            echo '<p>Price: ' . $price .' $'. '</p>';
            echo '</div>';
            
            echo '<div class="book-images">';
            echo '<img src="' . $photo . '" alt="Book Cover">';
            echo '<img src="' . $secphoto . '" alt="Book back">';
            echo '</div>';
            echo '</div>';

        } else {
            echo "Book not found.";
        }
    } else {
        echo "Error executing the query.";
    }
}
?>
</div>
</main>
    
  
</body>

</html>
<?php
//close DB connection
mysqli_close($connection);
?>

