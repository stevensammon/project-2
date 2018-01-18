

//code to handle what happens after the user clicks the  sign in button
	$("#signInButton").on("click", function(e){
		e.preventDefault();
		var username = $("#signInInput").val().trim();
	//code to get users info from database
	$.get("/api/user"+username, function(data){
		//get back an html page
		window.location.pathname=data;
	});//ends ajax function
	});//ends sign in button click function

//code to handle what happens if user clicks on create account
	$("#createAcct").on("click", function(e){
		e.preventDefault();
		//code to display modal with form or open page with form
	})
	
//code to happen if user does a search
	//code to grab search terms
	switch(searchParam){

		case "wine":
			var searchInput = $("#search").val().trim();
			//code to get wine info from database
			$.get("/api/wines/"+searchInput, function(data){
				//code to handle what happens if wine not found
				if(!data){
					//code to ask user if they want to add wine
					//switch to modal
					window.prompt("Would you like to add this wine?");
					//code redirecting user to add wine page/modal

				}
				else{	
				//comes back as a json object
				//code to display result

				}
			})
			break;

		case "variety":
			var searchInput = $("#search").val().trim();
			$.get("/api/variety/"+searchInput, function(data){
				if(!data){
					window.prompt("Would you like to add a wine of this varietal?");

				}
				else{	

				}
			})
			break;

					case "country":
			var searchInput = $("#search").val().trim();
			$.get("/api/country/"+searchInput, function(data){
				if(!data){
					window.prompt("Would you like to add a wine from this country?");

				}
				else{	

				}
			})
			break;


}//ends switch
	