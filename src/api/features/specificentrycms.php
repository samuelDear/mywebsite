<?php
// app/api/login/login.php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  header("Content-Type:application/json");
  include("../dbcon.php");
  include("../utils.php");

  // parametros obligatorios
  $parmsob = array("sessionid","id");
  if (!parametrosValidos($_GET, $parmsob))
      badEnd("400", array("msg"=>"Parametros obligatorios " . implode(", ", $parmsob)));

  $out = new stdClass();
  $sessionid = $_GET["sessionid"];
  $id = $_GET["id"];

  isSessionValid($db, $sessionid);

  $sql = "SELECT * FROM features WHERE id =".$id;
  if (!$rs=$db->query($sql))
    badEnd("500", array("msg"=>$db->error));

  $row = $rs->fetch_assoc();

  $out->entry = new stdClass();
  $out->entry->id = (int)$row["id"];
  $out->entry->projectid = (int)$row["projectid"];

  $sql = "SELECT name FROM projects WHERE id = " .$row["projectid"];
  if (!$res=$db->query($sql))
    badEnd("500", array("msg"=>$db->error));

  $project = $res->fetch_assoc();

  $out->entry->nameproject = $project["name"];
  $out->entry->titlees = $row["titlees"];
  $out->entry->titleen = $row["titleen"];
  $out->entry->dsces = $row["dsces"];
  $out->entry->dscen = $row["dscen"];


  header("HTTP/1.1 200");
  echo (json_encode($out));
  die();
?>
