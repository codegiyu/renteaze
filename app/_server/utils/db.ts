import mongoose from 'mongoose';
import { userModel } from '@/app/_server/models';

// const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI!, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log("Renteaze database connected!"))
.catch((err) => console.log(`Error connecting to Renteaze database! `, err));


mongoose.set("strictQuery", false);
mongoose.Promise = global.Promise;

export const db: any = {};

db.mongoose = mongoose;
db.User = userModel();
