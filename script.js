//import pickPlanet from './scriptHelper';
// imWrite your JavaScript code here!

window.addEventListener("load", function() {
    
    const pilot = document.getElementById("pilotName");
    const copilot = document.getElementsByName("copilotName");
    const fuelLevel = document.getElementsByName("fuelLevel");
    const cargoLevel = document.getElementsByName("cargoMass");
    const missionTarget = document.getElementById('missionTarget');
    
   

   let listedPlanets;//array of objects
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//is this the 2nd part of the fetch?
   let listedPlanetsResponse = myFetch();  // is the promise fulfilled
   console.log(typeof listedPlanetsResponse); //object- promise fulfilled
   console.dir(listedPlanetsResponse);
   console.log(Object.entries(listedPlanetsResponse));//it is an array, []
//    
       
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination. */
       
       pickPlanet();//gets to function pickPlanet
// 
   //init loading of 
  


//const formField = document.getElementsByClassName("formField");
    let form = document.querySelector("form");//tagname vs id? chgd to selector
    console.log(form);
    form.addEventListener("submit",function(event){
        empty = " empty, all fields required";

        if (pilotName.value.length === 0 || pilotName.value == null) {
            alert(`pilot ${empty}`);} 
        
        if (copilotName.value.length === 0 || copilotName.value == null) {
            alert(`copilot  ${empty}`);
        }
        if (fuelLevel.value.length === 0 || fuelLevel.value == null || fuelLevel.value == isNaN) {
            alert(`fuelLevel  ${empty}`);
        }
        if (cargoMass.value.length === 0 || cargoMass.value == null || cargoMass.value == isNaN) {
            alert(`cargoMass ${empty}`);
        }
        //alert ("empty, all fields required");
        console.log(`pilot= ${pilot.value},copilot= ${copilot.value}`);

        event.preventDefault();  // stop the form submission
         

    }); //end submit listener

}); //end of load listner