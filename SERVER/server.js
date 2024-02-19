// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(cors());
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'yashbansal414@gmail.com', // Your email
      pass: 'yfxcqosclsnrfsop' // Your password
    }
  });

  // Email options
  let mailOptions = {
    from: email,
    to: 'yashbansal414@gmail.com', // Your email
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    // Send mail
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
