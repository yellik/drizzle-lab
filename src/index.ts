import express from "express";



const app = express();

app.get('/users/:id', async(req, res) => {

  res.send('user with id will go here')
 
})
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
