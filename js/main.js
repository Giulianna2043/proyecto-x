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
/*---------END---Agregar Mensaje-------------*/