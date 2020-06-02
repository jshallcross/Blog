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






app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("SERVER HAS STARTED");
});
