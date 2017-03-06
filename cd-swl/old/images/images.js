//<!-- menu script

var ns4 = (document.layers);
var ie = (document.all);
var ns6 = (!document.all && document.getElementById);
var doorstyle_wood;
var imagename;


if (document.images) {
  
  
  
  // MainMenu off
  image1off = new Image();
  image1off.src = "images/m1.gif";

  image2off = new Image();
  image2off.src = "images/m2.gif";

  image3off = new Image();
  image3off.src = "images/m3.gif";

  image4off = new Image();
  image4off.src = "images/m4.gif";

  image5off = new Image();
  image5off.src = "images/m5.gif";

  image6off = new Image();
  image6off.src = "images/m6.gif";

  image7off = new Image();
  image7off.src = "images/m7.gif";
  
  image8off = new Image();
  image8off.src = "images/m8.gif";
  
    // MainMenu on
  image1on = new Image();
  image1on.src = "images/m01.gif";

  image2on = new Image();
  image2on.src = "images/m02.gif";

  image3on = new Image();
  image3on.src = "images/m03.gif";

  image4on = new Image();
  image4on.src = "images/m04.gif";

  image5on = new Image();
  image5on.src = "images/m05.gif";

  image6on = new Image();
  image6on.src = "images/m06.gif";

  image7on = new Image();
  image7on.src = "images/m07.gif";
  
  image8on = new Image();
  image8on.src = "images/m08.gif";

}
  
  

/* note image53 is used */

function turnOn(imageName) {
  if (document.images) {
    document[imageName].src = eval(imageName + "on.src");
  }
}


function turnOff(imageName) {
  if (document.images) {
    document[imageName].src = eval(imageName + "off.src");
  }
}

function openIt(id,leftpos, toppos) {	

	if (document.images) {
		if(ns4){
			if(leftpos){
				document.layers[id].visibility = "show";
				document.layers[id].left = leftpos;
				document.layers[id].top = toppos;
			}
	
		}else if(ie){
		
			if(leftpos){
				document.all[id].style.visibility = "visible";
				document.all[id].style.left = leftpos;
				document.all[id].style.top = toppos;
			}
			
		}else if(ns6){
		
			if(leftpos){
				document.getElementById(id).style.visibility = "visible";
				document.getElementById(id).style.left = leftpos;
				document.getElementById(id).style.top = toppos;
			}
		}
	}
}

function openItNoPos(id) {	

	if (document.images) {
		if(ns4){
			document.layers[id].visibility = "show";
	
		}else if(ie){
			document.all[id].style.visibility = "visible";
			
		}else if(ns6){
			document.getElementById(id).style.visibility = "visible";
		}
	}
}

function closeItNoPos(id) {	

	if (document.images) {
		if(ns4){
			document.layers[id].visibility = "hide";
	
		}else if(ie){
			document.all[id].style.visibility = "hidden";
			
		}else if(ns6){
			document.getElementById(id).style.visibility = "hidden";
		}
	}
}

function addDoorStyle(page,wood,image){
	window.location.href = "../myproject/processdoorstyles.htmx@image=" + image + "&page=" + page + "&wood=" + doorstyle_wood;
	//window.close();
}

function addPaletteStyle(style){
	window.opener.location.href = "../myproject/processpalettestyles.htmx@style=" + style;
	window.close();
}

function closeIt(id){

	if (document.images) {
		if(ns4){
			document.layers[id].visibility = "hide";
		}	else if(ie){
			document.all[id].style.visibility = "hidden";	
		}	else if(ns6){
			document.getElementById(id).style.visibility = "hidden";
		}
	}
}


//global var - needed for ShowRoom Tour
var popuplocation;

function setPopupLocation(location)
{
	popuplocation = location;
}

//global var - needed for updateXCoor()
var x;


//this function updates the width of red space (how much to move over
// the drop down menus, by updating a variable in includes/TextLinks.htm
function updateXCoor(){

	//http://www.webmasterworld.com/forum91/1553.htm

		//the width of the page content
		var contentWidth = 775;
		var	myWidth = 0;
	
		//http://www.howtocreate.co.uk/tutorials/index.php?tut=0&part=16
		if( typeof( window.innerWidth ) == 'number' ) {
			 //Non-IE
			myWidth = window.innerWidth;
		} else if( document.documentElement &&
		  ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
			 //IE 6+ in 'standards compliant mode'
			 myWidth = document.documentElement.clientWidth;
		} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
			//IE 4 compatible
			myWidth = document.body.clientWidth;
		}	
		
		if (myWidth > contentWidth){
			x = (myWidth - contentWidth) / 2;
		}else{
			x = 10;
		}
			
		//window.status = 'The blank space = ' + x + ' ...available width = ' + myWidth;
		
		
}

function setInnerText (elementId, text) {
  var element;
  if (document.getElementById) {
    element = document.getElementById(elementId);
  }
  else if (document.all) {
    element = document.all[elementId];
  }
  if (element) {
    if (typeof element.textContent != 'undefined') {
      element.textContent = text;
    }
    else if (typeof element.innerText != 'undefined') {
      element.innerText = text;
    }
    else if (typeof element.removeChild != 'undefined') {
      while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
      }
      element.appendChild(document.createTextNode(text));
    }
  }
 }
 
 
 function setInnerTexthtml (elementId, text) {
  var element;
  if (document.getElementById) {
    element = document.getElementById(elementId);
  }
  else if (document.all) {
    element = document.all[elementId];
  }
  if (element) {
    if (typeof element.innerHTML != 'undefined') {
      element.innerHTML = text;
    }
    else if (typeof element.innerHTML != 'undefined') {
      element.innerHTML = text;
    }
    else if (typeof element.removeChild != 'undefined') {
      while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
      }
      element.appendChild(document.createTextNode(text));
    }
  }
 }

function openWindow(url) {
    var w = window.open(url, "win", "");
    w.focus();
}
 
function openNewWindow(URLtoOpen, windowName, windowFeatures) {
newWindow=window.open(URLtoOpen, windowName, windowFeatures); }

 
  
// -->

