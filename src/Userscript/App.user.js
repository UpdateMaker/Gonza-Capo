// ==UserScript==
// @name        Gonza Capo
// @include     *//www.google.com.*
// @version     1.3
// @grant       GM_xmlhttpRequest
// @downloadURL     https://github.com/UpdateMaker/Educamos-Edit/blob/master/App.js
// ==/UserScript==


var input=document.createElement("input");
input.type="button";
  GM_xmlhttpRequest({
     method: "GET",
     url: "http://ip-api.com/json",
     onload: function(xhr) {
      var data = eval("(" + xhr.responseText + ")");
     
         input.value = "Tu ISP es " + data['isp'];
         input.onclick = showAlert;

input.setAttribute("style", "font-size:22px;position:absolute;top:20px;right:320px;");
document.body.appendChild(input); 
 
function showAlert()
{
    alert("Localización: " + data['city'] + ", " + data['country'] + "\n" + "IP: " + data['query'] + "\n");
}
    }
  });

