const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
require('dotenv').config();
const cheerio = require("cheerio");
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cookieParser = require('cookie-parser')

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)


const { Fertilizer, Tomato } = require("./models/models");
const { authmiddle } = require("./middlewares/authmiddleware");
const userRouter = require("./routers/usersroute");

const app = express();
const port = 5501;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser())

app.use("/user" , userRouter)


app.get("/",authmiddle ,async function(req,res)
{
    console.log("Home back")
     res.status(201).send({ message: "Entered Home Success", success: true , userid:req.userid });
} )


app.get("/logout" , async function(req,res)
{
    res.clearCookie('token');
    return res.status(201).send({message:"Logged Out" , success:true})
})

mongoose.connect('mongodb://localhost:27017/Tomatix', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));




app.post('/fertilizers', async (req, res) => {
    try {
        const fertilizer = new Fertilizer(req.body);
        const result = await fertilizer.save();
        res.status(201).send({ message: 'Fertilizer added successfully', id: result._id });
    } catch (err) {
        res.status(500).send({ error: 'Failed to add fertilizer' });
    }
});

app.get('/fertilizers', async (req, res) => {
    try {
        const fertilizers = await Fertilizer.find({});
        res.status(200).send(fertilizers);
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch fertilizers' });
    }
});

app.post('/tomatoes', async (req, res) => {
    try {
        const tomato = new Tomato(req.body);
        const result = await tomato.save();
        res.status(201).send({ message: 'Tomato added successfully', id: result._id });
    } catch (err) {
        res.status(500).send({ error: 'Failed to add tomato' });
    }
});

app.get('/tomatoes', async (req, res) => {
    try {
        const tomatoes = await Tomato.find({});
        res.status(200).send(tomatoes);
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch tomatoes' });
    }
});

app.post('/getmarketintelligence', async (req, res) => {
    try {
        const state_name = req.body.statename;

        if (typeof state_name !== 'undefined' && state_name.trim() === "") {
            return res.status(400).send({ message: "No state name provided" });
        }

        const url = `https://www.kisandeals.com/mandiprices/TOMATO/${state_name}/ALL`;

        const response = await axios.get(url);
        const cheer = cheerio.load(response.data);

        let tables = [];
        cheer('table').each(function (i, table) {
            let tabledata = [];
            cheer(table).find('tr').each(function (j, row) {
                let rowdata = [];
                cheer(row).find('td,th').each(function (k, box) {
                    rowdata.push(cheer(box).text().trim());
                });
                tabledata.push(rowdata);
            });
            tables.push(tabledata);
        });

        let q_and_a = [];
        cheer('body > div:nth-child(10) > div > div > ul > li').each(function (i, li) {
            const q = cheer(li).find('h5').text().trim();
            const a = cheer(li).find('p').text().trim();
            q_and_a.push({ q, a });
        });

        res.status(200).send({ table: tables, qanda: q_and_a, success: true, message: "successful" });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send({ success: false, message: "Error fetching market intelligence data" });
    }
});

app.post('/generate-content', async (req, res) => {
    try {
      const { chatHistory } = req.body;
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  
      const conversation = chatHistory.map((chat) => `${chat.from}: ${chat.message}`).join('\n');
      
      const result = await model.generateContent([conversation]);
  
      res.json({ response: result.response.text() });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
