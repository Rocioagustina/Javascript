/*Mi idea es hacer una plataforma "similar" a netflix, en la que se pueda dar de alta un usuario y 
que queden guardadas las preferencias del usuario*/



/*DAR DE ALTA UN USUARIO*/

function NuevoUsuarioNetmax(){
  
    var nombre = document.getElementById("txtnombre").value
    var apellido = document.getElementById("txtapellido").value
    var usuario = document.getElementById("txtusuario").value
    var email = document.getElementById("txtcorreo").value

    var usuarioConfirmado = confirm("Confirma tus datos: Nombre: " + nombre + "\nApeliido: " +  apellido +
                                    "\nUsuario: " + usuario + "\nEmail: " + email);

    if(usuarioConfirmado == true){  

        

        var registroContraseña = prompt("Ingresa tu contraseña nuevamente").toLowerCase();
        console.log(registroContraseña.length);
        

        if(registroContraseña == registroContraseñaConfirmacion){
            alert("Necesitamos que verifiques tu mail");
            Contraseña.push(registroContraseña);
        } else{
            alert("Las contraseñas no coinciden!");
            
        }
    }
        
}

/*GUARDAR DATOS*/

    function guardar()
	{
		localStorage.setItem("usuario", document.getElementsByClassName("usuario").value);
		localStorage.setItem("contraseña", document.getElementsByClassName("contraseña").value);
 
		mostrarDatos();
    }

    function mostrarDatos()
	{
		
		var resultado="Usuario: "+localStorage.getItem("usuario");
		resultado+="<br>Contraseña: "+localStorage.getItem("contraseña");
 
		document.getElementById("resultado").innerHTML=resultado;
	}
 
	window.onload=function()
	{
		mostrarDatos();
 
		if(localStorage.getItem("usuario")!=null)
			document.getElementsByClassName("usuario").value=localStorage.getItem("usuario");
		if(localStorage.getItem("contraseña")!=null)
			document.getElementsByClassName("contraseña").value=localStorage.getItem("contraseña");
	}
    


/*LIMPIAR FORMULARIO*/

function LimpiarFormulario(){
    if(confirm("Se borrará toda la informacion del formulario, estas de acuerdo?")){
    document.forms[0].submit();
     }else{
    return false;
     }
}


/*DATOS GUARDADOS*/

function DatosGuardados(){

    var txtusuario=document.getElementById("txtnombre").value
    
    var txtcorreo=document.getElementById("txtcorreo").value
    
    sessionStorage.setItem("txtusuario,txtcorreo"); 
    
    mostrarDatos("txtnombre");
    
    }
    
    
    function mostrarDatos(){
    
    var datosDisponibles=document.getElementsByClassName("datos");
    
    datosDisponibles.innerHTML='';
    
    for(var i=0;i<sessionStorage.length;i++){
    
                    var txtnombre=sessionStorage.key(i);
    
                    var txtcorreo=sessionStorage.getItem(txtnombre);
    
                    datosDisponibles.innerHTML += (" " +txtnombre+' - '+txtcorreo+ " ");
    
                    }
                    
    
    }
    

   
         
    function limpiarDatos() {
    
    var datosDisponibles=document.getElementsByClassName("datos");
    
    datosDisponibles.innerHTML=("Los datos permanecen.");
    
    }

/*BOTON DE IR ARRIBA*/

$(document).ready(function(){
 
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
 
});

/*JQUERY*/

$(document).ready(function() {
    $('#amor-de-calendario').on('click', function() {
        alert('Seras redirigido a Cuevana')
    });
});

$(document).ready(function() {
    $('#enola-holmes').on('click', function() {
        alert('Seras redirigido a Cuevana')
    });
});

$(document).ready(function() {
    $('#anne-with-an-e').on('click', function() {
        alert('Seras redirigido a Cuevana')
    });
});

$(document).ready(function() {
    $('#it').on('click', function() {
        alert('Seras redirigido a Cuevana')
    });
});

$(document).ready(function() {
    $('#merli').on('click', function() {
        alert('Seras redirigido a Cuevana')
    });
});

$(document).ready(function() {
    $('#lucifer').on('click', function() {
        alert('Seras redirigido a Cuevana')
    });
});


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });



/*HORA*/

$(function() {
    function mostrarHora() {
      var fecha = new Date(),
          hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
      $('#hora').text(hora);
    }
    setInterval(mostrarHora, 1000);
  });


/*AJAX*/

$("#enviar").click(function(){ 
    $.get( "js/test.txt",
    function(data, status){
  alert("Resultado: Enviado con exito" + data);
    });
  });


function eleccionDePlan (){

    if(document.getElementById('boton1').clicked == true) { 

        alert("Elegiste el plan basico ($199)");
    }

    if(document.getElementById('boton2').clicked == true) { 

        alert("Elegiste el plan estándar ($319)");
    }

    if(document.getElementById('boton').clicked == true) { 

        alert("Elegiste el plan premium ($449)");
    }

}
    