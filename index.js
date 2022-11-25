//const { fetchMyIP } = require('./iss');
//const { fetchCoordsByIP } = require('./iss');
//const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');


const myCoordinates = { latitude: '43.653226', longitude: '-79.3831843' }

//fetchMyIP((error, ip) => {
//  if (error) {
//    console.log("It didn't work!", error);
//    return;
//  }
//
//  console.log('It worked! Returned IP:', ip);
//});
//
//fetchCoordsByIP('142.189.236.135', (error, coordinates) => {
//  if (error) {
//    console.log("Error!", error);
//    return;
//  }
//
//  console.log('Success!', coordinates);
//});
//
//fetchISSFlyOverTimes(myCoordinates, (error, passTimes) => {
//  if (error) {
//    console.log("It didn't work!", error);
//    return;
//  }
//
//  console.log('It worked! Returned flyover times:', passTimes);
//});

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});