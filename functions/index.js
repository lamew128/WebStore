const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.SK)

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());

app.get('/', (req, res) => res.status(200).send("123"));

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //201 = ok - created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });

});

exports.api = functions.https.onRequest(app);