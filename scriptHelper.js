// Write your helper functions here!

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

  this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
      
      let index = Math.floor(Math.random() * json.length);
      console.log(json[index]);
                    
      document.getElementById("missionTarget").innerHTML = `
          <h2>Mission Destination</h2>
              <ol>
                  <li>Name: ${json[index].name}</li>
                  <li>Diameter: ${json[index].diameter}</li>
                  <li>Star: ${json[index].star}</li>
                  <li>Distance from Earth: ${json[index].distance}</li>
                  <li>Number of Moons: ${json[index].moons}</li>
              </ol>
                  <img src="${json[index].image}">
            `;
  });
});
};
        

function validateInput(testInput) {

}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

}


async function myFetch() {
     let planetsReturned;

     planetsReturned = await fetch().then( function(response) {
  });
     return planetsReturned;
}


function pickPlanet(planets) {

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;