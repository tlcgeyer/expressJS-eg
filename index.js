import express from 'express'

//You need to create an express app to gain access to the express method. 
// Creating an express App
const app = express()
const port = +process.env.PORT || 4000
/*You set up the router via the express App. np: patch is faster then put*/

/*Router/Routing: defines how the clients requests are handled by the application endpoints(URL).*/

/*Routing using Express Framework:
Routes are defined by using the method of the "app" object.  */
app.get('/',display, (req, res)=> {
    res.json({
        status: res.statusCode,
        msg: 'Ayo'
    })
})


//or
/*Routing without using Express.
Framework: For handling all HTTP methods(eg. GET, POST, PUT, DELETE,etc) use the app.all() method.
The * means to include everything.*/
app.all('*', (req, res)=> {
    res.json({
        status: 404, 
        msg: '404 Page'
    })
})

// Example based on middleware(middleware function)
function display(req, res, next){
    console.log("Ohayooo");
    next()
}

/*The next() is used to hand off the control to the next callback. Sometimes we use app.use() to specify the middleware function as the callback. So, to perform routing with Express.js you have only to load the express and then use the app object to handle the callbacks according to the requirement. 

=================================================*/

/* Middleware
home work
=======
1. What is middleware?
~Functions that can access & modify the request and response objects in an Express application.
2. How can we use it in express?
~Express.js has a middleware system that allows developers to define and manage middleware functions. These functions can perform tasks such as 
adding functionality to an app, such as logging, authenication, and error-handling.
3. How do we use it in our API?
~ services that facilitate communication and data exchange between different applications, systems, or layers. Middleware plays a 
crucial role in enhancing the functionality, security, and performance of APIs. */
app.listen(port)


