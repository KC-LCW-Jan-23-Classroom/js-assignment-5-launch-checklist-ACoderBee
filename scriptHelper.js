// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {//write variables forDOM OBJ for HTML elements
    missionTarget.innerHTML +=
    `
       
         h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
                `
  
                
  
}





function validateInput(testInput) {//validate input & prevent empty submissions
    // let formField = document.getElementsByClassName("formField");
    
    }
   



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {//write variables forDOM OBJ for HTML elements
    //write form level listener for submission
    
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        let jsonPromise = response.json(); //.then response
        jsonPromise.then(function (jsonData) {
            console.log(jsonData);
        });
    });
        
        return planetsReturned;
} 
myFetch();//call function


function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
