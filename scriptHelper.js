// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {//write variables forDOM OBJ for HTML elements
    const missionTarget = document.getElementById('missionTarget');
    console.log("in addDestinationInfo");
    missionTarget.innerHTML =
    `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name:${name} </li>
            <li>Diameter:${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth:${distance} </li>
            <li>Number of Moons:${moons} </li>
        </ol>
        <img src="${imageUrl}">
        `      
}//end function addDestination
//let planetsReturned ; //What's the purpose of the variable?
async function myFetch() {
    let planetsReturned ; //What's the purpose of the variable?
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        let jsonPromise = response.json(); //.json extracts data  ?2nd await?
        return jsonPromise;
    });  //end .then my fetch  
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
    }// end if
    arrayLength = planets.length;
    planetIdx = Math.floor(Math.random()*arrayLength); //planets.length undefined 
    console.log(planetIdx, planets.length);
    return planetIdx;
}

function validateInput(testInput) {//validate input & prevent empty submissions
    // Take in a string variable, testInput
  
    if (testInput === "" ) { //used "" vs. value.length=0;
        return "Empty";         
    } // end if empty  
    if (isNaN(testInput)  ) {
     //isNaN -includes text to number conversion
        return "Not a Number";        
    } else
        return "Is a Number";                        
} //end validate input
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
      
 //validate data test
    if (validateInput(pilot ) === "Empty"|| validateInput(copilot ) === "Empty" || validateInput(fuelLevel ) === "Empty" || validateInput(cargoLevel) === "Empty") {
        console.log(pilot,copilot,fuelLevel,cargoLevel);
        alert( "User input Required for all fields");                
     } //end if validate empty
        
    else if (validateInput(pilot ) === "Is a Number" || validateInput(copilot ) === "Is a Number"  ) {
        alert("A Number is invalid");               
    }//end if validate number
    else if (validateInput(fuelLevel ) === "Not a Number" ||  validateInput(cargoLevel) === "Not a Number") {
        alert("Text is invalid");          
    }//endif validate text
    else {
    //launchStatus=document.getElementById(launchStatus);
    list.style.visibility ="visible";// dont understand inline style list
    pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML=`Co-pilot ${copilot} is ready for launch`;
    }//end if correct typeOf data 

    if(Number(fuelLevel)< 10000 && Number(cargoLevel)<= 10000 ){
        fuelStatus.innerHTML= `Fuel Level ${fuelLevel} is too low for launch`;
        cargoStatus.innerHTML=`Cargo mass ${cargoLevel} is low enough for launch`;
        launchStatus.innerHTML=`Shuttle not ready for launch`;
        launchStatus.style.color='red';

    }   
    else if(Number(fuelLevel)>= 10000 && Number(cargoLevel)<= 10000 ){

        fuelStatus.innerHTML= `Fuel Level ${fuelLevel} is high enough for launch`;
        cargoStatus.innerHTML=`Cargo mass ${cargoLevel} is low enough for launch`;
        launchStatus.innerHTML=`Shuttle is ready for launch`;
        launchStatus.style.color ="green";

    }
   
    //faulty fuel
 
    //>>
    else if (Number(fuelLevel)< 10000 && Number(cargoLevel)> 10000) {        
        cargoStatus.innerHTML=`Cargo mass ${cargoLevel} is too heavy for launch`;
        fuelStatus.innerHTML= `Fuel Level ${fuelLevel} is too low for launch`;
        launchStatus.innerHTML=`Shuttle not ready for launch`;
        launchStatus.style.color='red';
    }
        /* 
        change the list to visible 
        with an updated cargo status stating that there is too much mass for the shuttle to take off. 
        The text of launchStatus should also change to "Shuttle not ready for launch" and 
        the color should change to red*/
    else if (Number(fuelLevel)>= 10000 && Number(cargoLevel)> 10000) {
        cargoStatus.innerHTML=`Cargo mass ${cargoLevel} is too heavy for launch`; 
        fuelStatus.innerHTML= `Fuel Level ${fuelLevel} is high enough for launch`;
        launchStatus.innerHTML=`Shuttle not ready for launch`; 
        launchStatus.style.color='red'; 
    }//
}//end formSubmit
   

    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet; 
    module.exports.myFetch = myFetch;
