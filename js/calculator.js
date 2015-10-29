function calculate(selected_element){
	//компенсационный фонд
	//str_ - строительство
	//pro_ - проектирование
	//izi_ - изыскание
	var str_1 = '300 000 РУБ';		//до 10 млн
	var str_2 = '500 000 РУБ';		//до 60 млн
	var str_3 = '1 000 000 РУБ';	//до 500 млн
	var str_4 = '2 000 000 РУБ';	//до 3 млрд
	var str_5 = '3 000 000 РУБ';	//до 10 млрд
	var str_6 = '10 000 000 РУБ';	//более 10 млд
	var pro_1 = '150 000 РУБ';		//до 5 млн
	var pro_2 = '250 000 РУБ';		//до 25 млн
	var pro_3 = '500 000 РУБ';		//до 50 млн
	var pro_4 = '1 000 000 РУБ';	//до 300 млн
	var pro_5 = '1 500 000 РУБ';	//более 300 млн
	var izi_1 = '150 000 РУБ';		//для СРО изыскателя, всегда это значение
	var price_none = '0 РУБ';	//значение, когда ничего не выбрано
		
	//поля формы
	var calc_select_1 = $('#calc-select-1 option:selected').index();
	var calc_select_2 = $('#calc-select-2').find('option:selected').val();
	
	//сначала все скрываем во втором селекте
	$("#calc-select-2").children('option').hide();
	$("#calc-select-2").children('option[value="none"]').show();
	
	//значение стоимости
	var price_result = price_none;
	//поле куда заносить стоимость
	var price_result_field = $('#calc-price-result');
	
	//открываем только нужные селекты во втором поле
	if (calc_select_1 == 1){
		$("#calc-select-2").children('option[value="str1"]').show();
		$("#calc-select-2").children('option[value="str2"]').show();
		$("#calc-select-2").children('option[value="str3"]').show();
		$("#calc-select-2").children('option[value="str4"]').show();
		$("#calc-select-2").children('option[value="str5"]').show();
		$("#calc-select-2").children('option[value="str6"]').show();
	} else if (calc_select_1 == 2){
		$("#calc-select-2").children('option[value="pro1"]').show();
		$("#calc-select-2").children('option[value="pro2"]').show();
		$("#calc-select-2").children('option[value="pro3"]').show();
		$("#calc-select-2").children('option[value="pro4"]').show();
		$("#calc-select-2").children('option[value="pro5"]').show();
	} else if (calc_select_1 == 3){
		//ничего не появляется
	}
	//если меняем первую опцию, то вторая обнуляется
	if (selected_element == 1){
		$("#calc-select-2").val('none').prop('selected', true);
	}
	//достаем нужное значение и кладем его в поле для цены
	if (selected_element == 2){
		switch (calc_select_2){
			case 'str1':
				price_result = str_1;
				break;
			case 'str2':
				price_result = str_2;
				break;
			case 'str3':
				price_result = str_3;
				break;
			case 'str4':
				price_result = str_4;
				break;
			case 'str5':
				price_result = str_5;
				break;
			case 'str6':
				price_result = str_6;
				break;
			case 'pro1':
				price_result = pro_1;
				break;
			case 'pro2':
				price_result = pro_2;
				break;
			case 'pro3':
				price_result = pro_3;
				break;
			case 'pro4':
				price_result = pro_4;
				break;
			case 'pro5':
				price_result = pro_5;
				break;
			case 'none':
				price_result = price_none;
				break;
			}
	}
	//если выбрано СРО изыскателя
	if (calc_select_1 == 3){
		price_result = izi_1;
	}
	//присваиваем полю в документе итоговую цену
	price_result_field.text(price_result);
	
}