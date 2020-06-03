<?php
// app/api/login/login.php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  header("Content-Type:application/json");
  include("../dbcon.php");
  include("../utils.php");

  // parametros obligatorios
  $parmsob = array("sessionid","id","title","datecreated","institute","urlinstitute");
  if (!parametrosValidos($_GET, $parmsob))
      badEnd("400", array("msg"=>"Parametros obligatorios " . implode(", ", $parmsob)));

  $out = new stdClass();
  $sessionid = $_GET["sessionid"];
  $id = $_GET["id"];
  $title = $_GET["title"];
  $datecreated = $_GET["datecreated"];
  $institute = $_GET["institute"];
  $urlinstitute = $_GET["urlinstitute"];

  isSessionValid($db, $sessionid);

  if($id == 0){
    $sql = "INSERT INTO courses(title,datecreated,institute,urlinstitute)".
    "       VALUES".
    "       ('".$title."','".$datecreated."','".$institute."','".$urlinstitute."')";
    if (!$db->query($sql))
        badEnd("500", array("msg"=>$db->error));

    $out->id = (int) $db->insert_id;
  }else{
    $sql = "UPDATE courses SET".
    "       title = '".$title."', ".
    "       datecreated = '".$datecreated."', ".
    "       institute = '".$institute."', ".
    "       urlinstitute = '".$urlinstitute."' ".
    "       WHERE id = ".$id;
    if (!$db->query($sql))
      badEnd("500", array("msg"=>$db->error));

    if ($db->affected_rows == 0){
      badEnd("401", array("sql"=>$sql,"msg"=>"No se pudo actualizar"));
    }

    $out->id = (int)$id;
  }
  header("HTTP/1.1 200");
  echo (json_encode($out));
  die();
?>
