// Write your JavaScript code here!

window.addEventListener("load", function() {
    
    const missionTarget = document.getElementById('missionTarget');
   
/* 
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//is this the 2nd part of the fetch?
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination. */
  // })
   //init loading of 



//const formField = document.getElementsByClassName("formField");
let forms = document.getElementsByTagName("form");//tagname vs id?
console.log(forms[0]);
 forms[0].addEventListener('submit',function(event){
    
    const pilot =document.getElementById("pilotName");
    const copilot =document.getElementsByName("copilotName");
    const fuelLevel =document.getElementsByName("fuelLevel");
    const cargoLevel =document.getElementsByName("cargoMass");
        event.preventDefault();

});
 
});