const geolib = require("geolib");

module.exports.getDistance = (coords1, coords2) => {
  const distanceInMeters = geolib.getDistance(coords1, coords2);
  const distanceInMi = geolib.convertDistance(distanceInMeters, "mi");
  return distanceInMi;
};

// Usage:
// const distance = require("./services/distance");
// const coords1 = { latitude: 37.791759, longitude: -122.398903 };
// const coords2 = { latitude: 37.799039, longitude: -122.40628 };

// distance.getDistance(coords1, coords2)
