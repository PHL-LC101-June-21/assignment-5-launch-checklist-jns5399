// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === ''){
       return console.log('Empty');
   } else if (isNan(testInput)) {
           return console.log("Not a number!");
       } else {
           return console.log ("This is a number");
       }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let validPilot = validateInput(pilot);
   let validCopilot = validateInput(copilot);
   let validFuelLevel =validateInput(fuelLevel);
   let validCargoLevel = validateInput(cargoLevel);

   if (validPilot || validCopilot || validFuelLevel ||validCargoLevel === 'Empty'){
       return alert('Please input requested information.');
   } else if (validCargoLevel||validFuelLevel === 'Not a number!'){
       return alert('Please input a valid number.');
   }

   document.getElementById("pilotStatus").innerHTML = `${pilot} is ready for liftoff.`;
   document.getElementById("copilotStatus").innerHTML = `${copilot} is ready for liftoff.`;
  
   if (validFuelLevel < 10000){
       getElementById('faultyItems').style.visibility='visible';
       document.getElementById('fuelStatus').innerHTML='Not enough fuel!';
       document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
       document.getElementById('launchStatus').style.color = 'red';
   }
   
   if (validCargoLevel > 10000){
       document.getElementById('faultyItems').style.visibility = 'visible';
       document.getElementById('cargoStatus').innerHTML = 'Too much cargo, must unload';
       document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
       document.getElementById('launchStatus').style.color = 'red';
   }
   if (validFuelLevel > 10000 && validCargoLevel < 10000) {
       document.getElementById('launchStatus').innerHTML = 'Shuttle is ready for launch!';
       document.getElementById('launchStatus').style.color = 'green';
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
