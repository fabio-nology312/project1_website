

function myFunction() {
	var guy, text;
  
	guy = document.getElementById("numb").value;
  
	if (guy == "") {
		alert("Your name must be filled out");
		text =" : We are glad to be at your service!"
	} else {
	prompt("Your Concern");
        text = " : " + guy + ", your concern has been noted.";
	}
	document.getElementById("demo").innerHTML = text;
}

