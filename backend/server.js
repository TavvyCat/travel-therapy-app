import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import CORS from 'cors';
import routes from './src/routes';

const app = express();
const PORT = 4000;

app.listen(PORT, () => 
    console.log(`Your app is running on port ${PORT}`)
)

routes(app);

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://TavvyCat:Darkness37@tavvycatcf.ljb4h.mongodb.net/PTJobApp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS setup
app.use(CORS());