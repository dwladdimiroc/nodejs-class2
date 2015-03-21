//Función Javascript
var serverIP = 'localhost';
var port = 8080;

try {
	socket = io.connect(serverIP+':'+port+'/'); //Conexion con Socket.io
	
	socket.on('broadcastCallback', function (data) {
		$('#chat').append('<p>' + data.text + '</p>');
	});
}
catch (err) {
	alert('No está disponible el servidor Node.js');
}

$(function() {
	socket.emit('initRoom', {});
});

$(function() {
	$('#btn-send').click(function() {
		var message = $('#text-send').val();
		$('#text-send').val('');
		$('#chat').append('<p>' + message + '</p>');
		socket.emit('broadcast', {text: message});
	});	
});
