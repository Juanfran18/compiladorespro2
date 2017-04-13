function captura(){
	var user = document.getElementById('usuario').value;
	var pass = document.getElementById('contraseña').value;
	var f= new Date();
	var STfecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
	var SThora = f.getHours()+":"+f.getMinutes()+":"+f.getSeconds();
	
	var usu="CCayetano";
	var con="123";
	
	if(user==usu){
		if(pass==con){			
			window.alert("Hola " + user);
		}else{
			window.alert("Usuario y/o contrase\u00f1a incorrectas");
		}			
	}else{
		window.alert("Usuario y/o contrase\u00f1a incorrectas");
	}
	window.alert("intento de ingresar:\nfecha:"+STfecha+"\nhora: "+SThora);
	
}
