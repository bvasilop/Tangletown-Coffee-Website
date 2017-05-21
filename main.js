
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
  /*  // Modal popup section
       $('#demo').on('show.bs.modal', function (event) {
           var button = $(event.relatedTarget); // Button that triggered the modal
           var title = button.data('title'); // Extract info from data-* attributes
           var imgSrc = button.data('imgsrc');
           var imageDescription = button.data('description');

           // Update the modal's content. We'll use jQuery here.
           var modal = $(this);
           modal.find('.modal-title').html(title);
           var modalBody = modal.find('.modal-body');
           modalBody.empty();
           var modalDescription = $("<p class='image-description'>").html(imageDescription).appendTo(modalBody);
       });*/

});
