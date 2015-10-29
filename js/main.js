$(document).ready(function(){
    PopUpHide1();
    PopUpHide2();
    PopUpHide3();
	PopUpCompliteHide();
	calculate(0);
  
    $('.sro-order').validate({
   rules: {
     email: {
        required: true,
        email: true
     },
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true,
      minlength: 11,
      maxlength: 11,
      digits: true
     },
     password: {
        required: true,
        rangelength:[8,16]
     },
     confirm_password: {equalTo:'#password'},
     spam: "required"
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ваше имя.",
       minlength: "Имя не должно быть короче 3 символов."
     },
      email: {
         required: "Пожалуйста введите email адрес.",
         email: "Неверный формат email адреса."
       },
       tel: {
         required: "Пожалуйста введите телефон.",
         minlength: "Телефон должен содержать 11 символов начиная 8.",
         digits: "Телефонный номер должен содержать только цифры."
       },
      password: {
        required: 'Please type a password',
        rangelength: 'Password must be between 8 and 16 characters long.'
      },
      confirm_password: {
        equalTo: 'The two passwords do not match.'
      }
   }
  }); /* close sro-order validate */
  
  $('.order-form').validate({
   rules: {
     email: {
        required: true,
        email: true
     },
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true,
      minlength: 11,
      maxlength: 11,
      digits: true
     },
     password: {
        required: true,
        rangelength:[8,16]
     },
     confirm_password: {equalTo:'#password'},
     spam: "required"
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ваше имя.",
       minlength: "Имя не должно быть короче 3 символов."
     },
      email: {
         required: "Пожалуйста введите email адрес.",
         email: "Неверный формат email адреса."
       },
       tel: {
         required: "Пожалуйста введите телефон +79.. ... .. ..",
         minlength: "Телефон должен содержать 11 символов начиная 8.",
         digits: "Телефонный номер должен содержать только цифры."
       },
      password: {
        required: 'Please type a password',
        rangelength: 'Password must be between 8 and 16 characters long.'
      },
      confirm_password: {
        equalTo: 'The two passwords do not match.'
      }
   }
  });  /* close order-form validate */
  
     $('.calc-pop-up').validate({
   rules: {
     email: {
        required: true,
        email: true
     },
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true,
      minlength: 11,
      maxlength: 11,
      digits: true
     },
     password: {
        required: true,
        rangelength:[8,16]
     },
     confirm_password: {equalTo:'#password'},
     spam: "required"
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ваше имя.",
       minlength: "Имя не должно быть короче 3 символов."
     },
      email: {
         required: "Пожалуйста введите email адрес.",
         email: "Неверный формат email адреса."
       },
       tel: {
         required: "Пожалуйста введите телефон +79.. ... .. ..",
         minlength: "Телефон должен содержать 11 символов начиная 8.",
         digits: "Телефонный номер должен содержать только цифры."
       },
      password: {
        required: 'Please type a password',
        rangelength: 'Password must be between 8 and 16 characters long.'
      },
      confirm_password: {
        equalTo: 'The two passwords do not match.'
      }
   }
  }); /* close calc pop-up validate */
  
   $('.custom-servise').validate({
   rules: {
     email: {
        required: true,
        email: true
     },
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true,
      minlength: 11,
      maxlength: 11,
      digits: true
     },
     password: {
        required: true,
        rangelength:[8,16]
     },
     confirm_password: {equalTo:'#password'},
     spam: "required"
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ваше имя.",
       minlength: "Имя не должно быть короче 3 символов."
     },
      email: {
         required: "Пожалуйста введите email адрес.",
         email: "Неверный формат email адреса."
       },
       tel: {
         required: "Пожалуйста введите телефон +79.. ... .. ..",
         minlength: "Телефон должен содержать 11 символов начиная 8.",
         digits: "Телефонный номер должен содержать только цифры."
       },
      password: {
        required: 'Please type a password',
        rangelength: 'Password must be between 8 and 16 characters long.'
      },
      confirm_password: {
        equalTo: 'The two passwords do not match.'
      }
   }
  }); /* close custom-service validate */
    
  $("body").keypress(function(e) {
    if (e.which == 0) {
      PopUpHide1();
      PopUpHide2();
      PopUpHide3();
    return false;
    }
  });
    
});
function PopUpShow1() {
    $("#popup1").show();
}
function PopUpHide1() {
    $("#popup1").hide();
}
function PopUpShow2() {
    $("#popup2").show();
}
function PopUpHide2() {
    $("#popup2").hide();
}
function PopUpShow3() {
    $("#popup3").show();
}
function PopUpHide3() {
    $("#popup3").hide();
}
function PopUpCompliteShow() {
    $("#popup-complite").show();
}
function PopUpCompliteHide() {
    $("#popup-complite").hide();
    $("#popup1").hide();    
    $("#popup2").hide();    
    $("#popup3").hide();    
}