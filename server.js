var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require("./middleware");



app.use(middleware.logger);

app.get("/about", middleware.requireAunthentication, function(req, res){
	res.send("about us!");
});

app.use(express.static(__dirname + "/public"));


app.listen(PORT, function(){
	console.log("Express server started");
	console.log("Port Number: " + PORT);
});