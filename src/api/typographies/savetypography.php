<?php
// app/api/login/login.php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  header("Content-Type:application/json");
  include("../dbcon.php");
  include("../utils.php");

  // parametros obligatorios
  $parmsob = array("sessionid","id","projectid","fontname","fonturl");
  if (!parametrosValidos($_GET, $parmsob))
      badEnd("400", array("msg"=>"Parametros obligatorios " . implode(", ", $parmsob)));

  $out = new stdClass();
  $sessionid = $_GET["sessionid"];
  $id = $_GET["id"];
  $projectid = $_GET["projectid"];
  $fontname = $_GET["fontname"];
  $fonturl = $_GET["fonturl"];

  isSessionValid($db, $sessionid);

  if($id == 0){
    $sql = "INSERT INTO typographies(projectid,fontname,urlfont)".
    "       VALUES".
    "       (".$projectid.",'".$fontname."','".$fonturl."')";
    if (!$db->query($sql))
        badEnd("500", array("msg"=>$db->error));

    $out->id = (int) $db->insert_id;
  }else{
    $sql = "UPDATE typographies SET".
    "       projectid = ".$projectid.", ".
    "       fontname = '".$fontname."', ".
    "       urlfont = '".$fonturl."' ".
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
