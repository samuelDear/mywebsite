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

  $sql = "DELETE FROM typographies".
  "       WHERE id = ".$id;
  if (!$db->query($sql))
      badEnd("500", array("msg"=>$db->error));

  $out->id = $id;

  header("HTTP/1.1 200");
  echo (json_encode($out));
  die();
?>
