// ==UserScript==
// @name       Northlands Educamos - Desplegables Completos.
// @include    https://northlandsol-ar.educamos.com/Evaluacion/Informes*
// @include    https://northlandsnd-ar.educamos.com/Evaluacion/Informes*
// @version     1
// @author Juan Ignacio Veron Desimoni
// @description Un boton permite imprimir en varios formatos.
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==


var input=document.createElement("input");
input.type="button";
input.value="Varios Formatos";
document.body.appendChild(input); 

input.setAttribute("style", "background-color: #0072c6;padding: 4px 24px;font-size:13px;color: white;border:0px;font-size:14px;position:absolute;top:235px;right:60px;");
input.onclick = loco;

function loco()
{
$(' Select.valid#FormatoImpresionInformeId').each(function() {

    $(this).empty().append(
        $('<option value="1">PDF</option>'),
        $('<option value="2">XLS</option>'),
        $('<option value="3">WORD</option>'));
   
});
}
