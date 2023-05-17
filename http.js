var http=require('http')
var url=require("url")
var fs=require("fs")

http.createServer(function(req,res){
    //  var qw=url.parse(req.url,true)
    //  f="."+qw.pathname
    //  data=fs.readFileSync(f)
    //  res.write(data)
    //  res.end()
    if (req.url=="/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>THis is homepage</h1>")
        console.log("h");
        res.end()
    }
    
}).listen(5000)
// var u=require("url")
// var addr="http://localhost:8080/default.html?year=2023"
// u.parse(address,true)