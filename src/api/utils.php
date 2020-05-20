<?php
// afx api/utils

$fromeMail = "";
// Para los push
//$server_key="AAAAjYD41YY:APA91bHN5azipdeCnTs5gyRLBwCe9gfks0_JAfAmDnEpRTE54OZixI6bznNp6s3qjK5vByAVVfi9EKn5r8zImz3GYsqDQRF8204P2h3ZmiAoAm5d9YSfQU8b_80ARt6mrWDWR6n_do8Y";
function randomString($length = 10) {
//    return (substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length));
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function getValidator($length = 8){
    $characters = '0123456789';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function isSessionValid($db, $sessionid){
    // Validar sessionid activo
    $sql =  "SELECT id " .
            "FROM   cmsusers " .
            "WHERE  sessionid = '" . $sessionid . "' " .
            "AND    validthru > NOW() ";
    if (!$rs = $db->query($sql)){
        header("HTTP/1.1 500");
        echo (json_encode(array("msg"=>$db->error)));
        die();
    }
    $row = $rs->fetch_assoc();
    if (!$row["id"]){
        header("HTTP/1.1 401");
        echo (json_encode(array("msg"=>"Sesión inválida o expirada")));
        die();
    }
    return($row["id"]);
}

function enviarCorreo($from, $to, $subject, $body){
    $cabeceras = 'From: ' . $from . "\r\n" .
                 'Reply-To: ' . $from . "\r\n" .
                 'X-Mailer: PHP/' . phpversion()."\r\n".
                 "Content-Type: text/html; charset=UTF-8\r\n";
    mail($to, $subject, $body, $cabeceras);
}

function parametrosValidos($parms, $campos){
    $out = true;
    foreach ($campos as $campo){
        if ($out)
            $out = isset($parms[$campo]) && trim($parms[$campo])!="";
    }
    return ($out);
}

function badEnd($htmlError, $output){
    header("HTTP/1.1 ".$htmlError);
    echo (json_encode($output));
    die();
}
?>
