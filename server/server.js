import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';



mongoose.connect('mongodb+srv://prabhatyadav98311:GebjQhkS47Gl8t6g@cluster0.z9kyu.mongodb.net/'
)
.then(()=>console.log('MongoDB Connected.'))
.catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : 'http://localhost:5173/',
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma',
        ],
        credentials : true
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, ()=> console.log(`\nServer is running on port ${PORT}`))









// GebjQhkS47Gl8t6g

// mongodb+srv://prabhatyadav98311:GebjQhkS47Gl8t6g@cluster0.z9kyu.mongodb.net/

// mongodb+srv://prabhatyadav98311:<db_password>@cluster0.z9kyu.mongodb.net/