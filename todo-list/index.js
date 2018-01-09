var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	//handle input
	if(input === "list") {
		todos.forEach(function(listItem, index) {
			console.log(index+": "+listItem);
		});
	} 
	else if(input === "new"){
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		//add to todos array
		todos.push(newTodo);
		console.log("Added new Todo");
	}
	else if(input === "delete"){
		//ask for index of todo to be deleted
		var index = prompt("Enter index of todo to delete");
		//delete the todo
		todos.splice(index,1);
	}

	//ask for new input
	input = prompt("What would you like to do?");
}
console.log("YOU HAVE QUIT THE APP");