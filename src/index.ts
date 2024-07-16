import express from "express";
import { db } from "./db";
import { getUserById } from "./db/queries";

const app = express();

app.get('/users/:id', async(req, res) => {

  try {
    const userId = parseInt(req.params.id);

    const user = await getUserById(userId)
  
    res.json({ user })
  } catch (error) {
    console.error('Error fetching user', error)
    res.status(500).json({ error: 'Failer to fetch users'})
  }
 
})
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
