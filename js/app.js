//Variables//
//variable del texto inyectado about us//
var textoinyectado = document.getElementById('textoInyectado')
//los extos inyectados//
var contenidoTools = {
    tool1: '<div class="container-2"><div class="text-right"><h1 class="title-bk">Aula</h1><hr class="barrita"><p class="text-p-bk">Aprende, comparte y crea en nuestro espacio dedicado a la educación y formación. Nuestra aula está equipada con las herramientas necesarias para fomentar la creatividad y el aprendizaje.</p></div><div class="hexagon"><img src="../../img/tools/aula.jpg" alt="retuladores aula taller"></div></div>',
    tool2: '<div class="container-2"><div class="text-right"><h1 class="title-bk">Mesa Comun</h1><hr class="barrita"><p class="text-p-bk">Un lugar para reunirse, colaborar y conectarse. Nuestra mesa o área comun es un espacio versátil donde los miembros pueden trabajar juntos y compartir ideas .</p></div><div class="hexagon"><img src="../../img/tools/mesa comun.jpg" alt="mesa crafting"></div></div>',
    tool3: '<div class="container-2"><div class="text-right"><h1 class="title-bk">Impresion 3D</h1><hr class="barrita"><p class="text-p-bk">Ofrecemos acceso a impresoras 3D de alta calidad para dar vida a tus diseños y prototipos.<br><br>Disponemos de impresoras de filamento y de impresoras de resina.</p></div><div class="hexagon"><img src="../../img/tools/3d print.jpg" alt="impressora 3D"></div></div>',
    tool4: '<div class="container-2"><div class="text-right"><h1 class="title-bk">Electronica</h1><hr class="barrita"><p class="text-p-bk">Explora el mundo de la electrónica y la robótica en nuestro taller de electrónica. Aquí encontrarás herramientas y equipos para tus proyectos de circuitos y componentes electrónicos.</p></div><div class="hexagon"><img src="../../img/tools/electronica.jpg" alt="soldadura electronica"></div></div>',
    tool5: '<div class="container-2"><div class="text-right"><h1 class="title-bk">Laser</h1><hr class="barrita"><p class="text-p-bk">Corta, graba y personaliza con precisión en nuestro espacio de corte láser. Experimenta con una variedad de materiales y crea diseños detallados con facilidad.</p></div><div class="hexagon"><img src="../../img/tools/laser.jpg" alt="cortadora laser"></div></div>',
    tool6: '<div class="container-2"><div class="text-right"><h1 class="title-bk">Cocina</h1><hr class="barrita"><p class="text-p-bk">Recarga energías y comparte momentos en nuestra cocina comunitaria. Disfruta de un espacio para preparar comidas, hacer un descanso y socializar con otros miembros.</p></div><div class="hexagon"><img src="../../img/tools/kitchen.jpg" alt="Taza y tetera té"></div></div>',
    tool7: '<div class="container-2"><div class="text-right"><h1 class="title-bk">Almacenamiento</h1><hr class="barrita"><p class="text-p-bk">Mantén tus proyectos organizados y seguros en nuestro espacio de almacenamiento. Ofrecemos soluciones de almacenamiento para mantener tus herramientas y materiales a salvo.</p></div><div class="hexagon"><img src="../../img/tools/storage.jpg" alt="cajas carton almacenamiento"></div></div>',
    tool8: '<div class="container-2"><div class="text-right"><h1 class="title-bk">Carpinteria</h1><hr class="barrita"><p class="text-p-bk">Explora la carpintería y trabaja con madera en nuestro taller de carpintería. Aquí encontrarás herramientas y equipo para dar forma a tus proyectos de madera.</p></div><div class="hexagon"><img src="../../img/tools/wood.jpg" alt="taller carpinteria"></div></div>',
    tool9: '<div class="container-2"><div class="text-right"><h1 class="title-bk">Forja</h1><hr class="barrita"><p class="text-p-bk">Trabaja con metales en nuestro taller de forja. Ten acceso a herramientas especializadas para tus proyectos de metalurgia.</p></div><div class="hexagon"><img src="../../img/tools/metal.jpg" alt="taller metal"></div></div>',
    tool10: '<div class="container-2"><div class="text-right"><h1 class="title-bk">Pintura en esprai</h1><hr class="barrita"><p class="text-p-bk">Dale un toque profesional a tus proyectos con nuestro espacio de pintura en aerosol. Pinta tus creaciones de manera eficiente y de forma segura con extraccion en este espacio dedicado</p></div><div class="hexagon"><img src="../../img/tools/graffiti-925355_1280.jpg" alt="aerosoles montana"></div></div>',
    tool11: '<div class="container-2"><div class="text-right"><h1 class="title-bk">Baño</h1><hr class="barrita"><p class="text-p-bk">Un espacio esencial para tu comodidad mientras trabajas en el taller. Nuestro baño está limpio, bien mantenido y es totalmente accesible</p></div><div class="hexagon"><img src="../../img/tools/toilet.jpg" alt="cartel baño accesible y inclusivo"></div></div>',

};
//var para detectar si hay un texto abierto//
var textoAbierto = null;


