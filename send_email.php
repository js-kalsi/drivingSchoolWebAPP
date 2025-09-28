<?php
header("Access-Control-Allow-Origin: *"); // allow requests from React
header("Content-Type: application/json");

// Get JSON input from React
$data = json_decode(file_get_contents("php://input"), true);

$name = htmlspecialchars($data['name'] ?? '');
$email = htmlspecialchars($data['email'] ?? '');
$message = htmlspecialchars($data['message'] ?? '');

$to = "target@example.com";
$subject = "New Message from $name";

// HTML email body
$body = "
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.5; }
    .container { padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9; }
    .header { font-size: 20px; font-weight: bold; color: #333; margin-bottom: 10px; }
    .content { font-size: 16px; color: #555; }
    .footer { margin-top: 20px; font-size: 14px; color: #999; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>New Contact Form Submission</div>
    <div class='content'>
      <p><strong>Name:</strong> $name</p>
      <p><strong>Email:</strong> $email</p>
      <p><strong>Message:</strong><br>$message</p>
    </div>
    <div class='footer'>Sent from your website</div>
  </div>
</body>
</html>
";

// Headers to send HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: $email" . "\r\n";

if(mail($to, $subject, $body, $headers)){
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}
?>
