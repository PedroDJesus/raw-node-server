//Imports the HTTP module from Nodejs
//The HTTP module allows you to create a web server and handle HTTP requests and responses
const http = require('http');

//Defines the host and the port from where the server is running
const host = 'localhost';
const port = 3000;

//Creates a server using the HTTP module
const server = http.createServer((req, res) => {

    //Verifies the URL of the request
    if (req.url === '/') {
        //If the URL is the root, returns a message indicating that the server is running

        res.writeHead(200, {'Content-Type': 'text/html'});//Defines the header of the response with status 200 (OK) and the content type as HTML
        res.write('<h1>Server is running</h1>');
        res.write('Hello World!');
        res.end();//Ends the response
        return;
    } else {
        //If the URL is not the root, returns a 404 error message

        res.writeHead(404, {'Content-Type': 'text/html'});//Defines the header of the response with status 404 (Not Found) and the content type as HTML
        res.write('<h1>404 Not Found</h1>');
        res.write('The page you are looking for probably does not exist.');
        res.end();//Ends the response
        return;
    }
});

//Starts the server and listens for incoming requests on the specified host and port
server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}/`);
});