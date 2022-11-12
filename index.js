var fs=require('fs');
var http=require('http');
var server = http.createServer(function(req,res){

    if(req.url='/'){
        //Exist Asyncronus
        fs.exists('home.html', function(result){
        if(result){
            res.end("true");
        }
        else{
            res.end("false");
        }
            
        })
        //Exist Syncronus
        // let result = fs.existsSync('ahome.html')
        // if(result){
        //     res.end("true");
        // }
        // else{
        //     res.end("false");
        // }
        //Delete Syncronus
        // let error = fs.unlinkSync('demoNewNewSync.txt')
        // if(error)
        //     {
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write("File Delate fail");
        //         res.end();
        //     }
        //     else{
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write("File Delate Success");
        //         res.end();
        //     }   
        
        //Delate Asyncronus
        // fs.unlink('demoNewNew.txt',function(error){
        //      if(error)
        //     {
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write("File Delate fail");
        //         res.end();
        //     }
        //     else{
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write("File Delate Success");
        //         res.end();
        //     }   
        // })
        //Rename Syncronus
        // let error = fs.renameSync('demoSync.txt','demoNewNewSync.txt');
        // if(error)
        //     {
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write("File Rename fail");
        //         res.end();
        //     }
        //     else{
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write("File Rename Success");
        //         res.end();
        //     }
        //Rename Asyncronus
        // fs.rename('demoNew.txt','demoNewNew.txt',function(error){
        //     if(error){
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write("File Rename fail");
        //         res.end();
        //     }
        //     else{
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write("File Rename Success");
        //         res.end();
        //     }
        // })
        // //syncronus write
        // let error = fs.writeFileSync('demoSync.txt','Welcome to demo');
        // if(error)
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
