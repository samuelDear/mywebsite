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

    $sql = "SELECT count(id) as qty FROM projects WHERE code = '".$code."'";
    if (!$res=$db->query($sql))
      badEnd("500", array("msg"=>$db->error));

    $projectresult = $res->fetch_assoc();

    if($projectresult["qty"] > 0){
      badEnd("401", array("msg"=>"Ya existe un proyecto con este codigo"));
    }

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

    $urlfolder = "../../assets/images/project-images/".$code;

    if(!is_dir($urlfolder)){
      mkdir($urlfolder, 0777, true);
    }

    if(isset($_FILES["principalimg"])){
      saveimg($_FILES["principalimg"],$urlfolder,"principalimg",$db,$out->id);
    }

    if(isset($_FILES["secundaryimg"])){
      saveimg($_FILES["secundaryimg"],$urlfolder,"secundaryimg",$db,$out->id);
    }

    if(isset($_FILES["fmobileimg"])){
      saveimg($_FILES["fmobileimg"],$urlfolder,"fmobileimg",$db,$out->id);
    }

    if(isset($_FILES["smobileimg"])){
      saveimg($_FILES["smobileimg"],$urlfolder,"smobileimg",$db,$out->id);
    }

    if(isset($_FILES["laptopimg"])){
      saveimg($_FILES["laptopimg"],$urlfolder,"laptopimg",$db,$out->id);
    }

    if(isset($_FILES["tabletimg"])){
      saveimg($_FILES["tabletimg"],$urlfolder,"tabletimg",$db,$out->id);
    }

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

    $urlfolder = "../../assets/images/project-images/".$code;

    $out->id = (int)$id;

    if(!is_dir($urlfolder)){
      mkdir($urlfolder, 0777, true);
    }

    if(isset($_FILES["principalimg"])){
      saveimg($_FILES["principalimg"],$urlfolder,"principalimg",$db,$out->id);
    }

    if(isset($_FILES["secundaryimg"])){
      saveimg($_FILES["secundaryimg"],$urlfolder,"secundaryimg",$db,$out->id);
    }

    if(isset($_FILES["fmobileimg"])){
      saveimg($_FILES["fmobileimg"],$urlfolder,"fmobileimg",$db,$out->id);
    }

    if(isset($_FILES["smobileimg"])){
      saveimg($_FILES["smobileimg"],$urlfolder,"smobileimg",$db,$out->id);
    }

    if(isset($_FILES["laptopimg"])){
      saveimg($_FILES["laptopimg"],$urlfolder,"laptopimg",$db,$out->id);
    }

    if(isset($_FILES["tabletimg"])){
      saveimg($_FILES["tabletimg"],$urlfolder,"tabletimg",$db,$out->id);
    }

    if(isset($_POST["laptopimg"]) && $_POST["laptopimg"] == "null"){
      $sql = "UPDATE projects SET".
      "      laptopimg = null".
      "      WHERE id = ".$out->id;
      if (!$db->query($sql))
        badEnd("500", array("msg"=>$db->error));

      if(file_exists($urlfolder . "/laptopimg.png")){
        unlink($urlfolder . "/laptopimg.png");
      }
    }

    if(isset($_POST["tabletimg"]) && $_POST["tabletimg"] == "null"){
      $sql = "UPDATE projects SET".
      "      tabletimg = null".
      "      WHERE id = ".$out->id;
      if (!$db->query($sql))
        badEnd("500", array("msg"=>$db->error));

      if(file_exists($urlfolder . "/tabletimg.png")){
        unlink($urlfolder . "/tabletimg.png");
      }
    }
  }

  header("HTTP/1.1 200");
  echo (json_encode($out));
  die();

  function saveimg($file,$url,$field,$db,$projectid){
    //Recibimos el valor por el string que se envio en uploadids
    $ext = pathinfo($file['name'], PATHINFO_EXTENSION);

    if(file_exists($url . "/" . $field . "." . $ext)){
      unlink($url . "/" . $field . "." . $ext);
    }

    //Movemos el FILE del directorio temporal al del sistema para su uso
    if(move_uploaded_file($file["tmp_name"], $url . "/" . $field . "." . $ext)){
      //Guardamos los datos del FILE en la BD para su busqueda
      $sql = "UPDATE projects SET".
      "      ".$field." = '".($url."/".$field.".".$ext)."'".
      "      WHERE id = ". $projectid;
      if (!$rs=$db->query($sql))
        badEnd("500", array("msg"=>$db->error));
    }
  }

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
