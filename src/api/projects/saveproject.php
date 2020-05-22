<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  header("Content-Type:application/json");
  include("../dbcon.php");
  include("../utils.php");

  // parametros obligatorios
  $parmsob = array("sessionid","id","code","name","datecreated","roles","rolen","agencyes","agencyen","resumees","resumeen","dscesproject","dscenproject","introductiones","introductionen");
  if (!parametrosValidos($_POST, $parmsob))
      badEnd("400", array("msg"=>"Parametros obligatorios " . implode(", ", $parmsob)));

  $out = new stdClass();
  $sessionid = $_POST["sessionid"];

  isSessionValid($db, $sessionid);

  $id = $_POST["id"];
  $code = $_POST["code"];
  $name = $_POST["name"];
  $datecreated = $_POST["datecreated"];
  $roles = $_POST["roles"];
  $rolen = $_POST["rolen"];
  $agencyes = $_POST["agencyes"];
  $agencyen = $_POST["agencyen"];
  $resumees = $_POST["resumees"];
  $resumeen = $_POST["resumeen"];
  $introductiones = $_POST["introductiones"];
  $introductionen = $_POST["introductionen"];
  $dscesproject = $_POST["dscesproject"];
  $dscenproject = $_POST["dscenproject"];

  if($id == 0){
    $parmsob = array('colors','typographiesurl','typographiesname','tituloes','tituloen','dsces','dscen');
    if (!parametrosValidos($_POST, $parmsob))
        badEnd("400", array("msg"=>"Parametros obligatorios " . implode(", ", $parmsob)));

    $sql = "INSERT INTO projects(".
    "       code, name, ".
    "       resumees, resumeen,".
    "       dsces, dscen, ".
    "       rolees, roleen, ".
    "       agencyes, agencyen, ".
    "       introductiones, introductionen, ".
    "       datecreated ".
    "       )".
    "       VALUES (".
    "       '".$code."', '".$name."', ".
    "       '".$resumees."', '".$resumeen."',".
    "       '".$dscesproject."', '".$dscenproject."', ".
    "       '".$roles."','".$rolen."', ".
    "       '".$agencyes."', '".$agencyen."', ".
    "       '".$introductiones."', '".$introductionen."', ".
    "       '".$datecreated."')";
    if (!$db->query($sql))
      badEnd("500", array("msg"=>$db->error));

    $out->id = (int) $db->insert_id;


    $sql = "INSERT INTO colors (projectid, colorhex)".
    "       VALUES ".insertColors($_POST["colors"], $out->id);
    if (!$db->query($sql))
      badEnd("500", array("msg"=>$db->error));

    $sql = "INSERT INTO typographies (projectid, fontname, urlfont)".
    "       VALUES ".insertTypographies($out->id, $_POST["typographiesname"], $_POST["typographiesurl"]);
    if (!$db->query($sql))
      badEnd("500", array("msg"=>$db->error));

    $sql = "INSERT INTO features (projectid, titlees, titleen, dscen, dsces)".
    "       VALUES ".insertFeatures($out->id, $_POST["tituloes"], $_POST["tituloen"], $_POST["dsces"], $_POST["dscen"]);
    if (!$db->query($sql))
      badEnd("500", array("msg"=>$db->error));
      
  }else{
    $sql = "UPDATE projects SET".
    "       code = '".$code."', ".
    "       name = '".$name."', ".
    "       resumees = '".$resumees."', ".
    "       resumeen = '".$resumeen."', ".
    "       rolees = '".$roles."', ".
    "       roleen = '".$rolen."', ".
    "       agencyes = '".$agencyes."', ".
    "       agencyen = '".$agencyen."', ".
    "       introductiones = '".$introductiones."', ".
    "       introductionen = '".$introductionen."', ".
    "       datecreated = '".$datecreated."', ".
    "       dsces = '".$dscesproject."', ".
    "       dscen = '".$dscenproject."'".
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

  function insertColors($colors, $projectid){
    $arrcolors = explode('~',$colors);
    $len = sizeof($arrcolors);
    $str = "";
    for($i = 0; $i < $len; $i ++){
        $str = $str."( ".$projectid.",'".$arrcolors[$i]."'),";
    }
    return substr($str, 0, -1);
  }

  function insertTypographies($projectid, $typographiesname, $typographiesurl){
    $arrnames = explode('~', $typographiesname);
    $arrurls = explode('~', $typographiesurl);
    $len = sizeof($arrnames);
    $str = "";

    for($i = 0; $i < $len; $i ++){
        $str = $str."( ".$projectid.",'".$arrnames[$i]."','".$arrurls[$i]."'),";
    }

    return substr($str, 0, -1);
  }

  function insertFeatures($projectid, $tituloes, $tituloen, $dsces, $dscen){
    $arrtituloes = explode('~', $tituloes);
    $arrtituloen = explode('~', $tituloen);
    $arrdsces = explode('~', $dsces);
    $arrdscen = explode('~', $dscen);

    $len = sizeof($arrtituloes);
    $str = "";

    for($i = 0; $i < $len; $i ++){
        $str = $str."( ".$projectid.",'".$arrtituloes[$i]."', '".$arrtituloen[$i]."', '".$arrdsces[$i]."', '".$arrdscen[$i]."'),";
    }

    return substr($str, 0, -1);
  }
?>
