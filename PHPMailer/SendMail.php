<?php
$email = $_POST['email'];
$message = '<html><body>';
$message .= '<h2>Đăng Ký Vay Vốn</h2>';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Họ và Tên:</strong> </td><td>" . strip_tags($_POST['fullname']) . "</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
$message .= "<tr><td><strong>Số Điện Thoại:</strong> </td><td>" . strip_tags($_POST['phone']) . "</td></tr>";
$message .= "<tr><td><strong>Nội Dung:</strong> </td><td>" . htmlentities($_POST['message']) . "</td></tr>";
$message .= "</table>";
$message .= "</body></html>";

require 'PHPMailerAutoload.php';
$mail = new PHPMailer();

$mail->CharSet = "UTF-8";
// set mailer to use SMTP
$mail->IsSMTP();

// As this email.php script lives on the same server as our email server
// we are setting the HOST to localhost
$mail->Host = "smtp.gmail.com";  // specify main and backup server

$mail->Port = 465;// or 587;

$mail->SMTPSecure = 'ssl';

$mail->SMTPAuth = true;     // turn on SMTP authentication

// When sending email using PHPMailer, you need to send from a valid email address
// In this case, we setup a test email account with the following credentials:
// email: send_from_PHPMailer@bradm.inmotiontesting.com
// pass: password
$mail->Username = "quyvuong2404@gmail.com";  // SMTP username
$mail->Password = "konichiwamyhime"; // SMTP password

// $email is the user's email address the specified
// on our contact us page. We set this variable at
// the top of this page with:
// $email = $_REQUEST['email'] ;
$mail->From = $email;
$mail->FromName = $_POST['fullname'];

// below we want to set the email address we will be sending our email to.
$mail->AddAddress("valvuong2201@gmail.com", "Võ Thành Hảo");

// set word wrap to 50 characters
$mail->WordWrap = 50;
// set email format to HTML
$mail->IsHTML(true);

$mail->Subject = "Đăng Ký Vay Vốn";

// $message is the user's message they typed in
// on our contact us page. We set this variable at
// the top of this page with:
$mail->Body    = $message;
$mail->AltBody = $message;

if(!$mail->Send())
{
   echo "Message could not be sent. <p>";
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
} else {
	echo json_encode(array('success'=>true));
	exit();
}
?>