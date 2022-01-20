<?php
    if($_POST['height']=="" || $_POST['radius']==""){
        echo "All fields are required!";
    }
    else if(!is_numeric($_POST['height']) || !is_numeric($_POST['radius'])){
        echo "Input must be a number!";
    }
    else{
        $area = (2 * M_PI * $_POST['height'] * $_POST['radius']) + (2 * M_PI * ($_POST['radius'] * $_POST['radius']));
        $area = number_format($area, 2);
        echo $area;
    }
?>