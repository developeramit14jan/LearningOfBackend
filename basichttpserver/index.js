const http =require('http');

const port = 8000;
const fs = require('fs')
// this is the request handler function for handling the request and response
function requestHandler(request , response){
    console.log(request.url);
    response.writeHead(200 , {'content-type': 'text/html'});
    // this is for single page to loaded 
    // fs.readFile('./index.html' , function(err , data){
    //     if(err){
    //         console.log("ERROR :" , err);
    //         return response.end("ERROR")
    //     }
    //     return response.end(data);
    // })
    // response.end(index.html);


    let filepath;
    switch(request.url){
        case '/':
            filepath = './index.html';
            break;
        case '/profile':
            filepath ='./profile.html';
            break;
        default:
            filepath ='./404.html'        
    }

    // for reading of file
    fs.readFile(filepath , function(err , data){
        if(err){
            console.log('ERROR :' , err);
            return response.end('<h1>Error</h1>');
        }

        return response.end(data);
    })
}
const server = http.createServer(requestHandler);


server.listen(port , function(err){
    if(err){
        console.log("Server is not running !");
    }
    console.log("Server is running");
})