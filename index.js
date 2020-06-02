const express = require('express');
		  app = express(); 

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', function(req, res){
	res.render("index");
});

app.get('/blog', function(req, res){
	res.render("blog");
});






app.listen(3000, function(){
	console.log("Server Has Started!");
});