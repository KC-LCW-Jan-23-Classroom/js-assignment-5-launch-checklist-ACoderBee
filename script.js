
// Write your JavaScript code here!

//const { addDestinationInfo } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    //const formField = document.getElementsByClassName("formField");
    let form = document.querySelector("form");
    
   let listedPlanets;//array of 6 objects
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//is this the 2nd part of the fetch?
   let listedPlanetsResponse = myFetch();  // is the Promise fulfilled
   listedPlanetsResponse.then(function (jsonData) {   //jsonData Promise results        
            listedPlanets = jsonData;  
            console.log(listedPlanets);              
        }).then(function () {
            let index=pickPlanet(listedPlanets);//gets to function pickPlanet//argument listedPlanets
            console.log(index);
           let planetDest = (listedPlanets[index]);
           addDestinationInfo(document,planetDest.name, planetDest.diameter, planetDest.star, planetDest.distance, planetDest.moons, planetDest.image);
     }); 
//    
       
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination. */
       
       

    console.log(form);
    form.addEventListener("submit", function(event) {
    
        event.preventDefault();  // stops the form submission event 
    //const missionTarget = document.getElementById('missionTarget');
        let pilotInput=document.querySelector("input[name=pilotName]");
        let copilotInput=document.querySelector("input[name=copilotName]");
        let fuelLevelInput=document.querySelector("input[name=fuelLevel]");
        let cargoLevelInput=document.querySelector("input[name=cargoMass]");
       //parameters for formsubmission
        const pilot = pilotInput.nodeValue;
        const copilot = copilotInput.nodeValue;
        const fuelLevel = fuelLevelInput.nodeValue;
        const cargoLevel = cargoLevelInput.nodeValue; 
        //document = form;
        let list = document.getElementById("faultyItems");
        
        
       
         // preventDefault leave -- but it isn't working in this location
        
         formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
          
            
            

    }); //end submit listener

}); //end of load listner

//import pickPlanet from './scriptHelper'; not  needed due the 2 script tags
//<script src = "scriptHelper.js"></script> Joins in a big script file
//<script src = "script.js"></script>