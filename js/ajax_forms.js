function OutData(inResultForm){
	//вывод данных об ошибках
	console.log(inResultForm);
}
function sro_form(){	//отправка данных с формы на главной
    $.ajax({
        type: "POST",
        url: "actions.php",
        data: 'action=sro_form'+
              '&sro_name='+$('#sro-name').val()+
              '&sro_tel='+$('#sro-tel').val()+
              '&sro_email='+$('#sro-email').val(),
        success: function(data){
		/*
			Действия для вывода уведовлений
			data - выводимый текст
		*/
			OutData(data);
        }
    });
}
function custom_servise_form(){ //отправка данных с формы которая вызывается кнопкой внизу страницы
	var custom_servise_selected = $('#custom-servise-selected option:selected').val();
	$.ajax({
        type: "POST",
        url: "actions.php",
        data: 'action=custom_servise_form'+
			  '&custom_servise_selected='+custom_servise_selected+
              '&custom_servise_name='+$('#custom-servise-name').val()+
              '&custom_servise_tel='+$('#custom-servise-tel').val()+
              '&custom_servise_email='+$('#custom-servise-email').val(),
        success: function(data){
		/*
			Действия для вывода уведовлений
			data - выводимый текст
		*/
			OutData(data);
        }
    });
}
function order_form(){	//отправка данных с формы на главной
    $.ajax({
        type: "POST",
        url: "actions.php",
        data: 'action=order_form'+
              '&order_form_name='+$('#order-form-name').val()+
              '&order_form_tel='+$('#order-form-tel').val()+
              '&order_form_email='+$('#order-form-email').val(),
        success: function(data){
		/*
			Действия для вывода уведовлений
			data - выводимый текст
		*/
			OutData(data);
        }
    });
}
function calc_form(){	//отправка данных с формы на главной
	var calc_select_1 = $('#calc-select-1 option:selected').val();
	var calc_select_2 = $('#calc-select-2 option:selected').text();
	var calc_select_3 = $('#calc-select-3 option:selected').val();
	var calc_select_4 = $('#calc-select-4 option:selected').val();
	var calc_price_result = $('#calc-price-result').text();
    $.ajax({
        type: "POST",
        url: "actions.php",
        data: 'action=calc_form'+
			  '&calc_price_result='+calc_price_result+
			  '&calc_select_1='+calc_select_1+
			  '&calc_select_2='+calc_select_2+
			  '&calc_select_3='+calc_select_3+
			  '&calc_select_4='+calc_select_4+
              '&calc_name='+$('#calc-name').val()+
              '&calc_tel='+$('#calc-tel').val()+
              '&calc_email='+$('#calc-email').val(),
        success: function(data){
		/*
			Действия для вывода уведовлений
			data - выводимый текст
		*/
			OutData(data);
        }
    });
}

