<?php
require("class.phpmailer.php");
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPDebug = 2; // hata ayiklama: 1 = hata ve mesaj, 2 = sadece mesaj
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl';
$mail->Host = 'smtp.gmail.com';
$mail->Port = 465;
$mail->IsHTML(true);
$mail->SetLanguage("tr", "phpmailer/language");
$mail->CharSet  ="utf-8";
$mail->Username = "diegowildfire@gmail.com"; // Mail adresimizin kullanicı adi
$mail->Password = "10051995z"; // Mail adresimizin sifresi
$mail->SetFrom("diegowildfire@gmail.com", $_POST['email']); // Mail attigimizda gorulecek ismimiz
$mail->AddAddress("burak.karahan@mail.ru"); // Maili gonderecegimiz kisi yani alici
$mail->Subject = "İletişim Formu"; // Konu basligi
$mail->Body = $_POST['message']; // Mailin icerigi
if(!$mail->Send()){
	echo "Mailer Error: ".$mail->ErrorInfo;
} else {
	echo "Mesaj gonderildi";
}
?>