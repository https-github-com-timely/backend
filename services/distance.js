const geolib = require("geolib");
const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "google",
  // Optional depending on the providers
  httpAdapter: "https", // Default
  apiKey: process.env.GOOGLE_API_KEY, // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

const getLatLongFromAddress = address => {
  geocoder
    .geocode(address)
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    });
};

const getDistance = (coords1, coords2) => {
  const distanceInMeters = geolib.getDistance(coords1, coords2);
  const distanceInMi = geolib.convertDistance(distanceInMeters, "mi");
  return distanceInMi;
};

module.exports.geoFunctions = {
  getDistance,
  getLatLongFromAddress
};

// Usage:
// const distance = require("./services/distance");
// const coords1 = { latitude: 37.791759, longitude: -122.398903 };
// const coords2 = { latitude: 37.799039, longitude: -122.40628 };

// distance.getDistance(coords1, coords2)
