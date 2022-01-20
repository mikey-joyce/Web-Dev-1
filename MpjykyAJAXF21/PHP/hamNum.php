<?php
    function hamCheck($myHam){
        if ($myHam == 1){
            return " is a Hamming Number";
        }
        if ($myHam % 2 == 0){
            return hamCheck($myHam/2);
        }
        if ($myHam % 3 == 0){
            return hamCheck($myHam/3);
        }
        if ($myHam % 5 == 0){
            return hamCheck($myHam/5);
        }    
        return " is not a Hamming Number";
    }

    if($_GET['ham'] == ''){
        echo "All fields are required";
    }
    else if((int)$_GET['ham'] > 0){
        $check = hamCheck($_GET['ham']);
        echo "The provided number " . $_GET['ham'] . $check;
    }
    else{
        echo "Input was not an integer above 0";
    }
?>