function initMap() {
  // map options
  let options = {
    zoom: 6,
    center: { lat: 26.01128, lng: -80.142967 },
  };
  //   creates map
  let map = new google.maps.Map(document.getElementById("map"), options);

  google.maps.event.addListener(map, "click", function (event) {
    addMarker({ coords: event.latLng });
  });
  //   creates markers
  let markers = [
    {
      coords: { lat: 26.01128, lng: -80.142967 },
      content: `<h1>Hollywood,Fl</h1>`,
    },
    {
      coords: { lat: 25.761681, lng: -80.191788 },
      content: `<h1>Miami,Fl</h1>`,
    },
    {
      coords: { lat: 28.538336, lng: -81.379234 },
      content: `<h1>Orlando,Fl</h1>`,
    },
  ];

  //   Loop through markers
  for (let i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  // Add Marker
  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    });
    // checks for custom icon image
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    if (props.content) {
      let infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });
      marker.addListener("click", function () {
        infoWindow.open(map, marker);
      });
    }
  }
}
