function initMap() {
  var element = document.querySelector('.map')
  var options = {
  zoom: 10,
  center: {lat: 34.8573139, lng: -111.7863628}
  };
          
  var map = new google.maps.Map(element, options);
       
  var marker = new google.maps.Marker({
    position: {lat: 34.8573139, lng: -111.7863628},
    map: map
    });     
  }