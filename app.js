const express= require('express');
const path= require('path');
const mysql= require('mysql');
const dotenv= require('dotenv');
const jwt= require('jsonwebtoken');
const bcrypt= require('bcryptjs');
const bodyParser = require('body-parser')

dotenv.config({path: './.env'})
const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

const publicDirectory= path.join(__dirname, './public')
app.use(express.static(publicDirectory))


db.connect( (error)=>{
    if(error){
        console.log(error)
    } else{
        console.log("MYSQL Connected......")
    }
})
//Define Routes S


app.use(express.urlencoded({extended: false}));

app.use(express.json());
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.use()





app.set('view engine', 'hbs');
app.listen(3000, ()=>{
    console.log("Server started on port 300");
})