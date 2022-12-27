import express from 'express';
import { routes } from './routes';


const app = express();

app.use(routes)

app.get("/", (req, res) => {
  return res.json({message: "hello world"})
});



app.listen(3000, () => console.log("Server is Running"))