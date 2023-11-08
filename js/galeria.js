//variables de la galeria//
var imgIndex = 0;
/*var img = [
    "../../img/galeria/01.jpeg",
    "../../img/galeria/02.jpeg",
    "../../img/galeria/03.jpeg",
    "../../img/galeria/04.jpeg",
    "../../img/galeria/05.jpeg",
    "../../img/galeria/06.jpeg",
    "../../img/galeria/07.jpeg",
    "../../img/galeria/08.jpeg"
];*/
var imagenes = document.querySelectorAll('.projecthexagon img');
var ventanaemergenteIMG = document.getElementById("ventanaemergenteIMG");

//------GALERIA-----//

imagenes.forEach(function(imagen, index){
    imagen.addEventListener('click', function(){
        abrir(index);
    });
});

//Abrir imagen//

function abrir(index){
    var navbar = document.getElementById("navbar");
    navbar.style.display = "none";
    imgIndex = index;
    ventanaemergenteIMG.src = imagenes[index].src;
    var ventanaemergente = document.getElementById('ventanaemergente');
    ventanaemergente.style.display = "block";
    console.log("abrir imagen");

}

//Cerrar galeria//

function cerrar(){
    var ventanaemergente = document.getElementById('ventanaemergente');
    ventanaemergente.style.display = "none";
    var navbar= document.getElementById("navbar")
    navbar.style.display = "flex";
    console.log("cerrar imagen");

}

//Cambiar de imagen//
document.getElementById("adelante").addEventListener('click', function(){
    cambiarImg(1);
    console.log("adelante");

});

document.getElementById("atras").addEventListener('click', function(){
    cambiarImg(-1);
    console.log("atras");
})

function cambiarImg(step){
    imgIndex += step;
        if(imgIndex<0){
         imgIndex = imagenes.length -1;
         console.log("menos -1");
        }else if (imgIndex === imagenes.length){
         imgIndex = 0;
         console.log("volvemos a 0");
        }
    ventanaemergenteIMG.src = imagenes[imgIndex].src;
    console.log("cambio imagen");
};


/*function cambiarImg(step){
    imgIndex += step;
        if(imgIndex<0){
         imgIndex = img.length -1;
         console.log("menos -1")
        }else if (imgIndex === img.length){
         imgIndex = 0;
         console.log("volvemos a 0")
    ventanaemergenteIMG.src = img[imgIndex];
    console.log("cambio imagen")

}}*/