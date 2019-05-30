<?php
require "mongo-orm.php";
$mongoDB = new MongoClient('mongodb://localhost');
$db=$mongoDB->selectDB('admin');
$collection=$db->selectCollection('mycollection');
$data=json_decode($_POST['mydata']);  
	foreach ($data as $key => $value) {
		$collect=$collection->find(array("sublesson"=>$key));
		$cursor=iterator_to_array($collect);
		// print_r($cursor);
		
		foreach($cursor as $k)
		{
			//print_r($k->sublesson);
			$sublesson=$k->sublesson;
			if($sublesson!=$key)
			{
				$time=time();
				$details=array("course"=>"c","sublesson"=>$key,"timespent"=>$value,"timestamp"=>$time);
				$collection->insert($details);
				$result['msg']="inserted";
				//print_r($result);
			}

			else
			{
				$time=time();
				$newdata=array("timespent"=>$value,"timestamp"=>$time);
				$collection->update(array("sublesson"=>$key),$newdata);
			}
				//print_r("hi");
			}
		}
				/*	$time=time();
				$details=array("course"=>"c","sublesson"=>$key,"timespent"=>$value,"timestamp"=>$time);
				$collection->insert($details);
				$result['msg']="inserted";
			/*			else
			{
				print_r("not got");
			}*/




		

?>