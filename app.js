var express = require('express'),
	app = express();

// We'll be using jade to build our pages
app.set('view engine', 'jade');
// Set the view folder
app.set('views', './views');

/*
* Routes
*/

// Index
app.get('/',function(req,res){
	res.render('index');
});



// Create the server
var server = app.listen(8000,function(){
	console.log("Server succesfully running at localhost:8000");
});
