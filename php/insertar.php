<?php

    include 'conexion.php';

    $var = $_POST["#var"];

    $insertar = "INSERT INTO table(form) VALUES('$var')";

    $resultado = mysqli_query($conexion, $insertar);

    if(!$resultado){
        echo 'Error al registrar persona';
    }else{
        echo 'Persona registrada con exito';
    }

    mysqli_close($conexion);

?>