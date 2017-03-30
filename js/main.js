/*!
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }

  // Your custom JavaScript goes here
})();
//bootstrap map
<script>
  function initMap() {

    google.maps.event.addDomListener(window, 'load', initialize);
      var var_location = new google.maps.LatLng(41.888560, -87.635427);
      var var_mapoptions = {
          center: var_location,
          zoom: 14
      };
      var var_marker = new google.maps.Marker({
          position: var_location,
          map: var_map,
          title: "1871 Chicago"
      });
      var var_map = new google.maps.Map(document.getElementById("map-container"),
          var_mapoptions);
      var_marker.setMap(var_map);
  }
  google.maps.event.addDomListener(window, 'load', initMap);
</script>




//complicated google maps map
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBoX8iBky-4a_X8sfhw_Q6FjUBzK68bIL4&callback=initMap"  type="text/javascript"></script>
      <script>
      function initMap() {

        var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map-container'), {
      center: {lat: -41.888560, lng: -87.635427},
      zoom: 14
    });
  }

  // Search for Google's office in Australia.
var request = {
location: map.getCenter(),
radius: '500',
query: '1871 Chicago'
};

var service = new google.maps.places.PlacesService(map);
service.textSearch(request, callback);
}

// Checks that the PlacesServiceStatus is OK, and adds a marker
// using the place ID and location from the PlacesService.
function callback(results, status) {
if (status == google.maps.places.PlacesServiceStatus.OK) {
var marker = new google.maps.Marker({
 map: map,
 place: {
   placeId: results[0].place_id,
   location: results[0].geometry.location
 }
});
}
}
