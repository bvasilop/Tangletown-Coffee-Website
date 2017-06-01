// Added Google Maps function
"use strict";
function myMap() {
var tangletown = new google.maps.LatLng(47.668673, -122.333144);
var mapProp = {
      center:tangletown,
      zoom:15,
      scrollwheel:false,
      draggable:false,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h5 id="firstHeading" class="firstHeading">Tangletown Coffee Roasters</h5>'+
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

    /*  $(document).ready(function(){
      $(window).resize(function() {
        // empty out the map div
        $("googleMap").empty();
        function myMap() {
        var tangletown = new google.maps.LatLng(47.668673, -122.333144);
        var mapProp = {center:tangletown, zoom:15, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
                var contentString = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h5 id="firstHeading" class="firstHeading">Tangletown Coffee Roasters</h5>'+
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

          // call the code that generated the map again in here
      });

/*google.maps.event.addDomListener(window, 'load', myMap);
google.maps.event.addDomListener(window, "resize", function() {
 var center = map.getCenter();
 google.maps.event.trigger(map, "resize");
 map.setCenter(center);
});*/
