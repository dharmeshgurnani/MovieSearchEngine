// Function that calls getDetails function and open model(popup window)
function showinfo(num) {
  getDetails(num);
  document.getElementById("myModal").classList.remove("hidden");
}

//Replaces any data that is n/a or undefined to "-" to
//Avoid exception as well as show user '-' in frontend rather than 'undefined" or "n/a"
function isMissing(string) {
  if (string && (string.toLowerCase() === "n/a" || string.toLowerCase() === "undefined")) {
    return "-";
  }
  return string || "-";
}

// calls API to get the info of a movie through title
function getDetails(num) {
  var InnerElemets = [
    "DetailPoster", "DetailTitle", "DetailYear", "DetailGenre", "DetailRated", "DetailReleased",
    "DetailDirector", "DetailWriter", "DetailActors", "DetailPlot", "DetailLanguage",
    "DetailimdbRating", "DetailProduction"
  ];

  InnerElemets.forEach(element => {
    const el = document.getElementById(element);
    if (el) el.innerHTML = "";
  });

  $.ajax({
    type: "GET",
    url: "https://www.omdbapi.com/?t=" + searchData[num].Title + "&apikey=3173bd84",

    success: function (result) {
      var googlequery = 'window.open("https://www.google.com/search?q=' + result.Title + '", "_blank")';

      document.getElementById("DetailPoster").innerHTML = `<img class='w-full h-auto rounded-lg shadow-lg cursor-pointer' src='${isMissing(result.Poster)}' onclick='${googlequery}'/>`;
      document.getElementById("DetailTitle").innerHTML = isMissing(result.Title);
      document.getElementById("DetailYear").innerHTML = `<i class='fa fa-calendar text-yellow-500 mr-2' aria-hidden='true'></i><span>${isMissing(result.Year)}</span>`;
      document.getElementById("DetailGenre").innerHTML = `<strong class='font-semibold text-yellow-500'>Genre: </strong><span>${isMissing(result.Genre)}</span>`;
      document.getElementById("DetailRated").innerHTML = `<strong class='font-semibold text-yellow-500'>Rated: </strong>${isMissing(result.Rated)}`;
      document.getElementById("DetailReleased").innerHTML = `<i class='fa fa-ticket text-yellow-500 mr-2' aria-hidden='true'></i><span>${isMissing(result.Released)}</span>`;
      document.getElementById("DetailDirector").innerHTML = `<strong class='font-semibold text-yellow-500'>Director: </strong>${isMissing(result.Director)}`;
      document.getElementById("DetailWriter").innerHTML = `<strong class='font-semibold text-yellow-500'>Writer: </strong>${isMissing(result.Writer)}`;
      document.getElementById("DetailActors").innerHTML = `<strong class='font-semibold text-yellow-500'>Actors: </strong><span>${isMissing(result.Actors)}</span>`;
      document.getElementById("DetailPlot").innerHTML = isMissing(result.Plot);
      document.getElementById("DetailLanguage").innerHTML = `<i class='fa fa-language text-yellow-500 mr-2' aria-hidden='true'></i>${isMissing(result.Language)}`;
      document.getElementById("DetailimdbRating").innerHTML = `<i class='fa fa-star text-yellow-500 mr-2'></i>${isMissing(result.imdbRating)}`;
      document.getElementById("DetailProduction").innerHTML = `<strong class='font-semibold text-yellow-500'>Production: </strong>${isMissing(result.Production)}`;
    },
    error: function (result) {
      alert('error:Unable to fetch Details');
    }
  });

}

// function to close popup window
function closeWindow() {
  document.getElementById("myModal").classList.add("hidden");
}

var template = Handlebars.compile(` <!-- MODEL POPUP WINDOW -->
  <div id="myModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 hidden">
    <div class="bg-gray-800 text-white rounded-lg shadow-lg overflow-auto w-full max-w-4xl m-4 relative" style="max-height: 90vh;">
      <span class="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-bold cursor-pointer" title="Close" onclick="closeWindow()">&times;</span>
      <div id="deatilSection" class="p-8">
        <div class="flex flex-col md:flex-row gap-8">
          <div id="DetailPoster" class="w-full md:w-1/3"></div>
          <div class="Detailinfo w-full md:w-2/3 flex flex-col gap-4">
            <div id="DetailTitle" class="text-4xl font-bold text-yellow-500 border-b-2 border-yellow-500 pb-2 mb-4"></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg">
              <div id="DetailYear" class="flex items-center"></div>
              <div id="DetailimdbRating" class="flex items-center"></div>
              <div id="DetailGenre"></div>
              <div id="DetailRated"></div>
              <div id="DetailReleased" class="flex items-center"></div>
              <div id="DetailLanguage" class="flex items-center"></div>
            </div>
            <div class="border-t border-gray-700 pt-4 mt-4">
              <div id="DetailDirector" class="mb-2"></div>
              <div id="DetailWriter" class="mb-2"></div>
              <div id="DetailActors" class="mb-2"></div>
              <div id="DetailProduction"></div>
            </div>
            <div class="border-t border-gray-700 pt-4 mt-4">
              <h3 class="text-2xl font-bold text-yellow-500 mb-2">Plot</h3>
              <div id="DetailPlot" class="text-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);

document.write(template({}));
