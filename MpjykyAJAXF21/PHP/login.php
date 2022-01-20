<?php
    $username = "test";
    $password = "pass";
    if($_POST['username']=="" || $_POST['password']==""){
        echo "All fields are required!";
    }
    else if($_POST['username']==$username && $_POST['password']==$password){
        echo "Credentials validated with POST";
    }
    else{
        echo "Username or password is incorrect";
    }
?>