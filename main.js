$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();
  // Added smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Used jQuery's animate() method to add smooth page scroll
      // Used (900) milliseconds for how long it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})
// Added Google Maps function
function myMap() {
var tangletown = new google.maps.LatLng(47.668673, -122.333144);
var mapProp = {center:tangletown, zoom:15, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Tangletown Coffee Roasters</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Tangletown Coffee Roasters</b>, located in <b>Green Lake, Seattle, Washington</b>, is a coffee ' +
            'roasting facility and coffee house founded in 2000 by John Doe of Seattle, Washington. '+
            'Tangletown Coffee Roasters offers premium roasted coffee from coastal regions '+
            ' of Jamaica, Ecuador, and the Sumatra regions of western Indonesia. '+
            ' Tangletown coffee is served in some of the finest coffee houses '+
            'and restaurants from all over the world. </p>'+
            '</div>'+
            '</div>';
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        var marker = new google.maps.Marker({
          position: tangletown,
          map: map,
          title: 'Tangletown Coffee Roasters'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }
