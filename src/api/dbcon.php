<?php
    // CAMBIAR AL PASAR A PRODUCCION
    $homeurl = "";
    $db = new mysqli("localhost", "root", "", "portafolio");
    //verifica la conexion
    if ($db->connect_errno){
        header("HTTP/1.1 500");
        echo(json_encode(array(msg=>$db->connect_error)));
        die();
    }
    $db->query("set names 'utf8'");
?>
