<?php
// Carga el archivo de conexion
include_once('dbConexion.php');

// Recibo datos
$idUsuario = $_POST['idUsuario'];
$Password = $_POST['Password'];

$conectar = conn();
$query = mysqli_query($conectar, "SELECT * FROM usuario WHERE idUsuario = '$idUsuario' AND Password = '$Password'");
$result = mysqli_num_rows($query);

if ($result > 0) {
  header("Location: ./inicio/inicio.html");
  exit();
} else {
  echo "<script>alert('Usuario o contraseña no válidos, inténtelo nuevamente'); window.location='index.html';</script>";
}
?>
