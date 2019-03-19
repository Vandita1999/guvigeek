<?php
include_once("dbconnect.php");
session_start(); 
$data=json_decode($_POST['mydata']); //decoding the Json

  $email_login=$data->email_login;  //retrieving values from json 
  $password_login=$data->password_login; //retrieving values from json
  $query="SELECT * FROM user WHERE email = '$email_login' AND password ='$password_login'"; //checking if the email exist in database
  $res=mysql_query($query);

  if(mysql_num_rows($res)>0)
  {
    //header('location:flights.php')
    $result['msg']="logged in"; 
    $_SESSION['email']=$email_login; // creating a php session for email

  }
  else
  {
    $result['msg']="not Logged In";
  }
  echo var_export(json_encode($result));  //encoding Json back and exporting to js file

?>