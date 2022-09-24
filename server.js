
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'


import postRoutes from './routes/products.js';
import userRouter from "./routes/user.js";
import ComplainceRouter from "./routes/Complaince.js";
import rfqRouter from "./routes/RFQ_Manager.js";
dotenv.config()


const app = express();

app.use(express.json({ limit: '30mb', extended: true }))

app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/products', postRoutes);
app.use('/complaince', ComplainceRouter);
app.use('/rfqmanager', rfqRouter);
app.use("/user", userRouter);
app.get('/', (req, res) => res.status(200).send('Hello world'))
app.get('/favicon.ico', (req, res) => res.status(200).send('Hello favicon'))


const PORT = process.env.PORT || 5007


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*"), (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    }
}
const CONNECTION_URL = "mongodb://localhost/saas_dashboard"

mongoose.connect(CONNECTION_URL, () => {
    console.log("database connected");

});
mongoose.con;

app.listen(PORT, () => console.log("Listening on port ", PORT))


// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//     .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);
