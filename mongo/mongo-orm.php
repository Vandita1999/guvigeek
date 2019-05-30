 <?php


class MongoClient{

	public $connection;
	public $dbname;
	public $collection;

	/*
	 * construtor of MongoClient
	 * Creates and stores object for underlying native driver
	 */
	public function __construct($connection){
		$cursor = new MongoDB\Driver\Manager($connection);
		$this->connection = &$cursor;
	}

	/*
	 * function selectDB($dbname)
	 * $dbname --> name of the DB to be selected
	 */
	function selectDB($dbname){
		$this->dbname = $dbname;
		return $this;
	}

	/*
	 * function selectCollection($collection)
	 * $collection --> name of the collection to be selected
	 */
	function selectCollection($collection){
		$this->collection = $collection;
		return $this;
	}



	/*
	 * function find($collection)
	 * $collection --> name of the collection to be selected
	 */
	function find($filter = [], $options = []){
		// if(sizeof($filter) == 0 && sizeof($options) == 0){
		// 	throw new Exception("Need atleast one parameter for find filter or options");
		// }
		$location = $this->dbname.".".$this->collection;
		$query = new MongoDB\Driver\Query($filter,$options);
		$cursor = $this->connection->executeQuery($location, $query);
		return $cursor;
	}

	/*
	 * function insert($data)
	 * $data --> data to be inserted
	 */
	function insert($data = []){
		if(sizeof($data) == 0){
			throw new Exception("Insert array is Empty");
		}
		$location = $this->dbname.".".$this->collection;
		$bulk = new MongoDB\Driver\BulkWrite();
		$bulk->insert($data);
		$cursor = $this->connection->executeBulkWrite($location, $bulk);
		return $cursor;
	}

	/*
	 * function update($data)
	 * $data --> data to be inserted
	 */
	function update($condition = [], $data = [], $options = ["upsert" => false, "multi" => false]){
		if(sizeof($data) == 0 ){
			throw new Exception("Update or Condition array cannot be Empty");
		}
		$location = $this->dbname.".".$this->collection;
		$bulk = new MongoDB\Driver\BulkWrite();
		$bulk->update($condition, array('$set' => $data), $options);
		$cursor = $this->connection->executeBulkWrite($location, $bulk);
		return $cursor;
	}

	/*
	 *If limit is set to 0 in funtion call then all data matching filter condition will be deleted
	 */
	function delete($filter = [], $options = ["limit" => 1]){
		if(sizeof($filter) == 0){
			throw new Exception("Specify atleast one filter condition to perform delete");
		}
		$location = $this->dbname.".".$this->collection;
		$bulk = new MongoDB\Driver\BulkWrite();
		$bulk->delete($filter, $options);
		$cursor = $this->connection->executeBulkWrite($location, $bulk);
		return $cursor;
	}

	function count($options = []){
		if(!isset($this->dbname) && !isset($this->collection)){
			throw new Exception("Database or collection is not set");
		}
		$command = new MongoDB\Driver\Command(["count" => $this->collection, "query" => $options]);
		$cursor = $this->connection->executeCommand($this->dbname, $command);
		return $cursor->toArray()[0]->n;
	}

	function distinct($distinctField = [], $filter = []){
		if(!isset($this->dbname) && !isset($this->collection)){
			throw new Exception("Database or collection is not set");
		}
		$location = $this->dbname.".".$this->collection;
		$command = new MongoDB\Driver\Command(["distinct" => $distinctField, "query" => $filter]);
		$cursor = $this->connection->executeCommand($location, $command);
		return $cursor;
	}


	function getCollectionNames(){
		if(!isset($this->dbname)){
			throw new Exception("Database is not set");
		}
		$command = new MongoDB\Driver\Command(["listCollections" => 1]);
		$cursor = $this->connection->executeCommand($this->dbname, $command);
		$cursor = $cursor->toArray();
		$arr = [];
        foreach ($cursor as $coll) 
        {
	         array_push($arr, $coll->name);
        }
        return $arr;
	}
	
}
?>