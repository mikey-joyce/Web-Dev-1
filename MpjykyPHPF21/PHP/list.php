<?php
    if($_GET['first']=="" || $_GET['second']==""){
        echo "All fields are required!";
    }
    else if(strlen($_GET['first'])!=1 || strlen($_GET['second'])!=1){
        echo "Enter in a single character only!";
    }
    else{
        $list = "{";
        foreach(range($_GET['first'], $_GET['second']) as $listElement){
            $list .= $listElement . ",";
        }
        $list .= "}";
        echo $list;
    }
?>