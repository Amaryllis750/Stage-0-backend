# Simple Node.js API with Express that Returns A JSON Response

## A minimal Express.js API that Returns Email, GitHub URL, and datetime in JSON format 

This project is a simple Node.js API built with Express.js that returns a JSON response containing an email address, a GitHub repository URL, and the current date-time in ISO format. It demonstrates the basic setup of an Express server and handling of GET requests to serve structured JSON data.

## Use Guide
1. Before cloning the project, ensure that you have Node.js installed on your system by running `node -v` in the command line. If Node.js is not installed, download and install it from their official site

2. Clone the repository `git clone https://github.com/Amaryllis750/Stage-0-backend.git` and navigate into the project folder `cd Stage-0-Backend`

3. Run the following command to install dependencies `npm install`

4. Install nodemon globally `npm install -g nodemon` (If you have not already done so)

5. Start the server with the code `nodemon server.js`



## API Documentation
### Endpoint
`GET / `

### Request Format
No request body is needed

### Reponse Format
A JSON object with the following fields
```
{
    "email": "hngemail@example.com",
    "github_url": "https://github.com/user/repo.git", 
    "current_datetime": "YYYY-MM-DDThh:mm:ss"
}
```

## Example Usage
Using `curl`:

`curl http://localhost:8010`


Using Postman, ThunderClient Or Browser, visit:

`http://localhost:8010`


## BackLinks
To Find and Hire Elite Devleopers in Different Technologies:

[Hire Python Developers](https://hng.tech/hire/python-developers)  
[Hire C# Developers](https://hng.tech/hire/csharp-developers)  
[Hire Golang Developers](https://hng.tech/hire/golang-developers)  
[Hire PHP Developers](https://hng.tech/hire/php-developers)  
[Hire Java Developers](https://hng.tech/hire/java-developers)  
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)  
