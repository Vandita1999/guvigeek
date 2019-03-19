
<?php 
include_once("dbconnect.php"); 
$data=json_decode($_POST['mydata']);


$first=$data->firstname;
$last=$data->lastname;
$email=$data->email;
$mobile=$data->mobile;
$degree=$data->degree;
$passout=$data->passout;
$adhar=$data->adhaar;
$branch=$data->branch;


 $query2="INSERT INTO userinfo(first,last,email,mobile,adhaar,degree,branch,passout) VALUES ('$first','$last','$email','$mobile','$adhar','$degree','$branch','$passout')"; //inserting in database
          $res2=mysql_query($query2);
          if($res2)
          {
          	$result['msg']="Inserted";
          	$inp=file_get_contents('jsondata.json'); //inserting in json file
             $inp=json_decode($inp); //decoding the json
             array_push($inp, $data); //appending the values in json
             $inp=json_encode($inp); //encoding back

             $fp = fopen('jsondata.json', 'w'); //updating the jsondatan.json file
             fwrite($fp, $inp);
             fclose($fp); //closing the flile
          }
          else
          	$result['msg']="not inserted";

          echo var_export(json_encode($result));


?>