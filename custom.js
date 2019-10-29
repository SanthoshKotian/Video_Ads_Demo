document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);

function startplayer(){


   var videodiv= document.getElementById('buttonPanel');
   
   var videoscript = document.createElement("VIDEO");
   videoscript.setAttribute("class", "image");
   videoscript.setAttribute("id", "videoid");
   videoscript.setAttribute("width", "100%");

  if (videoscript.canPlayType("video/mp4")) {
    videoscript.setAttribute("src","http://techslides.com/demos/sample-videos/small.mp4");
  } else {
    videoscript.setAttribute("src","http://techslides.com/demos/sample-videos/small.ogg");
  }

  videoscript.setAttribute("controls", "controls");
  videodiv.appendChild(videoscript);

  document.getElementById("videoid").addEventListener("mouseover", mouseOver);
document.getElementById("videoid").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("videoid").play();
}

function mouseOut() {
  document.getElementById("videoid").pause();
}
   
   


var div = document.getElementById('row1'); 
var webicon = document.createElement("IMG");
  webicon.setAttribute("id","webid");
  webicon.setAttribute("class", "webcls");
  webicon.setAttribute("src","images/website.png");
  webicon.setAttribute("height", "30px");
   webicon.setAttribute("width", "30px");

  var anchor = document.createElement("A");

  var Website = document.createTextNode("WEBSITE");
  anchor.setAttribute("href", "https://www.amazon.com");
  anchor.setAttribute("id", "ach1");
  anchor.setAttribute("class", "button");
  anchor.setAttribute("target", "_blank");
  anchor.appendChild(webicon);
   div.appendChild(anchor);
   
 
   
var Eanchor = document.createElement("A");

 var emailicon = document.createElement("IMG");
  emailicon.setAttribute("id","emailid");
  emailicon.setAttribute("class", "emailcls");
  emailicon.setAttribute("src","images/email.png");
  emailicon.setAttribute("height", "30px");
   emailicon.setAttribute("width", "30px");
   
  var Email = document.createTextNode("EMAIL");
  Eanchor.setAttribute("href", "https://www.amazon.com");
  Eanchor.setAttribute("id", "ach2");
  Eanchor.setAttribute("class", "button");
  Eanchor.setAttribute("target", "_blank");
  Eanchor.appendChild(emailicon);
   div.appendChild(Eanchor);
  
   var Sanchor = document.createElement("A");
   
    var smsicon = document.createElement("IMG");
  smsicon.setAttribute("id","smsid");
  smsicon.setAttribute("class", "smscls");
  smsicon.setAttribute("src","images/sms.png");
  smsicon.setAttribute("height", "30px");
   smsicon.setAttribute("width", "30px");
   
  var Sms = document.createTextNode("SMS");
  Sanchor.setAttribute("href", "https://www.amazon.com");
  Sanchor.setAttribute("id", "ach3");
  Sanchor.setAttribute("class", "button");
  Sanchor.setAttribute("target", "_blank");
  Sanchor.appendChild(smsicon);
   div.appendChild(Sanchor);
   
   var Canchor = document.createElement("A");
   
     var callicon = document.createElement("IMG");
  callicon.setAttribute("id","callid");
  callicon.setAttribute("class", "callcls");
  callicon.setAttribute("src","images/call.png");
  callicon.setAttribute("height", "30px");
   callicon.setAttribute("width", "30px");
   
  var Call = document.createTextNode("CALL");
  Canchor.setAttribute("href", "https://www.amazon.com");
  Canchor.setAttribute("id", "ach4");
  Canchor.setAttribute("class", "button");
  Canchor.setAttribute("target", "_blank");
  Canchor.appendChild(callicon);
   div.appendChild(Canchor);
   

}
