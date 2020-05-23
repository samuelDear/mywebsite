<?php
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
  header("Content-Type:application/json");
  include("../dbcon.php");
  include("../utils.php");

  // parametros obligatorios
  $parmsob = array("code");
  if (!parametrosValidos($_GET, $parmsob))
      badEnd("400", array("msg"=>"Parametros obligatorios " . implode(", ", $parmsob)));

  $out = new stdClass();
  $code =  $_GET["code"];

  $sql = "SELECT * FROM projects WHERE UPPER(code)=UPPER('".$code."')";
  if (!$rs=$db->query($sql))
      badEnd("500", array("msg"=>$db->error));

  $row = $rs->fetch_assoc();

  $record = new stdClass();
  $record->id = (int)$row['id'];
  $record->code = $row['code'];
  $record->name = $row['name'];
  $record->datecreated = $row["datecreated"];
  $record->principalimg = $row["principalimg"];
  $record->laptopimg = $row["laptopimg"];
  $record->tabletimg = $row["tabletimg"];
  $record->fmobileimg = $row["fmobileimg"];
  $record->smobileimg = $row["smobileimg"];

  $record->es = new stdClass();
  $record->es->resume = $row["resumees"];
  $record->es->dsc = $row["dsces"];
  $record->es->role = $row["rolees"];
  $record->es->agency = $row["agencyes"];
  $record->es->introduction = $row["introductiones"];

  $record->en = new stdClass();
  $record->en->resume = $row["resumeen"];
  $record->en->dsc = $row["dscen"];
  $record->en->role = $row["roleen"];
  $record->en->agency = $row["agencyen"];
  $record->en->introduction = $row["introductionen"];

  $sql = "SELECT * FROM colors WHERE projectid=".$record->id;
  if (!$colors=$db->query($sql))
    badEnd("500", array("msg"=>$db->error));

  $colorentry = [];
  while ($colorarr = $colors->fetch_assoc()) {
    $color = new stdClass();
    $color->id = (int)$colorarr["id"];
    $color->colorhex = $colorarr["colorhex"];
    $colorentry [] = $color;
  }
  $record->colors = $colorentry;

  $sql = "SELECT * FROM typographies WHERE projectid=".$record->id;
  if (!$typos=$db->query($sql))
    badEnd("500", array("msg"=>$db->error));

  $typoentry = [];
  while ($typoarr = $typos->fetch_assoc()) {
    $typo = new stdClass();
    $typo->id = (int)$typoarr["id"];
    $typo->name = $typoarr["fontname"];
    $typo->url = $typoarr["urlfont"];

    $typoentry [] = $typo;
  }
  $record->typographies = $typoentry;

  $sql = "SELECT * FROM features WHERE projectid=".$record->id;
  if (!$features=$db->query($sql))
    badEnd("500", array("msg"=>$db->error));

  $featureentryen = [];
  $featureentryes = [];
  while ($featurearr = $features->fetch_assoc()) {
    $featureen = new stdClass();
    $featurees = new stdClass();

    $featureen->id = (int) $featurearr["id"];
    $featurees->id = (int) $featurearr["id"];

    $featureen->title = $featurearr["titleen"];
    $featurees->title = $featurearr["titlees"];

    $featureen->dsc = $featurearr["dscen"];
    $featurees->dsc = $featurearr["dsces"];

    $featureentryes [] = $featurees;
    $featureentryen [] = $featureen;
  }
  $record->en->features = $featureentryen;
  $record->es->features = $featureentryes;

  $out->entry = $record;

  header("HTTP/1.1 200");
  echo (json_encode($out));
  die();
?>
