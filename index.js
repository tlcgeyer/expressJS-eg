import express from 'express'

//You need to create an express app to gain access to the express method. 
// Creating an express App
const app = express()
const port = +process.env.PORT || 4000
/*You set up the router via the express App. np: patch is faster then put*/

//Router
app.get('/',(req, res)=> {
    res.status(200).json({
        msg: 'Ayo'
    })
})

//or

//* means everything
app.all('*', (req, res)=> {
    res.json({
        status: 404, 
        msg: '404 Page'
    })
})

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
crucial role in enhancing the functionality, security, and performance of APIs. 
*/
app.listen(port)
