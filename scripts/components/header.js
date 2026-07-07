// Pure Java Script Function for getting url parameters
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),results = regex.exec(url);
  if (!results) return null; if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

$(document).ready(function () {
  var input = document.getElementById("searchKeyward");
  pagenum = 1;
  input.addEventListener("keyup", function (event) {
    console.log('enter');
    if (event.keyCode === 13) {
      event.preventDefault();
      callApi(pagenum);
      document.getElementById("pagenum").innerHTML = pagenum;
    }
  });
});

$(document).ready(function () {
  if (getParameterByName("q") != null) {
    document.getElementById("searchKeyward").value = getParameterByName("q");
    searchMovie();
  }
})

// Search bar functionality
$(document).ready(function () {
  $("#SearchButton").click(function (e) {
    e.preventDefault()
    callApi(pagenum = 1);
    document.getElementById("pagenum").innerHTML = pagenum;
  })
});

var model = {};
var template = Handlebars.compile(`
<div class="bg-gray-800 text-white p-4">
  <div class="container mx-auto flex justify-between items-center">
    <a class="flex items-center text-2xl font-bold text-yellow-500" href="#">
      <i class="fa fa-film mr-2" aria-hidden="true"></i>
      <div>SEARCH MOVIES</div>
    </a>
    <div class="relative w-1/2">
      <input type="text" placeholder="Search" name="search" id="searchKeyward" class="bg-gray-700 text-white rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500">
      <button id="SearchButton" type="submit" class="absolute right-0 top-0 mt-2 mr-2 px-4 py-1 bg-yellow-500 text-gray-800 rounded-full hover:bg-yellow-600">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
</div>
`);

document.write(template(model));
