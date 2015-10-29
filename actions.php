<?php
	/*	escape_chars	очищает строку от инъекций кода
	 *  getbool			получает из строки булевую
	 *  checknumber		проверяет номер телефона
	 * */

	header('Content-Type: text\nhtml; charset=UTF-8', true);
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text\nplain; charset=UTF-8' . "\r\n";
	$headers .= 'From: SRO' . "\r\n";

	//очищает строку от инъекций кода
	function escape_chars($strinput){
		if(is_array($strinput))
			return "";
		if(!empty($strinput) && is_string($strinput)) {
			$strinput = str_replace(array('\\', "\0", "\n", "\r", "'", '"', "\x1a",'<','>'), array('\\\\', '\\0', '\\n', '\\r', "\\'", '\\"', '\\Z','&gt;','&lt;'), $strinput);
			return htmlspecialchars(trim($strinput));
		}
	}
	//получает из строки булевую
	function getbool($boolstr){
		$boolstr = filter_var($boolstr, FILTER_VALIDATE_BOOLEAN);
		return $boolstr;
	}
	//проверяет номер телефона
	function checknumber($num){
		$arrayreplace = array("-","(",")"," ");
		$num = str_replace($arrayreplace,"",$num);
		$result = preg_match('/^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/', $num, $res);
		if ($num == '')
			$result = 0;
		return $result;
	}
	
	//действие получаемое из формы
	$action = escape_chars($_POST['action']);
	//емейл
	$email = 'prg2.promocity.ekb@yandex.ru';
	
	//форма, которая на странице слева
	if ($action == 'sro_form'){
		//получаем данные с  формы
		$sro_name = escape_chars($_POST['sro_name']);
		$sro_tel = escape_chars($_POST['sro_tel']);
		$sro_email = escape_chars($_POST['sro_email']);
		//проверка данных
		if ($sro_name == '') {
			$errormessage = 'Пожалуйста, укажите Ваше имя.';
		} else {
			if ($sro_tel == ''|| checknumber($sro_tel)==0){
				$errormessage = 'Пожалуйста, укажите номер телефона.';
			} else {
				if ($sro_email == ''){
					$errormessage = 'Пожалуйста, укажите e-mail.';
				}
			}
		}
		//формирование емейла
		if ($sro_name !='' && $sro_tel !='' && $sro_email !='' && checknumber($sro_tel)==1){
			$mail_message = "Заявка на допуск к СРО от лица:\n";
			$mail_message .="Имя: ".$sro_name."\n";
			$mail_message .="Телефон: ".$sro_tel."\n";
			$mail_message .="E-Mail: ".$sro_email."\n";
			mail($email, 'Заявка на допуск', $mail_message, $headers);
			$errormessage = "Заявка успешно отправлена.";
		}
	//форма, где дополгительные услуги
	} else if ($action == 'custom_servise_form'){
		//получаем данные с  формы
		$custom_servise_name = escape_chars($_POST['custom_servise_name']);
		$custom_servise_tel = escape_chars($_POST['custom_servise_tel']);
		$custom_servise_email = escape_chars($_POST['custom_servise_email']);
		$custom_servise_selected = escape_chars($_POST['custom_servise_selected']);
		//проверка данных
		if ($custom_servise_name == '') {
			$errormessage = 'Пожалуйста, укажите Ваше имя.';
		} else {
			if ($custom_servise_tel == ''|| checknumber($custom_servise_tel)==0){
				$errormessage = 'Пожалуйста, укажите номер телефона.';
			} else {
				if ($custom_servise_email == ''){
					$errormessage = 'Пожалуйста, укажите e-mail.';
				}
			}
		}
		if ($custom_servise_selected == 'Тип деятельности'){
			$custom_servise_selected = 'Не указано';
		}
		//формирование емейла
		if ($custom_servise_name !='' && $custom_servise_tel !='' && $custom_servise_email !='' && checknumber($custom_servise_tel)==1){
			$mail_message = "Заказ доп. услуги СРО от лица:\n";
			$mail_message .="Имя: ".$custom_servise_name."\n";
			$mail_message .="Телефон: ".$custom_servise_tel."\n";
			$mail_message .="E-Mail: ".$custom_servise_email."\n";
			$mail_message .="Тип деятельности: ".$custom_servise_selected."\n";
			mail($email, 'Заказ доп. услуги', $mail_message, $headers);
			$errormessage = "Заказ успешно отправлен.";
		}
	//форма, вызывающаяся первой кнопкой
	} else if ($action == 'order_form'){
		//получаем данные с  формы
		$order_form_name = escape_chars($_POST['order_form_name']);
		$order_form_tel = escape_chars($_POST['order_form_tel']);
		$order_form_email = escape_chars($_POST['order_form_email']);
		//проверка данных
		if ($order_form_name == '') {
			$errormessage = 'Пожалуйста, укажите Ваше имя.';
		} else {
			if ($order_form_tel == ''|| checknumber($order_form_tel)==0){
				$errormessage = 'Пожалуйста, укажите номер телефона.';
			} else {
				if ($custom_servise_email == ''){
					$errormessage = 'Пожалуйста, укажите e-mail.';
				}
			}
		}
		//формирование емейла
		if ($order_form_name !='' && $order_form_tel !='' && $order_form_email !='' && checknumber($order_form_tel)==1){
			$mail_message = "Заявка на допуск к СРО от лица:\n";
			$mail_message .="Имя: ".$order_form_name."\n";
			$mail_message .="Телефон: ".$order_form_tel."\n";
			$mail_message .="E-Mail: ".$order_form_email."\n";
			mail($email, 'Заявка на допуск', $mail_message, $headers);
			$errormessage = "Заявка успешно отправлена.";
		}
	//форма калькулятора
	} else if ($action == 'calc_form'){
		//получаем данные с  формы
		$calc_name = escape_chars($_POST['calc_name']);
		$calc_tel = escape_chars($_POST['calc_tel']);
		$calc_email = escape_chars($_POST['calc_email']);
		$calc_price_result = escape_chars($_POST['calc_price_result']);
		$calc_select_1 = escape_chars($_POST['calc_select_1']);
		$calc_select_2 = escape_chars($_POST['calc_select_2']);
		$calc_select_3 = escape_chars($_POST['calc_select_3']);
		$calc_select_4 = escape_chars($_POST['calc_select_4']);
		//проверка данных
		if ($calc_select_1 == 'Тип деятельности' || $calc_select_2 == 'Сумма ген. подряда'){
			$calc_price_result = 'Неизвестно';
		}
		if ($calc_select_1 == 'Тип деятельности'){
			$calc_select_1 = 'Не указано';
		}
		if ($calc_select_2 == 'Сумма ген. подряда'){
			$calc_select_2 = 'Не указано';
		}
		if ($calc_select_3 == 'Опасность работ'){
			$calc_select_3 = 'Не указано';
		}
		if ($calc_select_4 == 'Тип организации'){
			$calc_select_4 = 'Не указано';
		}
		if ($calc_name == '') {
			$errormessage = 'Пожалуйста, укажите Ваше имя.';
		} else {
			if ($calc_tel == ''|| checknumber($calc_tel)==0){
				$errormessage = 'Пожалуйста, укажите номер телефона.';
			} else {
				if ($calc_email == ''){
					$errormessage = 'Пожалуйста, укажите e-mail.';
				}
			}
		}
		//формирование емейла
		if ($calc_name !='' && $calc_tel !='' && $calc_email !='' && checknumber($calc_tel)==1){
			$mail_message = "Заказ услуги СРО от лица:\n";
			$mail_message .="Имя: ".$calc_name."\n";
			$mail_message .="Телефон: ".$calc_tel."\n";
			$mail_message .="E-Mail: ".$calc_email."\n";
			$mail_message .="Стоимость: ".$calc_price_result."\n";
			$mail_message .="Тип деятельности: ".$calc_select_1."\n";
			$mail_message .="Сумма ген. подряда: ".$calc_select_2."\n";
			$mail_message .="Опасность работ: ".$calc_select_3."\n";
			$mail_message .="Тип организации: ".$calc_select_4."\n";
			mail($email, 'Заказ услуги', $mail_message, $headers);
			$errormessage = "Заказ успешно отправлен.";
		}
	} else {
		$errormessage = "Не верное действие.";
	}
	echo $errormessage;
?>