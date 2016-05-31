<?php
if (isset($_POST['fullname']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['message']) && isset($_POST['g-recaptcha-response'])) {
	require_once __DIR__.'/Captcha/autoload.php';
	$recaptcha = new \ReCaptcha\ReCaptcha('6Ld1QyETAAAAAHg34mIKpAkPXIbG3kqMU6CeLVt4');
	$resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);
	if ($resp->isSuccess()) {
		require 'PHPMailer/SendMail.php';
	} else {
		exit(json_encode(array('success'=>false)));
	}
}
?>