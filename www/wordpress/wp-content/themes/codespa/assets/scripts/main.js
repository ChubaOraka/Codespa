/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        FastClick.attach(document.body);

        $('[data-toggle="popover"]').popover();

        // JavaScript to be fired on all pages
        $('a[href*="#"]').click(function() {
          if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              var targetOffset = target.offset().top;
              $('html,body').animate({
                scrollTop: targetOffset
              }, 1250);
              return false;
            }
          }
        });
        $('a:not( [class*=orbit], [data-toggle*=popover] )').each(function() {
          var a = new RegExp('/' + window.location.host + '/');
          if(!a.test(this.href)){
            $(this).click(function(event) {
              event.preventDefault();
              event.stopPropagation();
              window.open(this.href, '_blank');
            });
          }
        });
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        UTIL.setupWorldMap();

        $('.banner-home').slick({
          autoplay: true,
          fade: true
        });

        if ($(window).width() > 768) {
          $('.partner-logos').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            slidesToShow: 6,
            slidesToScroll: 1
          });
        } else {
          $('.partner-logos').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1
          });
        }
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 'onEnter', duration: '100%'}});

			// build scenes
			new ScrollMagic.Scene({triggerElement: '.section-header'})
        .setTween('.section-header-banner', {y: '80%', ease: Linear.easeNone})
        .addTo(controller);
      },
      finalize: function() {

      }
    },
    // About
    'about': {
      init: function() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 'onEnter', duration: '100%'}});

						// build scenes
				new ScrollMagic.Scene({triggerElement: '.section-header'})
          .setTween('.section-header-banner', {y: '80%', ease: Linear.easeNone})
          .addTo(controller);
      }
    },
    // Our Work
    'our_work': {
      init: function() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 'onEnter', duration: "100%"}});

						// build scenes
				new ScrollMagic.Scene({triggerElement: '#section-header1'})
          .setTween('#section-header-banner1', {y: '80%', ease: Linear.easeNone})
          .addTo(controller);

        new ScrollMagic.Scene({triggerElement: '#section-header2'})
          .setTween('#section-header-banner2', {y: '80%', ease: Linear.easeNone})
          .addTo(controller);
      }
    },
    // Impact
    'impact': {
      init: function() {
      }
    },
    // Contact
    'contact': {
      init: function() {
        var geoJson = UTIL.codespaContactsGeoJson;

        L.mapbox.accessToken = 'pk.eyJ1IjoibWVkaWF0b29scyIsImEiOiI2NzJjYjQxYmYwMGE3ZjYwMzlkYjI4MmY5ZDZlZjFmOCJ9.IDbHjsoYhSmG9Q19bx_iPg';
        var mapbox_contact = L.mapbox.map('mapbox_contact', 'mapbox.streets').setView([45.027, -42.451],2);
        mapbox_contact.scrollWheelZoom.disable();

        var codespaContactsLayer = L.mapbox.featureLayer().addTo(mapbox_contact);
        codespaContactsLayer.on('layeradd', function(e) {
          var marker = e.layer;
          var feature = marker.feature;
          var popupContent =
            '<strong>' + feature.properties.title + '</strong><br>' +
            '' + feature.properties.description + '';
          marker.bindPopup(popupContent,{
            closeButton: false
          });
        });

        codespaContactsLayer.setGeoJSON(geoJson);
        mapbox_contact.scrollWheelZoom.disable();
        mapbox_contact.whenReady(function(){
          mapbox_contact.fitBounds(codespaContactsLayer.getBounds());
        });
      }
    },
    // Donate
    'donate': {
      init: function() {
        var geoJson = UTIL.codespaProjectsGeoJson;

        L.mapbox.accessToken = 'pk.eyJ1IjoibWVkaWF0b29scyIsImEiOiI2NzJjYjQxYmYwMGE3ZjYwMzlkYjI4MmY5ZDZlZjFmOCJ9.IDbHjsoYhSmG9Q19bx_iPg';
        var mapbox_donate = L.mapbox.map('map_donate', 'mapbox.streets', {zoomControl: true, attributionControl: true}).setView([45.027, -42.451],2);
        mapbox_donate.scrollWheelZoom.disable();

        var codespaDonateLayer = L.mapbox.featureLayer().addTo(mapbox_donate);
        codespaDonateLayer.on('layeradd', function(e) {
          var marker = e.layer;
          var feature = marker.feature;
          var popupContent =
            '<strong>' + feature.properties.title + '</strong><br>' +
            '' + feature.properties.description + '';
          marker.bindPopup(popupContent,{
            closeButton: false
          });
        });

        codespaDonateLayer.setGeoJSON(geoJson);
        mapbox_donate.scrollWheelZoom.disable();
        mapbox_donate.whenReady(function(){
        mapbox_donate.fitBounds(codespaDonateLayer.getBounds());
        });
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    },
    setupWorldMap: function() {
      function removeMapHeader () {
        $(".map-headline").slideUp();
        current_mapbox.off('drag click overlayadd popupopen',removeMapHeader);
      }
      function returnMapHeader () {
        $(".map-headline").slideDown();
        current_mapbox.on('drag click overlayadd popupopen',removeMapHeader);
        codespaProjectsLayer.eachLayer(function(marker) {
          marker.closePopup();
        });
      }

      var controller = new ScrollMagic.Controller();

      var scene_0a =
        new ScrollMagic.Scene({triggerElement: ".section-map", triggerHook: 0})
        .on('start', function () {
          returnMapHeader();
        })
      	.addTo(controller);
      var scene_0b = new ScrollMagic.Scene({triggerElement: ".section-map", triggerHook: 1})
        .on('start', function () {
          returnMapHeader();
        })
      	.addTo(controller);

      var geoJson = UTIL.codespaProjectsGeoJson;

      L.mapbox.accessToken = 'pk.eyJ1IjoibWVkaWF0b29scyIsImEiOiI2NzJjYjQxYmYwMGE3ZjYwMzlkYjI4MmY5ZDZlZjFmOCJ9.IDbHjsoYhSmG9Q19bx_iPg';
      var current_mapbox = L.mapbox.map('map_operations', 'mapbox.streets', {zoomControl: false, attributionControl: false});
      var codespaProjectsLayer = L.mapbox.featureLayer().addTo(current_mapbox);
      codespaProjectsLayer.on('layeradd', function(e) {
        var marker = e.layer;
        var feature = marker.feature;
        var popupContent =
          '<strong>' + feature.properties.title + '</strong><br>' +
          '' + feature.properties.description + '';
        marker.bindPopup(popupContent,{
          closeButton: false
        });
      });
      codespaProjectsLayer.setGeoJSON(geoJson);
      current_mapbox.scrollWheelZoom.disable();
      current_mapbox.whenReady(function(){
        current_mapbox.on('drag click overlayadd popupopen',removeMapHeader);
        current_mapbox.fitBounds(codespaProjectsLayer.getBounds());
      });
    },
    isMobile: {
      Android: function() { return navigator.userAgent.match(/Android/i); },
      BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
      iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
      Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
      Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
      any: function() { return (UTIL.isMobile.Android() || UTIL.isMobile.BlackBerry() || UTIL.isMobile.iOS() || UTIL.isMobile.Opera() || UTIL.isMobile.Windows()); }
    },
    codespaProjectsGeoJson: {
      "type":"FeatureCollection",
      "features":[
        {
          "type":"Feature",
          "properties":{
            "id":"marker-ibjt6reu1",
            "title":"Nicaragua",
            "description":"CODESPA is helping ranchers to grow their cattle-businesses and their incomes in Nicaragua. Learn about more of our projects on the <a href=\"http://www.codespa-america.com/impact\" title=\"Nicaragua\">Our Impact</a> page.",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -85.407314,
              12.642873
            ],
            "type":"Point"
          },
          "id":"cibjt8oc5046gndlxdejobxaq"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-ij1n2pis0",
            "title":"New York",
            "description":"CODESPA is supporting the creation of an endowment fund to provide scholarships for inner-city youth to attend the South Bronx Educational Foundation's transformative educational and life skills programs. Learn about more of our projects on the <a href=\"http://www.codespa-america.com/impact\" title=\"New York\">Our Impact</a> page.",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -73.889917,
              40.839832
            ],
            "type":"Point"
          },
          "id":"8f21c31d2025977ce309b78155c33141"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-ibjt6vs22",
            "title":"Peru",
            "description":"CODESPA is helping to create an alternative education system in rural areas that includes innovative classes in agriculture and rural enterprise development. Learn about more of our projects on the <a href=\"http://www.codespa-america.com/impact\" title=\"Peru\">Our Impact</a> page.",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -74.844307,
              -8.323385
            ],
            "type":"Point"
          },
          "id":"cibjt8oc6046hndlxk8fl0ub5"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-ibjt76zh4",
            "title":"Bolivia",
            "description":"CODESPA is generating sustainable micro-enterprises in the rural tourism industry in the Andean region. Learn about more of our projects on the <a href=\"http://www.codespa-america.com/impact\" title=\"Nicaragua\">Our Impact</a> page.",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -63.566077,
              -17.265901
            ],
            "type":"Point"
          },
          "id":"cibjt8oc9046jndlxq0hbtpwr"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-ibjt7hpp5",
            "title":"Morocco",
            "description":"CODESPA is providing professional formation and labor market insertion to Moroccan women and at-risk youth. Learn about more of our projects on the <a href=\"http://www.codespa-america.com/impact\" title=\"Morocco\">Our Impact</a> page.",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -9.022545,
              29.931009
            ],
            "type":"Point"
          },
          "id":"cibjt8oca046kndlxiolh90u1"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-ibjt7l9i6",
            "title":"DR Congo",
            "description":"CODESPA is providing professional training for at-risk youth in the Democratic Republic of the Congo. Learn about more of our projects on the <a href=\"http://www.codespa-america.com/impact\" title=\"DR Congo\">Our Impact</a> page.",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              21.745679,
              -1.496282
            ],
            "type":"Point"
          },
          "id":"cibjt8ocb046lndlxo4potapw"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-ibjt7ydq8",
            "title":"Vietnam",
            "description":"CODESPA is contributing to the development of local incomes in north Vietnam through the creation of a market for innovative new fertilizer pellets. Learn about more of our projects on the <a href=\"http://www.codespa-america.com/impact\" title=\"Vietnam\">Our Impact</a> page.",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              107.439062,
              16.310996
            ],
            "type":"Point"
          },
          "id":"cibjt8ocd046nndlx55bywkcf"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-ibl10ij51",
            "title":"Colombia",
            "description":"CODESPA is helping Colombian farmers gain the necessary skills and requisite equipment to grow their agro-businesses and incomes. Learn about more of our projects on the <a href=\"http://www.codespa-america.com/impact\" title=\"Colombia\">Our Impact</a> page.",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -72.963384,
              3.370786
            ],
            "type":"Point"
          },
          "id":"cibl28hdh02mpmlkj3yog9hdq"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-igwt9ckr1",
            "title":"Angola",
            "description":"CODESPA is helping farmers’ cooperatives to develop seed banks and grain storage micro-silos to save their harvests. Learn about more of our projects on the <a href=\"http://www.codespa-america.com/impact\" title=\"Colombia\">Our Impact</a> page.",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              13.238525,
              -8.819938
            ],
            "type":"Point"
          },
          "id":"cdd95a0b35d6ca0a17d6db7541914c16"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-igwt7gfy0",
            "title":"Philippines",
            "description":"CODESPA is fostering local development by supporting the improvement of rubber tree farming and the rubber processing industry. Learn about more of our projects on the <a href=\"http://www.codespa-america.com/impact\" title=\"Colombia\">Our Impact</a> page.",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              120.981445,
              14.583583
            ],
            "type":"Point"
          },
          "id":"de601384cf6ce96e386e4a5a9218fa53"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-ibrxy9143",
            "title":"Honduras",
            "description":"CODESPA is training local micro-enterprises and farmers in the production and use of drip-irrigation to improve their crop yields. Learn about more of our projects on the <a href=\"http://www.codespa-america.com/impact\" title=\"Colombia\">Our Impact</a> page.",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -86.923828,
              14.753635
            ],
            "type":"Point"
          },
          "id":"cibryc1in0by7mylto6b4vige"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-ibrxtiss0",
            "title":"Ecuador",
            "description":"CODESPA is strengthening local micro-financial institutions’ capacity to design new products and offer credit to farmers and micro-enterprises in rural areas. Learn about more of our projects on the <a href=\"http://www.codespa-america.com/impact\" title=\"Colombia\">Our Impact</a> page.",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -78.75,
              -1.406108
            ],
            "type":"Point"
          },
          "id":"cibryc1ik0by4myltnxsqxhc5"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-ibrxwrdt1",
            "title":"Guatemala",
            "description":"CODESPA is assisting communities in generating savings and gaining access to financial credit for farm improvements. Learn about more of our projects on the <a href=\"http://www.codespa-america.com/impact\" title=\"Colombia\">Our Impact</a> page.",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -90.100846,
              15.305379
            ],
            "type":"Point"
          },
          "id":"cibryc1il0by5mylt9eluym9p"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-ibrxykfk4",
            "title":"Dominican Republic","description":"CODESPA is working with the European Union to strengthen cooperatives of banana producers in a project aimed at improving production capacity and natural resource management. Learn about more of our projects on the <a href=\"http://www.codespa-america.com/impact\" title=\"Colombia\">Our Impact</a> page.",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -70.290527,
              18.895892
            ],
            "type":"Point"
          },
          "id":"cibryc1io0by8mylt10hqu5k7"
        }
      ],
      "id":"mediatools.700843ed"
    },
    codespaContactsGeoJson: {
      "type":"FeatureCollection",
      "features":[
        {
        "type":"Feature",
        "properties":{
          "id":"marker-iej0r1sb5",
          "title":"R.D. CONGO ",
          "description":"Kinshasa - R.D. Congo<br><a href=\"mailto:gbuglione@codespa.org\">gbuglione@codespa.org</a>",
          "marker-size":"medium",
          "marker-color":"#ef7b22",
          "marker-symbol":""
        },
        "geometry":{
          "coordinates":[
            15.303955,
            -4.335456],
        "type":"Point"
        },
        "id":"129cc5d47469a6e44112a512ff9aa0bb"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-iej0wwt9a",
            "title":"ECUADOR ",
            "description":"D. Ferrán Gelis<br>Quito, Ecuador<br><a href=\"mailto:ecuador@codespa.org\">ecuador@codespa.org</a>",
            "marker-size":"medium",
            "marker-color":"#ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -78.486328,
              -0.131835
            ],
          "type":"Point"
          },
          "id":"2a6472e8b782490b25ca5b082f2a605d"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-iej0v7t58",
            "title":"CARIBBEAN ",
            "description":"D. Manuel Emilio Sena Rivas<br>Santo Domingo, República Dominicana<br><a href=\"mailto:santodomingo@codespa.org\">santodomingo@codespa.org</a>",
            "marker-size":"medium",
            "marker-color":"#ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -69.916992,
              18.478306
            ],
            "type":"Point"
          },
          "id":"2e5c720363a5c0834aaecfe39f0a4001"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-iej0st2k6",
            "title":"VIETNAM ",
            "description":"D. Inés Vázquez<br>Hanoi, Vietnam<br><a href=\"mailto:vietnam@codespa.org\">vietnam@codespa.org</a>",
            "marker-size":"medium",
            "marker-color":"#ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              105.853271,
              21.043491
            ],
            "type":"Point"
          },
          "id":"4103c18d0837ac99da4d10c523cf267f"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-iej0tym97",
            "title":"ANGOLA ",
            "description":"D. Juan Ramón García Molina<br>Luanda, Angola<br><a href=\"mailto:gbraschi@codespa.org\">gbraschi@codespa.org</a>",
            "marker-size":"medium",
            "marker-color":"#ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              13.265991,
              -8.830795
            ],
            "type":"Point"
          },
          "id":"7a696b62bd992573daae494c8e66a94e"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-iej0mnwd2",
            "title":"MOROCCO ",
            "description":"Dña. Iria Corona Oliva López<br>Tanger, Marruecos<br><a href=\"mailto:marruecos@codespa.org\">marruecos@codespa.org</a>",
            "marker-size":"medium",
            "marker-color":"#ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -5.812454,
              35.779106
            ],
            "type":"Point"
          },
          "id":"a490cac627047d0a38d9241d2773fd33"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-iej0k6y41",
            "title":"CENTRAL AMERICA ",
            "description":"D. Bayardo Benitez<br>Ciudad de Guatemala, Guatemala<br><a href=\"mailto:bbenitez@codespa.org\">bbenitez@codespa.org</a>",
            "marker-size":"medium",
            "marker-color":"#ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -90.532836,
              14.596873
            ],
            "type":"Point"
          },
          "id":"be0d1a560a0990f2270d90d28234237e"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-iej0pvcq4",
            "title":"COLOMBIA ",
            "description":"Dña. Kenia Ramos Carcamo<br>Cali, Colombia<br><a href=\"mailto:colombia@codespa.org\">colombia@codespa.org</a>",
            "marker-size":"medium",
            "marker-color":"#ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -76.508789,
              3.425691
            ],
            "type":"Point"
          },
          "id":"bfedaf2e78f9d1e6b78f306c16fa0501"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-iej0ohkk3",
            "title":"PHILIPPINES ",
            "description":"D. Luis Landero<br>Manila, Filipinas<br><a href=\"mailto:filipinas@codespa.org\">filipinas@codespa.org</a>",
            "marker-size":"medium",
            "marker-color":"#ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              120.975952,
              14.578267
            ],
            "type":"Point"
          },
          "id":"cfb18b6d062e82dec22fc1f8fedcefc3"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-ibmbled90",
            "title":"CODESPA America","description":"",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""
          },
          "geometry":{
            "coordinates":[
              -77.042791,
              38.901789
            ],
            "type":"Point"
          },
          "id":"cibmbosoo056nmlkjqr5u24rc"
        },
        {
          "type":"Feature",
          "properties":{
            "id":"marker-ibmbnk7z1",
            "title":"Fundacion CODESPA",
            "description":"",
            "marker-size":"medium",
            "marker-color":"ef7b22",
            "marker-symbol":""},
            "geometry":{
              "coordinates":[
                -3.661245,
                40.448673
              ],
              "type":"Point"
            },
            "id":"cibmbosoq056omlkjhi00eb18"
          },
          {
            "type":"Feature",
            "properties":{
              "id":"marker-iej0ha6i0",
              "title":"PERÚ ",
              "description":"D. Hector Javier Bendezu<br>Lima, Perú<br><a href=\"mailto:peru@codespa.org\">peru@codespa.org</a>",
              "marker-size":"medium",
              "marker-color":"#ef7b22",
              "marker-symbol":""
            },
            "geometry":{
              "coordinates":[
                -77.036132,
                -12.060809
              ],
              "type":"Point"
            },
            "id":"db5c11646b568e4a6bee097f0b9dce24"
          },
          {
            "type":"Feature",
            "properties":{
              "id":"marker-iej0w85d9",
              "title":"BOLIVIA ",
              "description":"D. Hector Javier Bendezu<br>La Paz, Bolivia<br><a href=\"mailto:bolivia@codespa.org\">bolivia@codespa.org</a>",
              "marker-size":"medium",
              "marker-color":"#ef7b22",
              "marker-symbol":""
            },
            "geometry":{
              "coordinates":[
                -68.137207,
                -16.509832
              ],
              "type":"Point"
            },
            "id":"f894104fa52b4798c474e1f8622be5c7"
          }
        ],
        "id":"mediatools.mk0io26b"
      }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
