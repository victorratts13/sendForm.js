//SendForm.js
//criado por Victor Ratts
/*
Como ultilizar:
antes de tudo, certifique-se de ter baixado ou linkado o jquery para seu projeto.

1 - edite '#form' para a id do formulario que deseja enviar.
2 - configure o 'type' (metodo) de envio (POST ou GET).
3 - Configure a url para onde será enviado os dados do formulario.
4 - (opcional) remova (ou configure) a mensagen "send ok" da variavel send_ok para a confirmação de envio.


*/

$(document).ready(function(){
	$('#form').submit(function(){
		var fdata = $('#form').serialize();
		var send_ok = document.getElementById('fdiv').innerHTML = "send ok";
		$.ajax({
			type : 'POST',// metodo de envio
			url  : 'send.php',//url para onde os dados serão enviados
			data : fdata, // dados capturados
			sucess: send_ok, // mensagen de sucesso
		});
		return false;
	});
});