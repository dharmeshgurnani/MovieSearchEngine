var model = {
  searchInputOnClick: ""
};

var template = Handlebars.compile(`
<main class="bg-gray-900 text-white min-h-screen flex items-center justify-center">
  <div id="gridContainer" class="container mx-auto p-4">
    <div id="gridRow1" class="text-center">
        <i class="fa fa-film fa-5x text-yellow-500 mb-4 animate-pulse"></i>
        <h1 class="text-5xl font-bold text-white mb-2">Movie Search Engine</h1>
        <p class="text-xl text-gray-400">Search for your favorite movies and get all the details.</p>
    </div>
    <div id="gridRow2" class="hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"></div>
  </div>
</main>
`);

document.write(template(model));