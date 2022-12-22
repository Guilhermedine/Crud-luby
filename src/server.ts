import express from 'express';
import { router } from './routes';


const app = express();

app.use(router)

app.get("/", (req, res) => {
  return res.json({message: "hello world"})
});



app.listen(3000, () => console.log("Server is Running"))