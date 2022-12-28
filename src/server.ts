import "reflect-metadata";
import express from 'express';
import { router } from './routes';
import "./shared/container"


const app = express();
const PORT = 3000;

app.use(express.json())

app.use(router)



app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`))