<?php
include_once("dbconnect.php"); 
$data=json_decode($_POST['mydata']);


$first=$data->first_signup;
$last=$data->last_signup;
$email=$data->email_signup;
$mobile=$data->mobile_signup;
$password=$data->password_signup;
$degree=$data->degree;
$passout=$data->passout;

//form validation starts
$query = mysql_query("SELECT email FROM user WHERE email = '$email'"); 
$query1 = mysql_query("SELECT mobile FROM user WHERE mobile = '$mobile'");


if(mysql_num_rows($query)>0) //checks if the email or mobile number already exists
{
    if(mysql_num_rows($query1)>0)
      {
      $result['msg']="erroremailmobile";
      }
    else
      {
      $result['msg']="erroremail";
      }
}
else
{
if(mysql_num_rows($query1)>0)
    {
    $result['msg']="errormobile";
    }

    //form validation ends
else
    {
          $query2="INSERT INTO user(first,last,email,mobile,password,degree,passout) VALUES ('$first','$last','$email','$mobile','$password','$degree','$passout')"; //inserting in database
          $res2=mysql_query($query2);
          if($res2)
          {
              $result['msg']="inserted";  //after inserting in database inserting in json file
              


          }
            else
            $result['msg']="error";

          }
    }
echo var_export(json_encode($result));

?>