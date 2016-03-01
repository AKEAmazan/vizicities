var world = VIZI.world('world', {
  skybox: true
}).setView([51.505, -0.09]);

// Add controls
VIZI.Controls.orbit().addTo(world);

// // http://{s}.tile.osm.org/{z}/{x}/{y}.png
// // http://{s}.tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png
var imageTileLayer = VIZI.imageTileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(world);

// Building and roads from Mapzen (polygons and linestrings)
var topoJSONTileLayer = VIZI.topoJSONTileLayer('https://vector.mapzen.com/osm/buildings,roads/{z}/{x}/{y}.topojson?api_key=vector-tiles-NT5Emiw', {
  // picking: true,
  style: function(feature) {
    var height;

    if (feature.properties.height) {
      height = feature.properties.height;
    } else {
      height = 10 + Math.random() * 10;
    }

    return {
      height: height,
      lineColor: '#f7c616',
      lineWidth: 1,
      lineTransparent: true,
      lineOpacity: 0.2,
      lineBlending: THREE.AdditiveBlending,
      lineRenderOrder: 2
    };
  },
  // onClick: function(feature, point2d, point3d, intersects) {
  //   console.log('Clicked:', feature, point2d, point3d, intersects);
  // },
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://whosonfirst.mapzen.com#License">Who\'s On First</a>.'
}).addTo(world);

// Just buildings from Mapzen (polygons)
// var topoJSONTileLayer = VIZI.topoJSONTileLayer('https://vector.mapzen.com/osm/buildings/{z}/{x}/{y}.topojson?api_key=vector-tiles-NT5Emiw', {
//   style: function(feature) {
//     var height;
//
//     if (feature.properties.height) {
//       height = feature.properties.height;
//     } else {
//       height = 10 + Math.random() * 10;
//     }
//
//     return {
//       // color: (feature.properties.area > 10000) ? '#ff0000' : '#0000ff'
//       color: '#ffffff',
//       height: height
//     };
//   },
//   // filter: function(feature) {
//   //   // Only show features with an area larger than 5000 (metres squared in
//   //   // projected units)
//   //   return feature.properties.area > 5000;
//   // },
//   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://whosonfirst.mapzen.com#License">Who\'s On First</a>.'
// }).addTo(world);

// London Underground lines
// var geoJSONLayer = VIZI.geoJSONLayer('https://rawgit.com/robhawkes/4acb9d6a6a5f00a377e2/raw/30ae704a44e10f2e13fb7e956e80c3b22e8e7e81/tfl_lines.json', {
//   picking: true,
//   style: function(feature) {
//     var colour = feature.properties.lines[0].colour || '#ffffff';
//
//     return {
//       lineColor: colour,
//       // lineHeight: 20,
//       lineWidth: 3,
//       // lineTransparent: true,
//       // lineOpacity: 0.5,
//       // lineBlending: THREE.AdditiveBlending,
//       lineRenderOrder: 2
//     };
//   },
//   onClick: function(feature, point2d, point3d, intersects) {
//     console.log('Clicked:', feature, point2d, point3d, intersects);
//   },
//   attribution: '&copy; Transport for London.'
// }).addTo(world);
