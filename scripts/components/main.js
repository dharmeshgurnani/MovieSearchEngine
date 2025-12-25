var model = {
  searchInputOnClick: ""
};

var template = Handlebars.compile(`
<main class="bg-gray-900 text-white min-h-screen">
  <div id="gridContainer" class="container mx-auto p-4">
    <div id="gridRow1" class="flex justify-center items-center h-full">
      <div class="text-4xl text-gray-500 font-bold tracking-wider">SEARCH TO SEE RESULTS</div>
    </div>
    <div id="gridRow2" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"></div>
    <div id="gridRow3" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"></div>
  </div>
</main>
`);

document.write(template(model));