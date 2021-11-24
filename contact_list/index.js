const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const app = express();
app.set('view engine' , 'ejs');   // for searching the view engine
app.set('views' , path.join(__dirname , 'views')); // for joining the path of views folder
app.use(express.urlencoded());  // this is a middle ware
// passing static file
app.use(express.static('assets'));
// creating your own middle ware
// app.use(function(request , response , next){
//     request.MyName ="Amit";
//     console.log("Middle ware 1 called");
//     next();
// });

// // moddle ware 2 called
// app.use(function(request , response , next){
//     console.log(request.MyName);
//     console.log("Middle ware 2 called");
//     next();
// })
var contactList =[
    {
        name:"Amit kumar",
        phone:"9113171080"
    },{
        name:"Lal Baboo Singh",
        phone:"9113171989"
    },
    {
        name:" Sumit Kumar Singha",
        phone:"9939408014"
    }
];
app.get('/', function(request , response){
    // console.log(request);
    // response.send("<h1>Hey This is singh</h1> ");
    return response.render('home' ,{
        title :"My Contact List",
        contact : contactList
    });                       
});
app.get('/delete-contact/:phone' , function(request , response){
    console.log(request.params);
    let phone = request.params.phone;
    let contactIndex = contactList.findIndex(contact => contact.phone === phone);
    console.log(contactIndex);
    if(contactIndex != -1){
        contactList.splice(contactIndex , 1);
    }

    return response.redirect('back');
})
// another controller
app.get('/practice' , function(request , response){
    return response.render('practice' , {title:"I am flying"});
})

// another controller for form
app.post('/create_contact' , function(request , response){
    // console.log(request);
    // return response.redirect('/practice');

    console.log(request.body);
    console.log(request.body.name);

    contactList.push(
        // {
        //     name:request.body.name,
        //     phone:request.body.phone
        // }
        request.body
    );

    return response.redirect('/');
    
})
app.listen(port , function(err){
    if(err){ console.log(err);}
    console.log("Server is running on the port")
});