
  init();
  function init(){
    var foo = getParameterByName('item1');
    alert(foo);
    var prmstr = window.location.search.substr(1);
    var prmstr2 = window.location.search.substr(2);
    alert(prmstr);
    var linkone = document.getElementById("one");
    linkone.setAttribute('href', 'file:///Users/samrose/Desktop/app_js/index.html'+'?item1=myValue1');
    var linktwo = document.getElementById("two");
    linktwo.setAttribute('href', 'file:///Users/samrose/Desktop/app_js/index.html'+'?item2=myValue2');
    var linkthree = document.getElementById("three");
    linkthree.setAttribute('href', 'file:///Users/samrose/Desktop/app_js/index.html'+'?item3=myValue3');
    var linkfour = document.getElementById("four");
    linkfour.setAttribute('href', 'file:///Users/samrose/Desktop/app_js/index.html'+'?item4=myValue4');
    var linkfive = document.getElementById("five");
    linkfive.setAttribute('href', 'file:///Users/samrose/Desktop/app_js/index.html'+'?item5=myValue5');
    var linksix = document.getElementById("six");
    linksix.setAttribute('href', 'file:///Users/samrose/Desktop/app_js/index.html'+'?item6=myValue6');
    var elem = document.createElement("img");
    //elem.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/7/78/American_Corporate_Flag.svg");
    //elem.setAttribute("src", "GoodBusinessWebsite.png");
    elem.setAttribute("height", "100%");
    elem.setAttribute("width", "100%");
    elem.setAttribute("alt", "Flower");

    if(prmstr == "item2=myValue2"){
        elem.setAttribute("src", "GoodBusinessWebsite.png");
    }
    if(prmstr == "item1=myValue1"){
        elem.setAttribute("src", "samaccord.jpg");
    }


    document.getElementById("container").appendChild(elem);

  }
  function getParameterByName(name, url) {
      if (!url) {
        url = window.location.href;
      }
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
