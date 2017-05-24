


function cargarArray(){
    
var xmlhttp = new XMLHttpRequest();
var i = 0, x = "", y = "", j = 0;
xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        //hacemos parse de un objeto en notacion Json a 
        //texto con la intencion de convertirlo en un OBJETO JS
        //this.responseText es lo que parseamos
        myObj = JSON.parse(this.responseText);



        //document.getElementById("demo2").innerHTML = x;

        document.getElementById("demo").innerHTML = "Nombre due&ntilde;o:"+myObj.name + "<br> " + "Edad:"+ myObj.age;
         
         /*for (i in myObj.pets) {
         x += "<h2>" + myObj.pets[i].animal + "</h2>";
         for (j in myObj.pets[i].name) {
         x += myObj.pets[i].name[j];
         
         }
         }
         document.getElementById("demo2").innerHTML = x;*/
         for (i in myObj.pets) {
         x += myObj.pets[i].animal + " : "+ myObj.pets[i].name+"</br>";
         
         }
         document.getElementById("demo2").innerHTML = x;
         }
    
};

xmlhttp.open("GET", "json_demo.txt", true);
xmlhttp.send();
}
       
window.onload= function(){
         
    document.getElementById("button").onclick = cargarArray;
           
       };