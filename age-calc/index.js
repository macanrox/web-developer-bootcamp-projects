var age = prompt("Enter your age");
//var ageDays = age*365.25;

var ageDays = 0;
for(var i = 0; i < age; i++){
	if((i % 4) == 0){
		ageDays += 365.25;
		console.log("Run: "+i+" LY: "+ageDays);
	}
	else {
		ageDays += 365;
		console.log("Run: "+i+" RY: "+ageDays);
	}
}

alert("You have lived for about "+ageDays+" days");