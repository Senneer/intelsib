'use strict';

var feedback = function feedback() {
  var selectors = {
    name: $('.form__input._name'),
    phone: $('.form__input._phone'),
    email: $('.form__input._email'),
    submit: $('.form__submit'),
    form: $('.form')
  };

  var buttons = {
    order: $('.order-btn'),
    close: $('.message__close-btn._close'),
    closeSuccess: $('.message__close-btn._close-success'),
    closeError: $('.message__close-btn._close-error')
  };

  var windows = {
    overlay: $('.overlay'),
    message: $('.message._main'),
    messageSuccess: $('.message._success'),
    messageError: $('.message._error')
  };

  windows.message.on('click', function (e) {
    e.stopPropagation();
  });

  buttons.order.on('click', function () {
    windows.overlay.fadeIn();
    windows.message.fadeIn();
  });

  buttons.close.on('click', function () {
    windows.overlay.fadeOut();
  });

  buttons.closeSuccess.on('click', function () {
    windows.messageSuccess.fadeOut();
  });

  buttons.closeError.on('click', function () {
    windows.messageError.fadeOut();
    windows.overlay.on('click', function () {
      windows.overlay.fadeOut();
    });
    windows.messageError.on('click', function (e) {
      e.stopPropagation();
    });
  });

  windows.overlay.on('click', function () {
    windows.overlay.fadeOut();
    windows.messageSuccess.fadeOut();
  });

  selectors.phone.mask('+7 (000) 000 00 00');

  selectors.form.validate({
    rules: {
      name: "required",
      phone: {
        required: true,
        minlength: 18
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: "Заполните поле!",
      phone: {
        required: "Заполните поле!",
        minlength: "Некорректный номер телефона!"
      },
      email: {
        required: "Заполните поле!",
        email: "Некорректный email!"
      }
    }
  });

  selectors.form.on('submit', function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      datType: 'json',
      url: './mail.php',
      data: {
        name: selectors.name.val(),
        phone: selectors.phone.val(),
        email: selectors.email.val()
      },
      success: function success(data) {
        if (data.status === true) {
          windows.message.fadeOut();
          windows.messageSuccess.fadeIn();
        } else {
          windows.overlay.unbind('click');
          windows.messageError.fadeIn();
        }
      }
    });
  });
};

$(document).ready(function () {
  feedback();
});