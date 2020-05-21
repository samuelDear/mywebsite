<?php
// app/api/login/login.php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  header("Content-Type:application/json");
  include("../dbcon.php");
  include("../utils.php");

  // parametros obligatorios
  $parmsob = array("sessionid");
  if (!parametrosValidos($_GET, $parmsob))
      badEnd("400", array("msg"=>"Parametros obligatorios " . implode(", ", $parmsob)));

  $out = new stdClass();
  $sessionid = $_GET["sessionid"];

  isSessionValid($db, $sessionid);

  $sql = "SELECT * FROM features ORDER BY id";
  if (!$rs=$db->query($sql))
      badEnd("500", array("msg"=>$db->error));

  while ($row = $rs->fetch_assoc()) {
    $record = new stdClass();
    $record->id = (int)$row["id"];
    $record->projectid = (int)$row["projectid"];

    $sql = "SELECT name FROM projects WHERE id = " .$row["projectid"];
    if (!$res=$db->query($sql))
        badEnd("500", array("msg"=>$db->error));

    $project = $res->fetch_assoc();

    $record->nameproject = $project["name"];
    $record->titlees = $row["titlees"];
    $record->dsces = $row["dsces"];
    $records [] = $record;
  }

  $out->records = $records;

  header("HTTP/1.1 200");
  echo (json_encode($out));
  die();
?>
