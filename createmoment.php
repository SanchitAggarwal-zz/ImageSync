<?php

header('content-type: application/json; charset=utf-8');
if (isset($_GET["firstname"])) {

	$firstname = strip_tags($_GET['firstname']);
	$lastname = strip_tags($_GET['lastname']);
	$startdate = strip_tags($_GET['startdate']);
	$stopdate = strip_tags($_GET['stopdate']);
	$Momentname = strip_tags($_GET['Momentname']);
	$imagePath = strip_tags($_GET['imagePath']);
  $Nofshare = strip_tags($_GET['Nofshare']);
  
  $result = 'success';
  $structure='./Users/'.$firstname."_".$Momentname;
	if (mkdir($structure, 777, true)) {
		echo json_encode($result);
	}
  echo json_encode($result);
 }
?>