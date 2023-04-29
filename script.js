//lsimport pickPlanet from './scriptHelper';
// imWrite your JavaScript code here!

window.addEventListener("load", function() {
    
    const pilot = document.getElementById("pilotName");
    const copilot = document.getElementsByName("copilotName");
    const fuelLevel = document.getElementsByName("fuelLevel");
    const cargoLevel = document.getElementsByName("cargoMass");
    const missionTarget = document.getElementById('missionTarget');
    
   

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//is this the 2nd part of the fetch?
   let listedPlanetsResponse = myFetch();
   console.log(listedPlanetsResponse);//call function
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination. */
   })
   //init loading of 



//const formField = document.getElementsByClassName("formField");
let form = document.querySelector("form");//tagname vs id?
console.log(form);
 form.addEventListener("submit",function(event){
    
if(pilot.value === '' || copilot.value === '') {
    console.log(pilot);
    alert ("pilot fields empty, all fields required");

    event.preventDefault();// stop the form submission
}
        

});
 
});