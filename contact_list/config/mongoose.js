// // require a library
// const mongoose = require('mongoose');
// // connection to the database
// mongoose.connect('mongodb://localhost/contact_list_db');
// // acquire the connection as db variable
// const db = mongoose.connection;
// // checking error
// db.on('error' , console.error.bind(console , 'error'));

// // if connection is success full then open the database once
// db.once('open', function(){
//     console.log('Successfully connected to the database');
// });

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/test');
  console.log("This is mongoes");
  
}