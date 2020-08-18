function printMessage(){
	var input = document.getElementById("name");
	var name = input.value;
	var firstChar = name.charAt(0).toLowerCase();

	if(firstChar === 'j') {
		alert("Good Bye "+ name);
	} else {
		alert("Hello "+name);
	}
	reloadWindow();
}

function reloadWindow(){
	location.reload();
}