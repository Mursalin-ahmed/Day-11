var fs=require('fs');
var http=require('http');
var server = http.createServer(function(req,res){

    if(req.url='/'){
        //Asyncronus
        
        // fs.readFile('Home.html', function(error,data){

            // res.writeHead(200,{'Content-Type':'text/html'});
            // res.write(data);
            // res.end();
        // })
        //Syncronus
        let myData = fs.readFileSync('Home.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(myData);
        res.end();

    }
});

server.listen(5050);
console.log("Server Run Success");
