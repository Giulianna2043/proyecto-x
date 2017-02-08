
/*----------------crear imagen de enviar----------------*/
/*var send =document.createElement("i");
send.className="icon-insert_emoticon", "w-write-message-icon";
var li=document.querySelector(".w-write-message-item");

var input=document.getElementById('mensajes');
input.addEventListener('keydow',enviar);
function enviar(evt){
	if(input.value!="")
	{
		li.classList.remove("icon-mic");
		li.className=
	}
}*/



/*


 /*-------------buscador------*/

  var search = document.getElementById("search");
  var contacto = document.getElementsByTagName("h4");
  var forEach = Array.prototype.forEach;
 
 search.addEventListener("keyup", function(e){
   var choice = this.value;
 
   forEach.call(contacto, function(f){
       if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
           f.parentNode.parentNode.style.display = "none";   
       else
          f.parentNode.parentNode.style.display = "block";        
   });
 }, 
 false);
 /*-------------end buscador------*/

/*------------Agregar Mensaje-------------*/

var mensajes = document.getElementById('mensajes');
var chat = document.getElementById('chat');
mensajes.addEventListener('keyup', onMensajesClick);

function onMensajesClick(evt){

    //si preciono enter
    if(evt.keyCode==13){
        agregarMensaje();

    }

function agregarMensaje()
{
    //Agregar hora
            var fecha = new Date();
            var hora = fecha.getHours()+":"+fecha.getMinutes();
            window.status=hora;
    //agregar el mesaje tipeado en id=chat

    if(mensajes.value!==""){

            //creeun elementos para nombre, texto y hora
            var abuela = document.createElement("div");
            abuela.classList = "w-message w-message-out";
            var madre = document.createElement("div");
            madre.classList = "w-message-text";
            var h5NombreHijo = document.createElement("h5");
            var pMensajesHijo = document.createElement("p");
            pMensajesHijo.innerHTML=mensajes.value;
            var divHoraHijo = document.createElement("div");
            divHoraHijo.innerHTML=hora;
            divHoraHijo.style.float="right";
            //cree un elementos para nombre texto hora***END

            

            //Creando paquete mensaje
            madre.appendChild(h5NombreHijo);
            madre.appendChild(pMensajesHijo);
            madre.appendChild(divHoraHijo);

            abuela.appendChild(madre);
            chat.appendChild(abuela);
            mensajes.value="";
            //Scroll
            chat.scrollTop = chat.scrollHeight;

    }
}
---END---Agregar Mensaje-------------*/

/*-------------buscador----------------*/
var search = document.getElementById("search"),
        contacto = document.getElementsByTagName("h4"),
        forEach = Array.prototype.forEach;

        search.addEventListener("keyup", function(e){
        var choice = this.value;

        forEach.call(contacto, function(f){
            if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
                f.parentNode.parentNode.style.display = "none";
            else
                f.parentNode.parentNode.style.display = "block";
        });
        },
        false);
/*-------end ------buscador----------------*/

/*------------Agregar Mensaje-------------*/
	var mensaje;
    var chat;


window.onload = iniciar;


function iniciar(){
	mensajes= document.getElementById("mensajes");
    chat= document.getElementById("chat");
	mensajes.addEventListener('keyup', onInputKeyUp);
}

function onInputKeyUp(evt){
	
    if(evt.keyCode==13 && mensajes.value.length!=0){
        sendMensajes();
    }
}

function sendMensajes(){
	var chat= document.getElementById("chat");
	var texto= mensajes.value;
	var cuadro= document.createElement('div');
	cuadro.className="w-message w-message-out";
	var cuadro2= document.createElement('div');
	cuadro2.className="w-message-text";
	var parrafo= document.createElement('p');
	var time= document.createElement('div');
	time.className="time";
	
	var horario= new Date();
	var hora= horario.getHours();
	var minuto= horario.getMinutes();
	
	if(minuto<10){
		minuto='0'+minuto;
	}
	
	chat.scrollTop=chat.scrollHeight;
    chat.scrollTop = chat.scrollHeight;
	
	time.innerHTML=hora+":"+minuto;
	parrafo.innerHTML=texto;
	cuadro.appendChild(cuadro2);
	cuadro2.appendChild(parrafo);
	cuadro2.appendChild(time);
	chat.appendChild(cuadro);
	
	mensajes.value="";
    mensajes.focus();
    
}


            abuela.appendChild(madre); 
            chat.appendChild(abuela);        
            mensajes.value="";      
            //Scroll 
            chat.scrollTop = chat.scrollHeight;
            
    }   
}
/*---------END---Agregar Mensaje-------------*/
