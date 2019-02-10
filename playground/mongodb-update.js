// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('User').deleteMany({name: 'Wilson Tio'});

   db.collection('Todos').findOneAndUpdate({
       _id: new ObjectID('5c5ffc59f85540ba0599f351')
   }, {
       $set:{
           completed: true
       }
   }, {
       returnOriginal: false
   }).then((result) => {
       console.log(result);
   });

   db.collection('User').findOneAndUpdate({
       _id: new ObjectID('5c5f85d438dd6321dc070ee3')
   },{
       $set:{
           name:'Wilson'
       },
       $inc:{
           age: 1
       }
   }, {
       returnOriginal: false
   }).then((result) => {
       console.log(result);
   });

    // db.close();
});

