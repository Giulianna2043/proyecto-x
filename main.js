//Lógica objeto
function Chat(_nombre, _imagen,mensaje,hora)
{
	this.nombre =  _nombre;
	this.imagenURL = _imagen;
	this.ultimoMensaje = mensaje;
	this.horaUltimoMensaje = hora;

	/*this.borrarMensajes = function()
	{
		alert("borrado");
	};*/
}
var dataListaChats = [
	new Chat("Laboratoria", 'image/logocodeacademy.png',"buenos dias","11:35"),
	new Chat("Katy", 'image/katy.jpg',"laboratoria","11:22"),
	new Chat("bart", 'image/bart.jpg',"buscando inmformacion","10:35"),
    new Chat("bart", 'image/bart.jpg',"buscando inmformacion","10:35"),
    new Chat("bart", 'image/bart.jpg',"buscando inmformacion","10:35"),
    new Chat("bart", 'image/bart.jpg',"buscando inmformacion","10:35"),

];

//Parte visual
//liListItem = document.createElement('LI');
var liListItem = null;
function init()
{
	initChatList();
}
function initChatList() {
    //elListaChats==ul
	var elListaChats = document.getElementById("lista-chats");

	for (var i in dataListaChats) {
		var htmlChatItem = '<li draggrable="true" ><div class="avatar">' +
			'<img src="' + dataListaChats[i].imagenURL +  '" alt="" class="wh-44">' +
			'<h4 class="w-contact-name">' + dataListaChats[i].nombre + '</h4>' +
			'<p class="w-last-message" id="mensaje">' + dataListaChats[i].ultimoMensaje + '</p>' +
			'</div>' +
			'<div class="time" id="hora">' + dataListaChats[i].horaUltimoMensaje + '</div></li>';
		//dataListaChats[i].borrarMensajes();
		elListaChats.innerHTML += htmlChatItem;
	}

	setEventsChatList();
}

function setEventsChatList() {
	var listaChats = document.getElementById('lista-chats');
	var arrListItems = listaChats.getElementsByTagName('li');
	for (var i = 0; i < arrListItems.length; i++) {
		/*arrListItems[i].onclick = function(){
		 alert("Click!");
		 };*/
		arrListItems[i].addEventListener('click', onChatItemClick);
	}
}

function onChatItemClick(evt) {
	//console.log(evt.currentTarget);
	var contactName = evt.currentTarget.getElementsByClassName('w-contact-name')[0].textContent;
	var imgURL = evt.currentTarget.getElementsByClassName('wh-44')[0].src;
	console.log('click');

    crearListaChats();
}

function onMensajeKey(evt){
	if (evt.keyCode == 13) {
		var elInputMensajes = document.getElementById("mensajes");

		crearChat(elInputMensajes.value);
		crearMensaje(elInputMensajes.value);

		elInputMensajes.value = "";
	}
}

function crearMensaje(_mensaje) {
	var htmlMensajeIn = '<div class="w-message w-message-in">' +
		'<div class="w-message-text">' +
		'<h5 class="green-1">Maria Paula Rivarola</h5>' +
		'<p>Jajaja Sii finalmente se corto!!</p>' +
		'<div class="time">11:13</div>' +
		'</div>' +
		'</div>';

	var d = new Date();
	var htmlMensajeOut = '<div class="w-message w-message-out">' +
		'<div class="w-message-text">' +
		'<p>' + _mensaje + '</p>' +
		'<div class="time">' + d.getHours() + ':' + d.getMinutes();
	+'</div>' +
	'</div>' +
	'</div>';

	var mensaje = liListItem.getElementsByClassName("w-last-message")[0];
	mensaje.innerHTML = _mensaje;
	console.log();


	var elChat = document.getElementById("chat");

	elChat.innerHTML += htmlMensajeOut;
//agregaqndo...
	alert(olaa);
	socket.emit('send',_mensaje);
	//fin
	elChat.scrollTop = elChat.scrollHeight;
}

function crearListaChats(){
var chat=document.getElementById("chat");
    chat.innerHTML="";
}

function crearChat(_mensaje){
	var elListaChats = document.getElementById("lista-chats");
    var d = new Date();
	if (liListItem == null) {
		liListItem = document.createElement('LI');
		var htmlChatItem = '<div class="avatar">' +
			'<img src="image/logocodeacademy.png" alt="" class="wh-44">' +
			'<h4 class="w-contact-name">Laboratoria Perú</h4>' +
			'<p class="w-last-message" id="mensaje">' + _mensaje + '</p>' +
			'</div>' +
			'<div class="time" id="hora">'+ d.getHours() + ':' + d.getMinutes();+  '</div>';

		liListItem.innerHTML = htmlChatItem;
            //Inserte una nueva <li> elemento antes de que el primer elemento hijo de un elemento <ul>
		elListaChats.insertBefore(liListItem, elListaChats.childNodes[0]);
	}
	setEventsChatList();

	//elListaChats.innerHTML += htmlChatItem;
}

function actualizarCabeceraChat(_contactName, _imageURL, _estado){
	var chatHeader = document.getElementById("chat-header");
	chatHeader.getElementsByClassName('w-contact-name')[0].innerHTML = _contactName;
	chatHeader.getElementsByClassName('w-users-messages')[0].innerHTML = _estado;
	chatHeader.getElementsByTagName('img')[0].src = _imageURL;
}

/*function actualizarChat(_contactName){
	var chat = document.getElementById("chat");
	chat.getElementsByClassName('w-contact-name')[0].innerHTML = _contactName;
	chatHeader.getElementsByClassName('w-users-messages')[0].innerHTML = _estado;
	chatHeader.getElementsByTagName('img')[0].src = _imageURL;
} */



//buscador
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
