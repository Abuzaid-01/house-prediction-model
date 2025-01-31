// function getBathValue() {
//   var uiBathrooms = document.getElementsByName("uiBathrooms");
//   for(var i in uiBathrooms) {
//     if(uiBathrooms[i].checked) {
//         return parseInt(i)+1;
//     }
//   }
//   return -1; // Invalid Value
// }

// function getBHKValue() {
//   var uiBHK = document.getElementsByName("uiBHK");
//   for(var i in uiBHK) {
//     if(uiBHK[i].checked) {
//         return parseInt(i)+1;
//     }
//   }
//   return -1; // Invalid Value
// }

// function onClickedEstimatePrice() {
//   console.log("Estimate price button clicked");
//   var sqft = document.getElementById("uiSqft");
//   var bhk = getBHKValue();
//   var bathrooms = getBathValue();
//   var location = document.getElementById("uiLocations");
//   var estPrice = document.getElementById("uiEstimatedPrice");

//   var url = "http://127.0.0.1:5000/predict_home_price"; //Use this if you are NOT using nginx which is first 7 tutorials
//   // var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards

//   $.post(url, {
//       total_sqft: parseFloat(sqft.value),
//       bhk: bhk,
//       bath: bathrooms,
//       location: location.value
//   },function(data, status) {
//       console.log(data.estimated_price);
//       estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
//       console.log(status);
//   });
// }

// function onPageLoad() {
//   console.log( "document loaded" );
//   var url = "http://127.0.0.1:5000/get_location_names"; // Use this if you are NOT using nginx which is first 7 tutorials
//   // var url = "/api/get_location_names"; // Use this if  you are using nginx. i.e tutorial 8 and onwards
//   $.get(url,function(data, status) {
//       console.log("got response for get_location_names request");
//       if(data) {
//           var locations = data.locations;
//           var uiLocations = document.getElementById("uiLocations");
//           $('#uiLocations').empty();
//           for(var i in locations) {
//               var opt = new Option(locations[i]);
//               $('#uiLocations').append(opt);
//           }
//       }
//   });
// }

// window.onload = onPageLoad;









// // function onPageLoad() {
// //   console.log("Document loaded");

// //   var url = "http://127.0.0.1:5000/get_location_names"; // Adjust as needed

// //   $.get(url, function (data, status) {
// //       console.log("Got response for get_location_names request", data);

// //       if (data && Array.isArray(data.locations)) {
// //           let locations = data.locations;
// //           let uiLocations = document.getElementById("uiLocations");

// //           $('#uiLocations').empty();
// //           locations.forEach(location => {
// //               let opt = new Option(location);
// //               uiLocations.appendChild(opt);
// //           });
// //       } else {
// //           console.error("Invalid data format received:", data);
// //       }
// //   }).fail(function () {
// //       console.error("Failed to fetch location names. Check API server.");
// //   });
// // }




// window.onload = onPageLoad;










function getBathValue() {
  var uiBathrooms = document.getElementsByName("uiBathrooms");
  for (let i = 0; i < uiBathrooms.length; i++) {
      if (uiBathrooms[i].checked) {
          return parseInt(uiBathrooms[i].value);
      }
  }
  return -1; // Invalid Value
}

function getBHKValue() {
  var uiBHK = document.getElementsByName("uiBHK");
  for (let i = 0; i < uiBHK.length; i++) {
      if (uiBHK[i].checked) {
          return parseInt(uiBHK[i].value);
      }
  }
  return -1; // Invalid Value
}

function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");
  var sqft = document.getElementById("uiSqft");
  var bhk = getBHKValue();
  var bathrooms = getBathValue();
  var location = document.getElementById("uiLocations");
  var estPrice = document.getElementById("uiEstimatedPrice");

  var url = "http://127.0.0.1:5000/predict_home_price"; // Use correct API URL

  $.post(url, {
      total_sqft: parseFloat(sqft.value),
      bhk: bhk,
      bath: bathrooms,
      location: location.value
  }, function (data, status) {
      console.log(data.estimated_price);
      estPrice.innerHTML = `<h2>${data.estimated_price} Lakh</h2>`;
      console.log(status);
  }).fail(function () {
      console.error("Failed to fetch estimated price. Check API server.");
  });
}

function onPageLoad() {
  console.log("Document loaded");
  var url = "http://127.0.0.1:5000/get_location_names"; // Use correct API URL

  $.get(url, function (data, status) {
      console.log("Got response for get_location_names request", data);
      if (data && Array.isArray(data.locations)) {
          let locations = data.locations;
          let uiLocations = document.getElementById("uiLocations");
          $('#uiLocations').empty();
          locations.forEach(location => {
              let opt = new Option(location, location);
              uiLocations.appendChild(opt);
          });
      } else {
          console.error("Invalid data format received:", data);
      }
  }).fail(function () {
      console.error("Failed to fetch location names. Check API server.");
  });
}

window.onload = onPageLoad;



