
$(document).ready(function () {
  $('#signup').validate({
    rules: {
      fname: {
        required: true,
        rangelength: [3, 15]
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
      }
    }, // end rules
    messages: {
      fname: {
        required: "Please type your first name.",
        rangelength: "Your first name is at least 3 letters long, retard"
      },
      lname: {
        required: "Please type your first name.",
        rangelength: "Your last name is at least 2 letters long, retard"
      },
      email: {
        required: "Please supply your e-mail address.",
        email: "This is not a valid e-mail address."
      },
      confirm_email: {
        equalTo: 'Your emails do not match, dumbass.. Try again'
      },
      phone: {
        required: 'Please type a valid phone number',
        rangelength: 'Password must be between 8 and 16 characters long.'
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