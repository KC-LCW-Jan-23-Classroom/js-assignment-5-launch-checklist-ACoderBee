
// Write your JavaScript code here!

//const { addDestinationInfo } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    
    const pilot = document.getElementById("pilotName");
    const copilot = document.getElementsByName("copilotName");
    const fuelLevel = document.getElementsByName("fuelLevel");
    const cargoLevel = document.getElementsByName("cargoMass"); 
    //const missionTarget = document.getElementById('missionTarget');
    
   

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
       
       
// 
   //init loading of 
  


//const formField = document.getElementsByClassName("formField");
    let form = document.querySelector("form");
    // console.log(form);
    form.addEventListener("submit", function(event) {
        // Get Working, then move to -- validate input
        
        
        //faulty logic always get 1st pilot alert
        //to get input - 
       
         // preventDefault leave -- but it isn't working in this location
         event.preventDefault();  // stop the form submission  
         validateInput(testInput);
         formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
          
            
            

    }); //end submit listener

}); //end of load listner

//import pickPlanet from './scriptHelper'; not  needed due the 2 script tags
//<script src = "scriptHelper.js"></script> Joins in a big script file
//<script src = "script.js"></script>