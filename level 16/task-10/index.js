const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

const ENV = process.env.NODE_ENV || 'development';


app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Home Page</h1>');
});


app.get('/api/data', (req, res) => {
  res.json({ message: 'Here is your data!' });
});


app.get('/error', (req, res) => {
  try {
    throw new Error('Something went wrong!');
  } catch (err) {
    res.status(500).send(`
      <h1>Error 500</h1>
      <p>${err.message}</p>
      ${ENV === 'development' ? `<pre>${err.stack}</pre>` : ''}
    `);
  }
});


app.get('/api/item/:id', (req, res) => {
  const item = null; 
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.json(item);
});

app.use((req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    res.status(404).json({ message: 'API route not found' });
  } else {
    res.status(404).send(`
      <h1>404 Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} (${ENV} mode)`);
});
