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
          <!-- Logo -->
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
        
  
  <div class="filter-dropdown">
  <label class="category-list" for="category-select">Filter by Category:</label>
  <select id="category-select">
      <option value="all">All</option>
      <?php
      // Display the category options
      foreach ($categories['category'] as $category) {
          echo '<option value="' . $category['name'] . '">' . $category['name'] . '</option>';
      }
      ?>
  </select>
</div>
<?php
if ($result->num_rows > 0) {
    // Loop through the rows and fetch data
    $addBooksHere = '<div class="rows" id="books">';
    
    while ($row = $result->fetch_assoc()) {
        $id = $row['id'];
        $name = $row['name'];
        $description = $row['description'];
        $price = $row['price'];
        $author = $row['author'];
        $photo = $row['photo'];
        $category = $row['category'];

        $divCol = '<div class="col-md-6" id="books-img-info' . $id . '" data-category="' . $category . '">';

        $divImg = '<div class="book-image"><img src="' . $photo . '"/></div>';
        $divInfo = '<div class="book-info" id="book-info' . '"><h3>' . $name . '</h3>';

        // Add Authors name
        $pAuthor = '<p class="author">by ' . $author . '</p>';
        $divInfo .= $pAuthor;

        // Add description
        $pDescription = '<p class="description">' . $description . '</p>';
        $divInfo .= $pDescription;

        if (!empty($price)) {
            $price = '<p class="price">Price: ' . $price .'$'. '</p>';
            $divInfo .= $price;
        }
        $divInfo .= '<a href="book.php?id=' . $id . '" class="view">View Details</a>';
        $divInfo .= '</div>';
        $divCol .= $divImg . $divInfo;
        $divCol .= '</div>';

        $addBooksHere .= $divCol;
    }

    $addBooksHere .= '</div>';

    // Output the HTML structure
    echo '<div class="container" id="title"></div>';
    echo $addBooksHere;
    echo '<br>';
} else {
    echo "No data found.";
}
?>
</main>
    
  
</body>

</html>
<?php
//close DB connection
mysqli_close($connection);
?>


