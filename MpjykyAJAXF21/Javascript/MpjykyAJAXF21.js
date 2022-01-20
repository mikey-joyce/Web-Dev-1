/* References:
        1. Starter code lecture for challenge 9 that Trey setup 
        2. https://stackoverflow.com/questions/5629805/disabling-enter-key-for-form*/

let activeFlag = 0;
let key = "a6BxAtbYcn7i51FE5YvRAwNNA0hhaXWX5ffPa4Hc";
let api_query = "https://api.nasa.gov/mars-photos/api/v1/";
var curiousityManifest;
var opportunityManifest;
var spiritManifest;
var globalPicture;
var globalDescription;

// Start of code used from reference 1
function getManifests(){
    // Create query for curiosity
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onload = function(){
        if(xmlHttp.status == 200){
            curiousityManifest = JSON.parse(xmlHttp.responseText).photo_manifest;

            var updatedPhotos = {};
            curiousityManifest.photos.forEach(photo =>{
                updatedPhotos[photo.sol] = photo;
            });

            curiousityManifest.photos = updatedPhotos;
            console.log(curiousityManifest);
        }
    };

    xmlHttp.open("GET", api_query + "manifests/curiosity?api_key=" + key, true);
    xmlHttp.send();

    // Create query for opportunity
    var xmlHttp2 = new XMLHttpRequest();

    xmlHttp2.onload = function(){
        if(xmlHttp2.status == 200){
            opportunityManifest = JSON.parse(xmlHttp2.responseText).photo_manifest;

            var updatedPhotos = {};
            opportunityManifest.photos.forEach(photo =>{
                updatedPhotos[photo.sol] = photo;
            });

            opportunityManifest.photos = updatedPhotos;
            console.log(opportunityManifest);
        }
    };

    xmlHttp2.open("GET", api_query + "manifests/opportunity?api_key=" + key, true);
    xmlHttp2.send();

    // Create query for spirit
    var xmlHttp3 = new XMLHttpRequest();

    xmlHttp3.onload = function(){
        if(xmlHttp3.status == 200){
            spiritManifest = JSON.parse(xmlHttp3.responseText).photo_manifest;

            var updatedPhotos = {};
            spiritManifest.photos.forEach(photo =>{
                updatedPhotos[photo.sol] = photo;
            });

            spiritManifest.photos = updatedPhotos;
            console.log(spiritManifest);
        }
    };

    xmlHttp3.open("GET", api_query + "manifests/spirit?api_key=" + key, true);
    xmlHttp3.send();
}

function changeSol(){
    // Document was changed by the rover, but still not sol so can't get data yet
    if(document.getElementById("sol").value === ""){
        return;
    }

    var solVal = document.getElementById("sol").value;

    // add proper cameras
    switch(document.getElementById("roverDropdown").value){
        case "curiosity":
            console.log("Hello");
            if(curiousityManifest.photos[solVal] == null){
                alert("No data for this sol");
            }

            var myCameras = curiousityManifest.photos[solVal].cameras;
            var myString = "";
            myCameras.forEach(cam => {
                myString += "<option value='" + cam + "'>" + cam + "</option>";
            });

            document.getElementById("selectCamera").innerHTML = myString;
            break;
        case "opportunity":
            if(opportunityManifest.photos[solVal] == null){
                alert("No data for this sol");
            }

            var myCameras = opportunityManifest.photos[solVal].cameras;
            var myString = "";
            myCameras.forEach(cam => {
                myString += "<option value='" + cam + "'>" + cam + "</option>";
            });

            document.getElementById("selectCamera").innerHTML = myString;
            break;
        default:
            //spirit
            if(spiritManifest.photos[solVal] == null){
                alert("No data for this sol");
            }

            var myCameras = spiritManifest.photos[solVal].cameras;
            var myString = "";
            myCameras.forEach(cam => {
                myString += "<option value='" + cam + "'>" + cam + "</option>";
            });

            document.getElementById("selectCamera").innerHTML = myString;
            break;
    }
}

function submitInfo(){
    //Loading icon
    document.getElementById("mj-container").innerHTML = "Loading...";

    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onload = function (){
        if(xmlHttp.status == 200 ){
            response = JSON.parse(xmlHttp.responseText);
            var photoArray = response.photos;

            //Reset innerHTML so there is no overlap
            document.getElementById("mj-container").innerHTML = "";

            //dynamically add the photos
            for(var i=0; i<photoArray.length; i++){
                var myString = "<div class='gallery-container col-span" + Math.floor(Math.random() * 2) + " row-span" + Math.floor(Math.random() * 2) + "'><div class='gallery-item'><div class='image'><a href='" + photoArray[i].img_src + "' target='_blank'><img id='currentImage" + i + "' src='" + photoArray[i].img_src + "' alt='Loading...'></a></div></div></div>";
                document.getElementById("mj-container").innerHTML += myString;
            }
        }
    };

    var solVal = document.getElementById("sol").value;
    var myCamera = document.getElementById("selectCamera").value;

    // api query for the photos
    switch(document.getElementById("roverDropdown").value){
        case "curiosity":
            var myURL = api_query + "rovers/curiosity/photos?sol=" + solVal + "&camera=" + myCamera + "&api_key=" + key;
            xmlHttp.open("GET", myURL, true);
            xmlHttp.send();
            break;
        case "opportunity":
            var myURL = api_query + "rovers/opportunity/photos?sol=" + solVal + "&camera=" + myCamera + "&api_key=" + key;
            xmlHttp.open("GET", myURL, true);
            xmlHttp.send();
            break;
        default:
            //spirit
            var myURL = api_query + "rovers/spirit/photos?sol=" + solVal + "&camera=" + myCamera + "&api_key=" + key;
            xmlHttp.open("GET", myURL, true);
            xmlHttp.send();
            break;
    }
}
// End of code used from reference 1

// Start of code used from reference 2
$(document).keypress(
    function(event){
      if (event.which == '13') {
        event.preventDefault();
      }
    });
// End of code used from reference 2