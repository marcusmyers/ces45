$(document).ready(function(){
	var socket = io.connect('http://10.20.15.77:3000');

	socket.on('pres', function(data){
		if (data === '37')   impress().prev();
		else if(data === '39') impress().next();	
	});
});