//Var Contactos//
const form = document.getElementById("contacto");
        const nombreInput = document.getElementById("nombre");
        const emailInput = document.getElementById("email");
        const mensajeTextarea = document.getElementById("mensaje");
        const mensajeEnviadoDiv = document.getElementById("mensaje-enviado");
        const mensajeErrorDiv = document.getElementById("mensaje-error");



//Funciones//


//Barra navegador scroll//
window.addEventListener('scroll',function(){
    if(window.pageYOffset> 100){
        document.getElementById('navbar').style.backgroundColor = "#ffffff";
        document.getElementById('navbar').style.boxShadow = "0 0 50px #0000006f";

    }else{
        document.getElementById('navbar').style.backgroundColor = "transparent";
        document.getElementById('navbar').style.boxShadow = "none";
    }
}, {passive: true});

//Funcion para el menu desplegable//
const menuButton = document.getElementById('menubutton');
            const menu = document.getElementById('menu');
    
            menuButton.addEventListener('click', () => {
                if (menu.style.display === 'block') {
                    menu.style.display = 'none';
                    menuButton.innerHTML = '<p class="titulo">Mostrar Menú</p>';
                } else {
                    menu.style.display = 'block';
                    menuButton.innerHTML = '<p class="titulo">Ocultar Menú</p>';
                }
            });

// Links proyectos
/*function link(seccion){
    window.location.href = './pages/gallery/gallery.html' + seccion;
}*/

//Funcion Textos inyectados en 

document.querySelectorAll('.toolhexagon').forEach(function(div){
    div.addEventListener('click', function(){
        var divId = this.id;

        if(textoAbierto === divId){
            textoinyectado.innerHTML='';
            textoAbierto = null;
        }else{
            textoinyectado.innerHTML = contenidoTools[divId];
            textoAbierto = divId;
            textoinyectado.scrollIntoView({behaivor: 'smooth', block: 'center'});
        }
    });
});


//CONTACTO//
var correos = JSON.parse(localStorage.getItem("correos")) || [];

//event listner evitar recarga pagina//
if (window.location.pathname === '../pages/contact/contact.html') {
form.addEventListener("submit", function (envio) {
    envio.preventDefault();

            // Validamos los campos//
            if (form.checkValidity()) {

                var nombre = nombreInput.value;
                var email = emailInput.value;
                var mensaje = mensajeTextarea.value;

                console.log(`nombre:`,nombre);
                console.log(`email:`,email);
                console.log(`mensaje:`,mensaje);

                // Crearmos el array//
                const formData = {
                    nombre,
                    email,
                    mensaje,
                };

                //push en el array correos//
                correos.push(formData);

                // Guardamos en el Local Storage
                guardarDatos(correos);

                // Mostrar mensaje ok y limpiar el formulario
                mensajeEnviadoDiv.style.display = "block";
                form.reset();
                console.log(`El correo ha sido enviado`);

            } else {
                // Mostrar mensaje error
                mensajeErrorDiv.style.display = "block";
            }
        });
}

//GUARDAR

function guardarDatos(correos) {
    localStorage.setItem("correos", JSON.stringify(correos));
}