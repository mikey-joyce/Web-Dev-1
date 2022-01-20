<?php
    if($_GET['fName'] === "" || $_GET['lName'] === ""){
        echo "All fields are required!";
    }
    else{
        echo "Hello " . $_GET['fName'] . " " . $_GET['lName'] . " welcome to my PHP playground, designed to simulate the value of server-side development and practical use in web development!";
    }
?>