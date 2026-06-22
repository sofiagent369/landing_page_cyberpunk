require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_KEY);
const sendGrid = require('@sendgrid/mail');

sendGrid.setApiKey(process.env.SENDGRID_KEY);

app.use(bodyParser.json());

// Stripe webhooks
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const payload = req.body;
  const event = stripe.webhooks.constructEvent(
    payload,
    req.headers['stripe-signature'],
    process.env.STRIPE_WEBHOOK_SECRET
  );

  switch (event.type) {
    case 'charge.succeeded':
      // Handle charge succeeded
      console.log('Charge succeeded');
      break;

    default:
      console.error('Unknown event type:', event.type);
  }

  res.status(200).end();
});

// SendGrid webhook
app.post('/sendgrid', (req, res) => {
  const { to, subject, text } = req.body;

  sendGrid.send({
    to,
    from: 'no-reply@example.com',
    subject,
    text,
  });

  res.status(200).end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});