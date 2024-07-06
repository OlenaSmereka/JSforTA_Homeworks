// Task1
const http=require("http");
const os=require("os");
const path=require("path");


http.createServer((request,response)=> {
    response.writeHead(200,"Content-Type: text/html");
    const user=os.userInfo().username;
    const OStype=os.type();
    const timeMinutes=Math.floor(os.uptime()/60);
    const currWD=process.cwd();
    const SFname=path.basename(__filename);
    response.write(`
        <h1>Information</h1>
        <ul>
            <li>Current user: ${user}</li>
            <li>Type of the operating system: ${OStype}</li>
            <li>Time in minutes: ${timeMinutes}</li>
            <li>Current working directory: ${currWD}</li>
            <li>Name of the server file: ${SFname}</li>
        </ul>
        `);
    response.end();
}).listen(5000);
console.log("The server is listening on http://localhost:5000");


// Task2

const http=require("http");
const {UserGreetings} = require ("./personalmodule.js");
http.createServer((request,response)=> {
    response.writeHead(200,"Content-Type: text/html");
    const requestDate= new Date ();
    const greetingMessage = UserGreetings();
response.write(`
    <p>Request date: ${requestDate}</p>
    <p>Request date: ${greetingMessage}</p>
    `);
response.end();
}).listen(8000);
console.log("The server is listening on http://localhost:8000");
    





