var newester = document.getElementById("neuest");

function formatDate(date, sep="") {
  const yyyy = date.getFullYear();
  const mm = ('00' + (date.getMonth()+1)).slice(-2);
  const dd = ('00' + date.getDate()).slice(-2);

  return `${yyyy}${sep}${mm}${sep}${dd}`;
}

fetch("./inforoom/newslist.json").then(function(response) {
    return response.json();
}).then(function(newslis) {
    var nwstdate = newslis[0].data;
    var daters = new Date(nwstdate.substr(0, 4), nwstdate.substr(4, 2) - 1, nwstdate.substr(6, 2));
    var descs = newslis[0].title01;
    var targetflags = false;
    var target = ""
    if (newslis[0].linktarget != "") {
        target = newslis[0].linktarget;
        targetflags = true;
    }

    if (targetflags) {
        newester.innerHTML = "<a class=\"mainlinker\" href=\"./inforoom/" + target + "\">" + descs + " (" + formatDate(daters, ".") + ")</a>";
    }
    else {
        newester.innerHTML = descs + " (" + formatDate(daters, ".") + ")";
    }
});