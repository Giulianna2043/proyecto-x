//parte logica











//parte visual
var liListItem =null;
function onMensajeKey(evt)
{
    console.log();
  if(evt.keyCode == 13)
  {
    var elInputMensajes=document.getElementById("mensajes");
    crearMensaje(elInputMensajes.value);
    crearChats(elInputMensajes.value);
    elInputMensajes.value="";
  }  
}
function crearMensaje(_mensaje)
{
    var htmlMensajeIn = '<div class="w-message w-message-in">'+
                            '<div class="w-message-text">'+
                                '<h5 class="green-1">Maria Paula Rivarola</h5>'+
                                   '<p>Jajaja Sii finalmente se corto!!</p>'+
                                      '<div class="time">11:13</div>'+
                            '</div>'+
                        '</div>';
    var hora = new Date();
    var htmlMensajeOut ='<div class="w-message w-message-out">'+
	  					    '<div class="w-message-text">'+
	  					        '<p>'+ _mensaje +'</p>'+
	  								'<div class="time">'+hora.getHours()+':'+ hora.getMinutes()+' </div>'+
	  					    '</div>'+
	  					'</div>';
    
    var laConversacion=document.getElementById('conversacion');
    laConversacion.innerHTML+=htmlMensajeOut;
    
    chat.scrollTop = chat.scrollHeight;
}

function crearChats(_mensaje)
{   
     var hora = new Date();
    var htmlItem='<div class="avatar">'+
		  				'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kbUrAfMFN9uj4bnLNkhOgQrRM1CwrJ08Gw3Hku9eerIyOUhnSBbu6gWG" class="wh-44">'+
		  				    '<h4 class="w-contact-name">Laboratoria Perú</h4>'+
		  						'<p class="w-last-message" id="mensaje">'+_mensaje +'</p>'+
		            '</div>'+
				        '<div class="time" id="hora">'+hora.getHours()+':'+ hora.getMinutes()+'</div>';
    if(liListItem==null){
    
    
    liListItem = document.createElement("LI");
    liListItem.innerHTML = htmlItem;
    var listaChats=document.getElementById("listaChats");
    
    listaChats.insertBefore(liListItem, listaChats.childNodes[0]);
    //listaChats.innerHTML+=htmlItem;
}}
function crearListaChats(){}
function actualizarCabeceraChats(){}

































