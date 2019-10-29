
document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);

function startplayer(){
 
    var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

 var btndiv = document.getElementById('overbtn');
 /*   
var Imagediv= document.getElementById('imagescript');
   
  var imgScript = document.createElement('img');
  imgScript.setAttribute("id", "imageid");
  imgScript.setAttribute("class", "image");
  imgScript.src="https://www.classifiedliveads.com/wp-content/uploads/2015/06/Create-your-ads.png";
  Imagediv.appendChild(imgScript);
*/
 
 var webicon = document.createElement("IMG");
  webicon.setAttribute("id","webid");
  webicon.setAttribute("class", "webcls");
  webicon.setAttribute("src","images/website.png");
  webicon.setAttribute("height", "60px");
   webicon.setAttribute("width", "60px");
   webicon.setAttribute("margin-top", "10px");
  btndiv.appendChild(webicon);

  document.getElementById('webid').addEventListener('click', function(e){
      
      alert("website");
      
  });
  
  var smsicon = document.createElement("IMG");
  smsicon.setAttribute("id","smsid");
  smsicon.setAttribute("class", "smscls");
  smsicon.setAttribute("src","images/sms.png");
  smsicon.setAttribute("height", "60px");
   smsicon.setAttribute("width", "60px");
  smsicon.setAttribute("margin-top", "10px");
  btndiv.appendChild(smsicon);
  
  document.getElementById('smsid').addEventListener('click', function(e){
      
      alert("hello sms");
      
  });
  
  
 
   var callicon = document.createElement("IMG");
  callicon.setAttribute("id","callid");
  callicon.setAttribute("class", "callcls");
  callicon.setAttribute("src","images/call.png");
  callicon.setAttribute("height", "60px");
   callicon.setAttribute("width", "60px");
   callicon.setAttribute("margin-top", "10px");
  btndiv.appendChild(callicon);
  
   document.getElementById('callid').addEventListener('click', function(e){
      
      alert("call");
      
  });
  
  
  
   var emailicon = document.createElement("IMG");
  emailicon.setAttribute("id","emailid");
  emailicon.setAttribute("class", "emailcls");
  emailicon.setAttribute("src","images/email.png");
  emailicon.setAttribute("height", "60px");
   emailicon.setAttribute("width", "60px");
  emailicon.setAttribute("margin-top", "10px");
  btndiv.appendChild(emailicon);
  
   document.getElementById('emailid').addEventListener('click', function(e){
      
      alert("Email");
      
  });
  
  
/*  
  var button_one = document.createElement("BUTTON");
  button_one.innerHTML = "WEBSITE";
  button_one.setAttribute("class", "website");
  var anchor = document.createElement("A");
  /*var Atext = document.createTextNode("Learn more");
  anchor.setAttribute("href", "https://www.amazon.com");
  anchor.setAttribute("id", "ach1");
  anchor.setAttribute("class", "button");
  anchor.setAttribute("target", "_blank");
  anchor.appendChild(button_one);
       div.appendChild(anchor);
       
       
  var button_two = document.createElement("BUTTON");
  button_two.innerHTML = "CALL";
  button_two.setAttribute("class", "Call");
  var callachor = document.createElement("A");
  
  callachor.setAttribute("href", "tel:+660123456789");
  callachor.setAttribute("id", "ach2");
  callachor.setAttribute("class", "button");
  callachor.setAttribute("target", "_blank");
  callachor.appendChild(button_two);
       div.appendChild(callachor);
       
       
  var button_three = document.createElement("BUTTON");
  button_three.innerHTML = "EMAIL";
  button_three.setAttribute("class", "Email");
  var emailanchor = document.createElement("A");
  
  emailanchor.setAttribute("href", "mailto:santhosh@mnshettytech.com");
  emailanchor.setAttribute("id", "ach3");
  emailanchor.setAttribute("class", "button");
  emailanchor.setAttribute("target", "_top");
  emailanchor.appendChild(button_three);
       div.appendChild(emailanchor);
       
  
   var button_four = document.createElement("BUTTON");
   button_four.innerHTML = "SMS";
   button_four.setAttribute("class", "Sms");
   var smsanchor = document.createElement("A");
  
  smsanchor.setAttribute("href", "sms:+91 9480961591?body=this is the text message to send");
  smsanchor.setAttribute("id", "ach3");
  smsanchor.setAttribute("class", "button");
  smsanchor.setAttribute("target", "_blank");
  smsanchor.appendChild(button_four);
       div.appendChild(smsanchor);
  
  
  */
}
 
