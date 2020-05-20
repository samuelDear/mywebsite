<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  header("Content-Type:application/json");
  include("../dbcon.php");
  include("../utils.php");

  // parametros obligatorios
  $parmsob = array("email","pwd");
  if (!parametrosValidos($_GET, $parmsob))
    badEnd("400", array("msg"=>"Parametros obligatorios " . implode(", ", $parmsob)));

  $email = strtoupper($_GET["email"]);
  $pwd = $_GET["pwd"];

  $sessid = randomString(32);

  // destruir cualquier session anterior existente

  $sql =  "UPDATE cmsusers " .
  "       SET    sessionid = '" . $sessid . "',".
  "       validthru = DATE_ADD(NOW(), INTERVAL 1 DAY), ".
  "       fails=0, " .
  "       lastsession = NOW() ".
  "       WHERE  UPPER(usr)='".$email."' ".
  "       AND    pwd='".$pwd."' " .
  "       AND    status<>0";
  if (!$db->query($sql))
    badEnd("500", array("msg"=>$db->error));

  if ($db->affected_rows == 0){
    // se incrementa los reintentos y se desactiva la cuenta en caso de llegar al maxfails
    $sql =  "UPDATE cmsusers " .
    "       SET fails = " .
    "             CASE WHEN fails < maxfails THEN " .
    "               fails + 1 " .
    "             ELSE " .
    "               fails " .
    "             END, " .
    "           status = " .
    "             CASE WHEN fails >= maxfails THEN " .
    "               0 " .
    "             ELSE " .
    "               status " .
    "             END " .
    "         WHERE  UPPER(usr)=UPPER('" . $email . "') " .
    "         AND    fails < maxfails";
    if (!$db->query($sql))
      badEnd("500", array("msg"=>$db->error));

    $sql = "SELECT status FROM cmsusers WHERE UPPER(usr)=UPPER('".$email."') ";
    if (!$rs=$db->query($sql))
      badEnd("500", array("msg"=>$db->error));

    $row = $rs->fetch_assoc();

    if($row["status"] == "0")
      badEnd("402",array("msg"=>"Usuario bloqueado"));

    badEnd("401", array("msg"=>"Usuario/Clave Inválidos"));
    }

    $sql =  "SELECT  id, sessionid, DATE_FORMAT(validthru, '%Y%m%d%H%i%s') vt, name ".
    "        FROM    cmsusers ".
    "        WHERE   UPPER(usr)='".$email."' ".
    "        AND     pwd='".$pwd."'";
    if (!$rs=$db->query($sql))
        badEnd("500", array("msg"=>$db->error));

    $row = $rs->fetch_assoc();

    $out = new stdClass();
    $out->id = (integer) $row["id"];
    $out->sessionid = $row["sessionid"];
    $out->validthru = $row["vt"];
    $out->name = $row["name"];

    header("HTTP/1.1 200");
    echo (json_encode($out));
    die();
?>
