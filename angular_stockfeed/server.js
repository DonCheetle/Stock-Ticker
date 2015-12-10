(function(express, server, bodyParser, fs){
    
    server.all('/*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      next();
    });
    
    server.use(express.static("public"));
    
    server.get("/", function(req,res){
        res.redirect("/home.html");
    });
    
    server.listen(process.env.PORT || 8080, 
        process.env.IP || 'localhost', function(){
        
        console.log("server online");
    });
})(
    require("express"),
    require("express")(),
    require("body-parser"),
    require("fs")
);