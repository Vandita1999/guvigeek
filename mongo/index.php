<?php
$data=json_decode($_POST['mydata']);
$type=$data->type_of_lesson;  
$result['msg']="hello";
echo var_export(json_encode($result));
?>