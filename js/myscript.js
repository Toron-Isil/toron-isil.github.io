var minHeight = 38;
var maxHeight = 193;      
        
        
function toggleGlobalNav() {
  var x = document.getElementById("global-nav");
  if (x.style.height === maxHeight + "px") {
    x.style.height = minHeight + "px";
  } else {
    x.style.height = maxHeight + "px";
  }
}

function hideGlobalNav() {
    document.getElementById('global-nav').style.height=minHeight + "px"
}        
        

function MouseRollover() {
        document.getElementById("profile").src= "img/its-me-ps-yel.jpg";
    }
function MouseOut() {
        document.getElementById("profile").src= "img/its-me-ps-blue.jpg";
    }

// function onmouseover() {
//     document.getElementById("profile").src="img/its-me-ps-yel.jpg";
//}