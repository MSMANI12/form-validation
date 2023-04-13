let inputs=document.getElementsByClassName("form-controls");


function onSignUp(){
	let isValid;
	for(let x=0;x<inputs.length;x++){
		isValid=0;
		if(inputs[x].value ===""){
			inputs[x].parentNode.getElementsByTagName("p")[0].classList.add("invaild-input")
			isValid++;
		}
		else{
			inputs[x].parentNode.getElementsByTagName("p")[0].classList.remove("invaild-input")
		}
	}
}
	// if(isValid ==0){
		// if(getPassword.value.lenght<6){
			// document.getElementsByClassName("Password-msg")[0].classList.add("invalid");
		// }
		// else{
	       // document.getElementsByClassName("Password-msg")[0].classList.remove("invalid");
		   // if(getPassword.value !== confPass.value){
			   // document.getElementsByClassName("Password-msg")[0].classList.add("invalid");
		// }
		// else{
	       // document.getElementsByClassName("Password-msg")[0].classList.remove("invalid");
		// }
		// }
	// }
// }