<?php
/* Created by Professor Wergeles for CS2830 at the University of Missouri */
/* References:
        1. User Authentication Lecture by: Trey Shaw */

/* Start of code used from reference 1 */
$action = empty($_POST['action']) ? false : $_POST['action'];

switch ($action) {
	case 'login':
		$username = empty($_POST['username']) ? '' : $_POST['username'];
		$password = empty($_POST['password']) ? '' : $_POST['password'];
        
		if ($username=='test' && $password=='pass'){
			setcookie('userid', $username);
			$response = 'Login: Success';
		}
		else {
			$response = 'Incorrect Username or Password';
		}
		print $response;
		break;
	case 'get':
		$userid = empty($_COOKIE['userid']) ? '' : $_COOKIE['userid'];
		if ($userid=='test') {
			$response = 'This is protected content for test';
		}
		else {
			$response = "Either there is no content for your userid or you are not logged in.";
		}
		print $response;
		break;
	case 'logout':
        /* IMPORTANT
            CHECK IF THERE IS A COOKIE HERE TO SEE IF THEY ARE ACTUALLY LOGGED IN */
		setcookie('userid', '', 1);
		print 'Logged out';
		break;
	default: 
		print "Error, default case"; 
		break; 
}
/* End of code used from reference 1 */
?>
