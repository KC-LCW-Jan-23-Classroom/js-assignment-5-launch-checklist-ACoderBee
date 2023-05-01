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
    let pilotInput=document.querySelector("input[name=pilotName]");
    let copilotInput=document.querySelector("input[name=copilotName]");
    let fuelLevelInput=document.querySelector("input[name=fuelLevel]");
    let cargoMassInput=document.querySelector("input[name=cargoMass]");
    
    if (pilotInput.value.length === 0 || copilotInput.value.length === 0 || fuelLevelInput.value.length === 0 || cargoMassInput.value.length=== 0) {
        alert(` ALL fields required`);        
     } 
        
    else if (pilotInput.value !== isNaN || copilotInput.value !== isNaN ) {
        alert(` This cannot accept a number`);        
    }
    else if (fuelLevelInput.value === isNaN ||  cargoMassInput.value === isNaN) {
        alert(`This requires a Number"`);        
    }
    else
        alert ("ready to submit");
    
    }
   



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //write variables forDOM OBJ for HTML elements
    //write form level listener for submission
    
   
}

//let planetsReturned ; //What's the purpose of the variable?
async function myFetch() {
    let planetsReturned ; //What's the purpose of the variable?
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        let jsonPromise = response.json(); //.json extracts data for use
         return jsonPromise;
    });    
        console.dir(planetsReturned);  
        return planetsReturned; //results of promise is produced by myFetch
} 



function pickPlanet(planets) { //pickPlanet(planetsReturned) undefined
    let planetIdx;
    let arrayLength;
    if (arrayLength === undefined) {
        planetIdx = Math.floor(Math.random()*6);
        console.log(planetIdx);
        return planetIdx;
    }
    arrayLength = planets.length;
    planetIdx = Math.floor(Math.random()*arrayLength); //hardcoded planet.length undefined 
    console.log(planetIdx);
    return planetIdx;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
