
$(document).on('ready', function(){
    // Form validation
    $('#name').validate({
        submitHandler: function(form) {
            // If form is valid, submit it!
            form.submit();
        },
        rules: {
            "your-name": {
                required: true,
                maxlength: 128,
                digits: false
            }

        }
    });
    $('#email').validate({
        submitHandler: function(form) {
            // If form is valid, submit it!
            form.submit();
        },
        rules: {
            "your-email": {
                required: true,
                maxlength: 128,
                digits: false
              }

          }
      });
    // Tooltips
    $('label span.glyphicon').tooltip();
});
