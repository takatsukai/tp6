window.onload = function() {
  
  document.querySelector("#titleBanner h1").classList.add("tp6");
  
    document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("showMe");
    }
    
     document.querySelector("#equipment").onclick = function() {
     document.querySelector("#equipment ul").classList.toggle("showMe");
    }
     
     document.querySelector("#directions").onclick = function() {
     document.querySelector("#directions ul").classList.toggle("showMe");
    }

}
