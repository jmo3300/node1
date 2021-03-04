import express from 'express';

const app = express();
const port = 5000;

app.get('/api/greeting', (req, res) => {
  res.send('Hello World from node1 server!!')
});

app.listen(port, () => {
  console.log(`app node1 is listening on port ${port}!`)
});
