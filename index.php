<?php
if (isset($_POST['fullname']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['message'])) {
	$message = '<html><body>';
	$message .= '<h2>Đăng Ký Vay Vốn</h2>';
	$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
	$message .= "<tr style='background: #eee;'><td><strong>Họ và Tên:</strong> </td><td>" . strip_tags($_POST['fullname']) . "</td></tr>";
	$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
	$message .= "<tr><td><strong>Số Điện Thoại:</strong> </td><td>" . strip_tags($_POST['phone']) . "</td></tr>";
	$message .= "<tr><td><strong>Nội Dung:</strong> </td><td>" . htmlentities($_POST['message']) . "</td></tr>";
	$message .= "</table>";
	$message .= "</body></html>";
	require 'SendMail.php';
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="application-name" content="vaynhanhtay">
	<meta name="author" content="Valen King">
	<meta name="description" content="">
	<meta name="keywords" content="cho vay,ngân hàng,tín dụng,tín chấp,thế chấp,vay nhanh,bảo hiểm,bảo hiểm nhân thọ,manulife,võ thị sáu,võ thành hảo,biên hòa,đồng nai,nhanh tay,lãi suất,lãi suất thấp,ngân hàng quốc dân,vietcombank,agribank,ncs">
	<meta name="Resource-type" content="Document">

	<title>Vay Nhanh Tay</title>

	<!-- Favicon -->
	<link rel="icon" type="image/x-icon" href="public/images/logo.ico">

	<!-- Script -->
	<script src="http://code.jquery.com/jquery-2.2.3.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>
	<script src="public/js/jquery.flexslider-min.js"></script>
	<script src="public/js/typed.min.js"></script>
	<script src="public/js/jquery.smooth-scroll.min.js"></script>
	<script src="public/js/classie.js"></script>
</head>
<body>
	<div id="app"></div>
	<script src="bundle.js"></script>
</body>
</html>