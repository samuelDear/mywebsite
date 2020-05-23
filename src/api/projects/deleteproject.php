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

  $sql = "DELETE FROM colors".
  "       WHERE projectid = ".$id;
  if (!$db->query($sql))
    badEnd("500", array("msg"=>$db->error));

  $sql = "DELETE FROM features".
  "       WHERE projectid = ".$id;
  if (!$db->query($sql))
    badEnd("500", array("msg"=>$db->error));

  $sql = "DELETE FROM typographies".
  "       WHERE projectid = ".$id;
  if (!$db->query($sql))
    badEnd("500", array("msg"=>$db->error));

  $sql = "SELECT * FROM projects WHERE id = ".$id;
  if (!$rs=$db->query($sql))
    badEnd("500", array("msg"=>$db->error));

  $row = $rs->fetch_assoc();

  $urlfolder = "../../assets/images/project-images/".$row["code"];
  $out->msg = $urlfolder;
  delete_directory($urlfolder);

  $sql = "DELETE FROM projects".
  "       WHERE id = ".$id;
  if (!$db->query($sql))
    badEnd("500", array("msg"=>$db->error));

  $out->id = $id;

  header("HTTP/1.1 200");
  echo (json_encode($out));
  die();

  function delete_directory($dirname) {
    if (is_dir($dirname))
      $dir_handle = opendir($dirname);


    if (!$dir_handle)
      return false;

    while($file = readdir($dir_handle)) {
      if ($file != "." && $file != "..") {
        if (!is_dir($dirname."/".$file))
          unlink($dirname."/".$file);
        else
          delete_directory($dirname.'/'.$file);
      }
     }

    closedir($dir_handle);
    rmdir($dirname);
    return true;
}
?>
