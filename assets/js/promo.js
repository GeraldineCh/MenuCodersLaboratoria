var lima6=[
    "Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia Huamán","Miriam Mendoza","Elizabeth Condori","Arantza Burga","Grecia Rayme","Janine Vega","Rosario Felix","Daguiana Revoredo","Jenny Velasquez","Nadia Cuadros","Michell More","Marilu Llamocca","Mariel Garcia","Fiorella Cisneros","Geraldine Chauca","Yellitza Rivera","Stephanie Hiyagon","Emma Tapia","Danna Franco","Flor Retamozo","Nathaly Pacheco",
    "Ericka Vidal","Katherine Ortega","Brilly Majuan","Flor Tello","Leslie Avendaño","Cindy Mendoza","Annia Flores","Betsi Loayza","Aida Sulca","Milagros Gutierrez","Nakarid Jave","Angie Cóndor","Maricarmen Rojas","Ariana Cabana","Flor Condori","Mitch Rodríguez","Naomi Villanueva","Mari Castillo","Miriam Peralta","Karin Alejo","Liliana Peña","Ruth Salvador","Maribel Sevilla","Wendy Reyes","Cinthia Quispe",
    "Maria Grecia Cutipa","Ana Durand","Glisse Jorge","Neiza Nuñez","Sandra Solorzano"
    ];

var num=lima6.length;
var promocion=document.getElementById('salida');

function imprimir(event){
  var promocion=document.getElementById('salida');

  for(var i=0; i<num;i++){
  var li=document.createElement("li");
  var div=document.createElement("div");
  div.setAttribute("class","coder");
  var figure=document.createElement("figure");
  var img=document.createElement("img");
  img.src="assets/img/students/" + (i+1) +".png";
  img.setAttribute("class","image");
  img.alt=lima6[i];
  var figcaption=document.createElement("figcaption");
  var span=document.createElement("span");
  span.setAttribute("class","nombre");
  span.innerHTML= lima6[i];

  figcaption.appendChild(span);
  figure.appendChild(figcaption);
  figure.appendChild(img);
  div.appendChild(figure);
  li.appendChild(div);
  salida.appendChild(li);
  }
}

window.addEventListener('load', imprimir);