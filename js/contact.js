
$(document).ready(function () {
  $('#signup').validate({
    rules: {
      fname: {
        required: true,
        rangelength: [2, 15]
      },
      lname: {
        required: true,
        rangelength: [2, 15]
      },
      email: {
        required: true,
        email: true
      },
      confirm_email: {
        equalTo: '#email'
      },
      phone: {
        required: true,
        digits: true,
        phoneUS: true
      },
      confirm_phone: {
        equalTo: '#phone'
      }
    }, // end rules
    messages: {
      fname: {
        required: "Please type your first name.",
        rangelength: "Please type at least 2 letters"
      },
      lname: {
        required: "Please type your first name.",
        rangelength: "Your last name is at least 2 letters long"
      },
      email: {
        required: "We need your e-mail address.",
        email: "This is not a real e-mail address."
      },
      confirm_email: {
        equalTo: 'Your emails do not match'
      },
      phone: {
        required: 'We need a valid phone number',
        phone: "that is not a real phone number"
      },
      confirm_phone: {
        required: 'please confirm your number',
        equalTo: "your phone number doesn\'t match"
      }

    }, // end messages
    errorPlacement: function (error, element) {
      if (element.is(":radio") || element.is(":checkbox")) {
        error.appendTo(element.parent());
      } else {
        error.insertAfter(element);
      }
    } // end errorPlacement
  }); // end validate()
}); // end ready