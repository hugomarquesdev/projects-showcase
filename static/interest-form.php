<?php
header("Access-Control-Allow-Origin: *");      
header("Access-Control-Allow-Headers:
{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if (isset($_POST)) {
  $mail = new PHPMailer(TRUE);
  
  $username = $_POST['name'];
  $usersurname = $_POST['surname'];
  $userphone = $_POST['phone'];
  $useremail = $_POST['email'];
  $usercity = $_POST['city'];
  $userinterest = $_POST['interest'];
  $usersource = $_POST['source'];
  $usermessage = wordwrap($_POST['message'], 125);
  $usermessage = htmlentities($usermessage);
  $usermessage = nl2br($usermessage);
  $projectForm = $_POST['projectForm'];


  try {
	  if(!filter_var($useremail, FILTER_VALIDATE_EMAIL)){
	    echo 'Email inválido.';
	    exit;
	  }
      // Server settings
      $mail->IsSMTP();
      $mail->Host = "pontourbano.pt";
      $mail->SMTPAuth = true;
      $mail->SMTPSecure = "ssl";
      $mail->Port = 465;
      $mail->Username = "newsletter@pontourbano.pt";
      $mail->Password = "1ponto#urbano";
      
      // Recipients
      $mail->setFrom('noreply@pontourbano.pt', 'noreply');
      $mail->addAddress('comercial@pontourbano.pt', 'Ponto Urbano');
      $mail->addReplyTo($useremail, $username);
    
      // Content
      $mail->CharSet = 'UTF-8';
      $mail->isHTML(true);
      $mail->WordWrap = 50;
      $mail->Subject = "Novo contacto realizado no website por {$username} | Ponto Urbano";
      $mail->Body = "
      Acabou de receber uma mensagem de contacto através de pontourbano.pt<br/>
      _________________________________________________________<br/><br/>
      <b>Nome:</b> {$username}<br/><br/>
      <b>Apelido:</b> {$usersurname}<br/><br/>
      <b>Telefone:</b> {$userphone}<br/><br/>
      <b>Email:</b> {$useremail}<br/><br/>
      <b>Cidade:</b> {$usercity}<br/><br/>
      <b>Através do formulário do projeto:</b> {$usersource}<br/><br/>
      <b>Interesse:</b> {$userinterest}<br/><br/>
      <b>Mensagem:</b> {$usermessage}<br/><br/>
      ";
      $mail->send();
      
        echo 'success';
      exit;
  }
  catch (Exception $e)
  {
      /* PHPMailer exception. */
      echo $e->errorMessage();
  }
  catch (\Exception $e)
  {
      /* PHP exception (note the backslash to select the global namespace Exception class). */
      echo $e->getMessage();
  }

}