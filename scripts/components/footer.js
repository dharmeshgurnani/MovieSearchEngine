// pager functionality
function pagenxt(e) {
    callApi(pagenum += 1);
    document.getElementById("pagenum").innerHTML = pagenum;
};

function pageprv(e) {
    if (pagenum > 1) {
        callApi(pagenum -= 1);
        document.getElementById("pagenum").innerHTML = pagenum;
    }
};


var model = {
    watermark: "dharmeshgurnani",
    footerlinks: [
        {
            text: "Github",
            href: "https://github.com/dharmeshgurnani",
            faicon: "fa-github"
        },
        {
            text: "Linkedin",
            href: "https://in.linkedin.com/in/dharmeshgurnani",
            faicon: "fa-linkedin-square"
        },
        {
            text: "Portfolio",
            href: "https://dharmeshgurnani.github.io/portfolio",
            faicon: "fa-desktop"
        },
        {
            text: "Trailblazer",
            href: "https://trailblazer.me/dharmeshgurnani",
            faicon: "fa-id-card"
        }
    ]
};

var template = Handlebars.compile(`
<footer class="bg-gray-800 text-white p-4 mt-8">
  <div class="container mx-auto">
    <div id="pagination-container" class="hidden flex justify-center items-center mb-4">
      <a id="Btnprv" class="bg-yellow-500 text-gray-800 rounded-full p-3 hover:bg-yellow-600 cursor-pointer" onclick="pageprv()">
        <i class="fa fa-backward" aria-hidden="true"></i>
      </a>
      <span id="pagenum" class="mx-6 text-xl font-bold">1</span>
      <a id="Btnnext" class="bg-yellow-500 text-gray-800 rounded-full p-3 hover:bg-yellow-600 cursor-pointer" onclick="pagenxt()">
        <i class="fa fa-forward" aria-hidden="true"></i>
      </a>
    </div>
    <div class="text-center">
      <div class="flex justify-center space-x-6 mb-3">
        {{#each footerlinks}}
          <a class="hover:text-yellow-500 transition-colors duration-300" rel="nofollow" href="{{{this.href}}}" target="_blank">
            <i class="fa {{{this.faicon}}} fa-2x" aria-hidden="true"></i>
          </a>
        {{/each}}
      </div>
      <p class="text-gray-500">&copy; {{{watermark}}}</p>
    </div>
  </div>
</footer>
`);

document.write(template(model));