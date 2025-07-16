var newester = document.getElementById("neuslister");

function formatDate(date, sep="") {
  const yyyy = date.getFullYear();
  const mm = ('00' + (date.getMonth()+1)).slice(-2);
  const dd = ('00' + date.getDate()).slice(-2);

  return `${yyyy}${sep}${mm}${sep}${dd}`;
}

fetch("./newslist.json").then(function(response) {
    return response.json();
}).then(function(newslis) {
    var nwstdate = newslis[0].data;
    var descs = newslis[0].description;
    var target = newslis[0].linktarget;
    var otex = "";
    
    for(var j = 0; j < newslis.length; j++) {
        var nwstdate = newslis[j].data;
        var daters = new Date(nwstdate.substr(0, 4), nwstdate.substr(4, 2) - 1, nwstdate.substr(6, 2));
        var formdaters = formatDate(daters, ".");
        var titleae = newslis[j].title02;
        var descs = newslis[j].description;
        var target = newslis[j].linktarget;

        if(j == (newslis.length-1)) {
            if (target != "") {
                otex += "<div class=\"infoboxfoot\">\n<h4>・"+formdaters+"</h4>\n<h1>" + titleae + "</h1>\n<p>" + descs + "</p>\n<p><a href=\"./"+target+"\">\> 詳細はこちら</a></p>\n</div>";
            }
            else {
                otex += "<div class=\"infoboxfoot\">\n<h4>・"+formdaters+"</h4>\n<h1>" + titleae + "</h1>\n<p>" + descs + "</p>\n</div>";
            }
        }
        else {
            if (target != "") {
                otex += "<div class=\"infoboxmain\">\n<h4>・"+formdaters+"</h4>\n<h1>" + titleae + "</h1>\n<p>" + descs + "</p>\n<p><a href=\"./"+target+"\">\> 詳細はこちら</a></p>\n</div>\n";
            }
            else {
                otex += "<div class=\"infoboxmain\">\n<h4>・"+formdaters+"</h4>\n<h1>" + titleae + "</h1>\n<p>" + descs + "</p>\n</div>\n";
            }
        }
    }

    newester.innerHTML = otex;
});