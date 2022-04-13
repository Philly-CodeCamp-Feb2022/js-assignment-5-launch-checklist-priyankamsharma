// Write your JavaScript code here!

window.addEventListener("load", function() {

  addDestinationInfo(document);

  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {

    let pilotName = document.querySelector("input[name=pilotName]");
    let coPilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");

    document.getElementById('launchStatus').innerText = 'Awaiting Information Before Launch';
    document.getElementById('launchStatus').style.color= "black";
    document.getElementById("pilotStatus").innerText = `Pilot ${pilotName.value} Ready`;
    document.getElementById("copilotStatus").innerText = `Co-Pilot ${coPilotName.value} Ready`;
    document.getElementById("fuelStatus").innerText = "Fuel Level high enough for launch";
    document.getElementById("cargoStatus").innerText = "Cargo Mass low enough for launch";

    inputCheck = false;
    shuttleCargoReady = false;
    shuttleFuelReady = false;

    // Checking to make sure the form elements have values in pilotName, copilotName, fuelLevel and cargoMass
    if (pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        alert("All fields are required!");
        event.preventDefault();
        inputCheck = false;
        document.getElementById("faultyItems").style.visibility = "hidden";
    
    // Making sure the pilot name and co-pilot name input values are strings
    //if pilot or copilot name is entered in numbers, visiblity should be hidden
    } else if (!isNaN(pilotName.value) || !isNaN(coPilotName.value)) {
        alert("Pilot and Copilot name cannot by numbers");
        document.getElementById("faultyItems").style.visibility = "hidden";
        inputCheck = false;
        event.preventDefault();
        
    // Making sure the fuel level and cargo mass input values are numbers
    //if fuel or cargo mass is entered in string, visiblity should be hidden
    } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
        alert("Fuel level & Cargo mass should be numbers!");
        document.getElementById("faultyItems").style.visibility = "hidden";
        inputCheck = false;
        event.preventDefault();
    } else {
        inputCheck = true;
    }

    // If the user submits a fuel level that is too low (less than 10,000 liters) then,
    //change faultyItems to visible & fuel status = not enough fuel for the journey. 
    //launchStatus to "Shuttle not ready for launch" and the color to red.
    if (fuelLevel.value < 10000 && inputCheck) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
        document.getElementById("fuelStatus").innerHTML = `Fuel Level ${fuelLevel.value}L is low`
        document.getElementById('launchStatus').style.color= "red";
        shuttleFuelReady = false;
        event.preventDefault();
     } else {
        document.getElementById("fuelStatus").innerHTML = `Fuel level ${fuelLevel.value}L sufficient for journey`;
        shuttleFuelReady = true;
     }

    //If the user submits a cargo mass that is too large (more than 10,000 kilograms),
    //change faultyItems to visible, cargo status to "too much mass for the shuttle to take off",
    //launchStatus to "Shuttle not ready for launch" and color to red.
    if (cargoMass.value > 10000 && inputCheck) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch';
        document.getElementById("cargoStatus").innerHTML = `Cargo Mass ${cargoMass.value}kg is too high`
        document.getElementById('launchStatus').style.color= "red";
        shuttleCargoReady = false;
        event.preventDefault();
    } else {
        document.getElementById("cargoStatus").innerHTML  = `Cargo mass ${cargoMass.value}kg sufficient for take off`;
        shuttleCargoReady = true;
    }

    //If the shuttle is ready to launch, launchStatus to green and display "Shuttle is ready for launch".
    //If fuelLevel > 10000 and cargoMass < 10000 then the shuttle should be ready to launch
    if (shuttleFuelReady && shuttleCargoReady && inputCheck) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById('launchStatus').style.color= "green";
        document.getElementById('launchStatus').innerText = 'Shuttle is ready for launch!';
        event.preventDefault() 
    }
  });
});

/*
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = scriptHelper.myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
   });
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
*/