var fs=require('fs');
var http=require('http');
var server = http.createServer(function(req,res){

    if(req.url='/'){
        //syncronus write
        let error = fs.writeFileSync('demoSync.txt','Welcome to demo');
        if(error)
            {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File write fail");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File write Success");
                res.end();
            }
        //Asyncronus write
        // fs.writeFile('demo.txt','Hellow world',function(error){
        //     if(error)
        //     {
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write("File write fail");
        //         res.end();
        //     }
        //     else{
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write("File write Success");
        //         res.end();
        //     }

        // });



        //Asyncronus-->read
        // fs.readFile('Home.html', function(error,data){

            // res.writeHead(200,{'Content-Type':'text/html'});
            // res.write(data);
            // res.end();
        // })
        //Syncronus-->read
        // let myData = fs.readFileSync('Home.html');
        // res.writeHead(200,{'Content-Type':'text/html'});
        // res.write(myData);
        // res.end();

    }
});

server.listen(5050);
console.log("Server Run Success");
