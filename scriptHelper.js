// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {//write variables forDOM OBJ for HTML elements
    const missionTarget = document.getElementById('missionTarget');
    console.log("in addDestinationInfo");
    missionTarget.innerHTML =
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
//let planetsReturned ; //What's the purpose of the variable?
async function myFetch() {
    let planetsReturned ; //What's the purpose of the variable?
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        let jsonPromise = response.json(); //.json extracts data for use
        return jsonPromise;
    });    
    console.dir(planetsReturned);  
    return planetsReturned; //results of promise is produced by myFetch
} // end fetch

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

function validateInput(testInput) {//validate input & prevent empty submissions
    // Take in a string variable, testInput
  
    if (testInput === "" ) { //instead of value.length=0;
        return "Empty";         
    }   
    if (isNaN(testInput)  ) {
     //isNaN does text to number conversion
        return "Not a Number";        
    } else
        return "Is a Number"; 
                       
} //end validate input
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
      
 //validate data test
    if (validateInput(pilot ) === "Empty"|| validateInput(copilot ) === "Empty" || validateInput(fuelLevel ) === "Empty" || validateInput(cargoLevel) === "Empty") {
        console.log(pilot,copilot,fuelLevel,cargoLevel);
        alert( "User input Required for all fields");                
     } 
        
    else if (validateInput(pilot ) === "Is a Number" || validateInput(copilot ) === "Is a Number"  ) {
        alert("A Number is invalid");               
    }
    else if (validateInput(fuelLevel ) === "Not a Number" ||  validateInput(cargoLevel) === "Not a Number") {
        alert("Text is invalid");          
    }
    else 
    launchStatus=document.getElementById(launchStatus);
    list.style.visibility ="visible";
    //let list = document.getElementById("faultyItems");
    pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML=`Co-pilot ${copilot} is ready for launch`;
    }//<<

    if(Number(fuelLevel)< 10000 && Number(cargoLevel)<= 10000 ){
        fuelStatus.innerHTML= `Fuel Level ${fuelLevel} is too low for launch`;
        cargoStatus.innerHTML=`Cargo mass ${cargoLevel} is ready for launch`;
        launchStatus.innerHTML=`Shuttle is not ready for launch`;

    }
       
        
    else if(Number(fuelLevel)>= 10000 && Number(cargoLevel)<= 10000 ){

        fuelStatus.innerHTML= `Fuel Level ${fuelLevel} is ready for launch`;
        cargoStatus.innerHTML=`Cargo mass ${cargoLevel} ready for launch`;
        launchStatus.innerHTML=`Shuttle is ready for launch`;
    }
   
    //faulty fuel
        /*change faultyItems to visible
         with an updated fuel status stating that there is not enough fuel for the journey. 
         The text of the h2 element,, should also change to "Shuttle not ready for launch" and 
         the color should change to red.
         */
        //><
    //>>
    else if (Number(fuelLevel)< 10000 && Number(cargoLevel)> 10000) {
        
        cargoStatus.innerHTML=`Cargo mass ${cargoLevel} too heavy for launch`;
        fuelStatus.innerHTML= `Fuel Level ${fuelLevel} is too low for launch`;
        launchStatus.innerHTML=`Shuttle is not ready for launch`;
    }
        /* 
        change the list to visible 
        with an updated cargo status stating that there is too much mass for the shuttle to take off. 
        The text of launchStatus should also change to "Shuttle not ready for launch" and 
        the color should change to red*/
else if (Number(fuelLevel)>= 10000 &&Number(cargoLevel)> 10000) {
        cargoStatus.innerHTML=`Cargo mass ${cargoLevel} too heavy for launch`; 
        fuelStatus.innerHTML= `Fuel Level ${fuelLevel} is ready for launch`;
        launchStatus.innerHTML=`Shuttle is not ready for launch`;  
    

    }//
   

    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet; 
    module.exports.myFetch = myFetch;
