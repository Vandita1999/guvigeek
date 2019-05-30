<?php
require "mongo-orm.php";
$mongoDB = new MongoClient('mongodb://localhost');

$data=json_decode($_POST['mydata']);
$type=$data->type;
//print_r($mongoDB);
if($type=="insert")
{
	$name=$data->userid;
	$password=$data->password;
	$details=array('username' => $name,'password'=>$password );

	$db=$mongoDB->selectDB('admin');
	$collection=$db->selectCollection('mycollection');

	$collection->insert($details);
	$result['msg']="inserted";
}
else if($type=="extract")
{
	$db=$mongoDB->selectDB('admin');
	$collection=$db->selectCollection('mycollection');
	$flag=0;
	$variable=$collection->find();
	$variable=$variable->toArray();
	foreach ($variable as $k)
	 {

		$username=$k->username;
		$pwd=$k->password;
		$result[$flag]['username']=$username;
		$result[$flag]['pwd']=$pwd;
		$flag++;

	}
	$result['msg']="extracted";
}
else

$result['msg']="error";

echo var_export(json_encode($result));
?>