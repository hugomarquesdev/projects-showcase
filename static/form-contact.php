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
  $usermessage = wordwrap($_POST['message'], 125);
  $usermessage = htmlentities($usermessage);
  $usermessage = nl2br($usermessage);


  try {
	 if(!filter_var($useremail, FILTER_VALIDATE_EMAIL)){
	   echo 'Email inválido.';
	   exit;
	 }
    if($usermessage != ""){
	  if($username=="" || !preg_match("/^[a-zA-Z ]*$/",$username)){
        echo 'Dados incompletos para a mensagem. ';
		return;
      }
      // Server settings
    //   $mail->IsSMTP();
    //   $mail->Host = "pontourbano.pt";
    //   $mail->SMTPAuth = true;
    //   $mail->SMTPSecure = "ssl";
    //   $mail->Port = 465;
    //   $mail->Username = "newsletter@pontourbano.pt";
    //   $mail->Password = "1ponto#urbano";

        $mail->IsSMTP();                   
        $mail->Host = "mail.invisual.pt";  
        $mail->SMTPAuth = true;     
        $mail->SMTPSecure = "ssl"; 
        $mail->Port = 465;   
        $mail->Username = "suporte@invisual.pt";
        $mail->Password = "k7pQP9dI1A@v";
      
      // Recipients
    //   $mail->setFrom('noreply@pontourbano.pt', 'noreply');
    //   $mail->addAddress('geral@pontourbano.pt', 'Ponto Urbano');
        $mail->setFrom('noreply@invisual.pt', 'noreply');
        $mail->addAddress('suporte@invisual.pt', 'Ponto Urbano');
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
      <b>Último Nome:</b> {$usersurname}<br/><br/>
      <b>Telefone:</b> {$userphone}<br/><br/>
      <b>Cidade:</b> {$usercity}<br/><br/>
      <b>Email:</b> {$useremail}<br/><br/>
      <b>Mensagem:</b> {$usermessage}<br/><br/>
      ";
      $mail->send();
    }
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