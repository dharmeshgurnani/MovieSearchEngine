'use strict';
var searchData; //stores current search keyword response data.

/*
main function that  calls the API
Parse data to cards and also sets data to frontend using DOM.
*/
function callApi(page) {
  console.log('callApi');
  $.ajax({
    type: "GET",
    url: "https://www.omdbapi.com/?s=" + document.getElementById("searchKeyward").value + "&apikey=3173bd84" + "&page=" + page,
    success: function (result) {
      document.getElementById("gridRow1").innerHTML = "";
      document.getElementById("gridRow2").innerHTML = "";
      document.getElementById("gridRow3").innerHTML = "";

      for (let i = 0; i < result.Search.length; i++) {
        if (result.Search[i].Poster === "N/A") {
          result.Search[i].Poster = 'https://lightning.od-cdn.com/static/img/no-cover_en_US.a8920a302274ea37cfaecb7cf318890e.jpg';
        }
        const movieCard = `
          <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer" onclick="showinfo(${i})">
            <div class="h-64 bg-cover bg-center" style="background-image: url('${result.Search[i].Poster}')"></div>
            <div class="p-4">
              <h2 class="text-xl font-bold text-yellow-500">${result.Search[i].Title}</h2>
              <p class="text-gray-400">${result.Search[i].Year}</p>
              <p class="text-gray-500">${result.Search[i].Type}</p>
            </div>
          </div>
        `;
        document.getElementById("gridRow2").innerHTML += movieCard;
      }
      searchData = result.Search;
      getDetails(0);
    },
    error: function (result) {
      alert('error : Unable To Search');
    }
  });
}
