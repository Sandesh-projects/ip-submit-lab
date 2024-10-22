const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;


app.use(cors());
app.use(bodyParser.json());


const articles = [
  { id: 1, title: 'Career in Web development', content: 'In todays era you can get 13 LPA if you are frontend developer and if you are a full stack developer you can get more than 20 LPA' },
  { id: 2, title: 'Career in Politics', content: 'A person can become an exceptional politician if he is having the desire to work for the people and he is having exceptional skill of communication' },
  { id: 3, title: 'Career in Business', content: 'You can become an business man if you are having an plan that can fill the desire of the customer and make money out of it' }
];

app.get('/api/articles', (req, res) => {
  res.json(articles);
});
app.post('/api/inquiries', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  console.log('Inquiry received:', { name, email, message });
  res.status(200).json({ message: 'Inquiry submitted successfully!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
