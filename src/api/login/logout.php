<?php
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

  $sessionid = $_GET["sessionid"];
  $out = new stdClass();
  
  // destruir cualquier session anterior existente
  $sql =  "UPDATE cmsusers " .
  "       SET    sessionid = null,".
  "       validthru = null, ".
  "       fails=0, " .
  "       lastsession = NOW() ".
  "       WHERE  sessionid='".$sessionid."' ";
  if (!$db->query($sql))
    badEnd("500", array("msg"=>$db->error));


  $out->id = $sessionid;

  header("HTTP/1.1 200");
  echo (json_encode($out));
  die();
?>
