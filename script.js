
// Write your JavaScript code here!

window.addEventListener("load", function() {
    //const formField = document.getElementsByClassName("formField");
    let form = document.querySelector("form");
    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    //set visibility to hidden per dom unit test outside eventListner
    
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    //is this the 2nd part of the fetch?
    let listedPlanets;//array of 6 objects
    let listedPlanetsResponse = myFetch();  // is the Promise fulfilled
    listedPlanetsResponse.then(function (jsonData) {   //jsonData Promise results        
        listedPlanets = jsonData;  
        console.log(listedPlanets);              
        }).then(function () {
        let planetDest=pickPlanet(listedPlanets);//callfunction 
        // console.log(planetDest);
        
        addDestinationInfo(document,planetDest.name, planetDest.diameter, planetDest.star, planetDest.distance, planetDest.moons, planetDest.image);
    }); 
//    
    console.log(form);
    form.addEventListener("submit", function(event) {  
        //parameters for validate     
        let pilotInput=document.querySelector("input[name=pilotName]");
        let copilotInput=document.querySelector("input[name=copilotName]");
        let fuelLevelInput=document.querySelector("input[name=fuelLevel]");
        let cargoLevelInput=document.querySelector("input[name=cargoMass]");
        //parameters for formsubmission       
        const pilot = pilotInput.value;
        const copilot = copilotInput.value;
        const fuelLevel = fuelLevelInput.value;
        const cargoLevel = cargoLevelInput.value; 

        event.preventDefault();  // stops the form submission event 
        console.log(pilot, copilot, fuelLevel, cargoLevel, list);
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);       
         
    }); //end submit listener
}); //end of load listner

//import pickPlanet from './scriptHelper'; not  needed due the 2 script tags
//<script src = "scriptHelper.js"></script> Joins in a big script file
//<script src = "script.js"></script>