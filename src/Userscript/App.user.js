// ==UserScript==
// @name        Gonza Capo
// @include     *//www.google.com.*
// @version     4.5
// @grant       GM_xmlhttpRequest
// @downloadURL     https://github.com/UpdateMaker/Gonza-Capo/raw/master/src/Userscript/App.user.js
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==





  GM_xmlhttpRequest({
     method: "GET",
     url: "http://ip-api.com/json",
     onload: function(xhr) {
      var data = eval("(" + xhr.responseText + ")");
     if (data['isp'] == "CPS"){
         var oldSrc = '/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
var newSrc = 'https://github.com/UpdateMaker/Gonza-Capo/blob/master/MetroTel.png';
$('img[src="' + oldSrc + '"]').attr('src', newSrc);
    var div_data = "<div >" + data['query'] + "</div>";
    $("#logo-sub").html(div_data);
     }
         if (data['isp'] == "Cablevision S.A."){
         var oldSrc = '/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
    var newSrc = 'https://github.com/UpdateMaker/Gonza-Capo/raw/master/FiberCorp.png';
$('img[src="' + oldSrc + '"]').attr('src', newSrc);
    var div_data = "<div >" + data['query'] + "</div>";
    $("#logo-sub").html(div_data);
     }
     
     else { var input=document.createElement("input");
input.type="button";
             input.value = "Tu ISP es " + data['isp'];
         input.onclick = showAlert;
           input.setAttribute("style", "font-size:14px;position:absolute;top:20px;left:120px;");
document.body.appendChild(input); 
     }
      

 
function showAlert()
{
    alert("Localización: " + data['city'] + ", " + data['country'] + "\n" + "IP: " + data['query'] + "\n");
}
    }
  });
