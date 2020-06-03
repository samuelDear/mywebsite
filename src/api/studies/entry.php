<?php
// app/api/login/login.php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  header("Content-Type:application/json");
  include("../dbcon.php");
  include("../utils.php");

  $out = new stdClass();

  $sql = "SELECT * FROM courses ORDER BY datecreated DESC";
  if (!$rs=$db->query($sql))
      badEnd("500", array("msg"=>$db->error));

  while ($row = $rs->fetch_assoc()) {
    $record = new stdClass();
    $record->id = $row["id"];
    $record->title = $row["title"];
    $record->institute = $row["institute"];
    $record->urlinstitute = $row["urlinstitute"];
    $record->datecreated = new stdClass();
    $record->datecreated->month = date("m",strtotime($row["datecreated"]));
    $record->datecreated->day = date("d",strtotime($row["datecreated"]));
    $record->datecreated->year = date("Y",strtotime($row["datecreated"]));
    $record->datecreated->dsc = $row["datecreated"];

    $records [] = $record;
  }

  $out->records = $records;

  header("HTTP/1.1 200");
  echo (json_encode($out));
  die();
?>
