const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 4000;


const url = "mongodb+srv://chessMaster:chessmaster@cluster0.38mss.mongodb.net/test";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, });


const Car = mongoose.model('Car', { //collection
    name: String,
    price: Number
});


// Car.insertMany(cars).then(() => { console.log('cars saved correctly') }).catch(e => { console.error(e.message) })

// Car.findOneAndUpdate({ name: 'Hundai' },{price:17},{returnOriginal:false, useFindAndModify:false}).then(doc => {
//     if (doc === null) bmw.save().then(doc => console.log(doc)).catch(e => { console.log(e) });
//     console.log(doc)
// })



app.get('/test', function (req, res) {
  console.log('hi');


  
const bmw = new Car({ name: 'Hundai', price: 60000 });

bmw.save().then(doc => console.log(doc)).catch(e=>{console.log(e)});

  res.send({data: 'hello world'})



})


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, ".", "/client", "build")));

// const Routs = require("./server/routes/Routs");
// app.use("/", Routs);

app.get('*', (req, res) => {  
  res.status(404).redirect(path.join(__dirname, "../"))
});



app.listen(PORT, () => console.log(`Server Live On Port: ${PORT}`));


