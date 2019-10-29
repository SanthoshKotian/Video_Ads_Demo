
document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);

function startplayer(){
 
    
    
var Imagediv= document.getElementById('imagescript');
   
  var imgScript = document.createElement('img');
  imgScript.setAttribute("id", "imageid");
  imgScript.setAttribute("class", "image");
  imgScript.src="https://www.classifiedliveads.com/wp-content/uploads/2015/06/Create-your-ads.png";
  Imagediv.appendChild(imgScript);


  var div = document.getElementById('row1');
 var webicon = document.createElement("IMG");
  webicon.setAttribute("id","webid");
  webicon.setAttribute("class", "webcls");
  webicon.setAttribute("src","images/website.png");
  webicon.setAttribute("height", "30px");
   webicon.setAttribute("width", "30px");
  var anchor = document.createElement("A");
  /*var Atext = document.createTextNode("Learn more");*/
  anchor.setAttribute("href", "https://www.amazon.com");
  anchor.setAttribute("id", "ach1");
  anchor.setAttribute("class", "button");
  anchor.setAttribute("target", "_blank");
  anchor.appendChild(webicon);
       div.appendChild(anchor);
       
       
 var callicon = document.createElement("IMG");
  callicon.setAttribute("id","callid");
  callicon.setAttribute("class", "callcls");
  callicon.setAttribute("src","images/call.png");
  callicon.setAttribute("height", "30px");
   callicon.setAttribute("width", "30px");
  var callachor = document.createElement("A");
  
  callachor.setAttribute("href", "tel:+660123456789");
  callachor.setAttribute("id", "ach2");
  callachor.setAttribute("class", "button");
  callachor.setAttribute("target", "_blank");
  callachor.appendChild(callicon);
       div.appendChild(callachor);
       
       
  var emailicon = document.createElement("IMG");
  emailicon.setAttribute("id","emailid");
  emailicon.setAttribute("class", "emailcls");
  emailicon.setAttribute("src","images/email.png");
  emailicon.setAttribute("height", "30px");
   emailicon.setAttribute("width", "30px");
  var emailanchor = document.createElement("A");
  
  emailanchor.setAttribute("href", "mailto:santhosh@mnshettytech.com");
  emailanchor.setAttribute("id", "ach3");
  emailanchor.setAttribute("class", "button");
  emailanchor.setAttribute("target", "_top");
  emailanchor.appendChild(emailicon);
       div.appendChild(emailanchor);
       
  
   var smsicon = document.createElement("IMG");
  smsicon.setAttribute("id","smsid");
  smsicon.setAttribute("class", "smscls");
  smsicon.setAttribute("src","images/sms.png");
  smsicon.setAttribute("height", "30px");
   smsicon.setAttribute("width", "30px");
   var smsanchor = document.createElement("A");
  
  smsanchor.setAttribute("href", "sms:+91 9480961591?body=this is the text message to send");
  smsanchor.setAttribute("id", "ach3");
  smsanchor.setAttribute("class", "button");
  smsanchor.setAttribute("target", "_blank");
  smsanchor.appendChild(smsicon);
       div.appendChild(smsanchor);
       
}
 
