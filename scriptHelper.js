// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {//write variables forDOM OBJ for HTML elements
    const missionTarget = document.getElementById('missionTarget');
    console.log("in addDestinationInfo");
    missionTarget.innerHTML +=
    `
        h2>Mission Destination</h2>
        <ol>
            <li>Name:${name} </li>
            <li>Diameter:${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth:${distance} </li>
            <li>Number of Moons:${moons} </li>
        </ol>
        <img src="${imageUrl}">
        `        
  
}





function validateInput(testInput) {//validate input & prevent empty submissions
    // Take in a string variable, testInput
  
    if (testInput === "" || null) { //instead of value.length=0;
        return "Empty";         
    } 
        
     if (Number(testInput) === NaN  ) {
        return "Is a Number";        
    }
    if (Number(testInput)!== NaN ) {
        return "Not a Number";    //formsubmission    
    }
        
}
   



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //write variables forDOM OBJ for HTML elements
    console.log("in form submission");
    
 //validate data test
    if (validateInput(pilot ) === "Empty"|| validateInput(copilot ) === "Empty" || validateInput(fuelLevel ) === "Empty" || validateInput(cargoLevel) === "Empty") {
        console.log(pilot,copilot,fuelLevel,cargoLevel);
        alert( "User input Required for all fields");  
              
     } 
        
    else if (validateInput(pilot ) === "Is a Number" || validateInput(copilot ) === "Is a Number"  ) {
        alert("A Number is invalid"); 
               
    }
    else if (validateInput(fuelLevel ) === "Not a Number" ||  validateInput(cargoLevel) === "Not a Number") {
        alert("Text is invalid");    //formsubmission   
       
    }
    else console.log("readytosubmit");

    
   
    //write form level listener for submission
/*
    if (pilot.value === "Empty"|| copilot.value === "Empty" || fuelLevel.value === "Empty" || cargoLevel.value === "Empty") {
        alert( "User input Required for all fields");        
     } 
        
    else if (pilot.value !== isNaN || copilot.value !== isNaN ) {
        alert("Is a Number");        
    }
    else if (fuelLevel.value === isNaN ||  cargoLevel.value === isNaN) {
        alert("Not a Number");    //formsubmission    
    }
   */
} // end form submission

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
