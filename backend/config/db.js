import mongoose from 'mongoose';

const connectDb = async () => {
    try{
        mongoose.connection.on('connected',  () => { 
            console.log('Connected to MongoDB');
        })
        await mongoose.connect(`${process.env.MONGO_URI}/studentscore`)
    }catch(error){
        console.log(`Error: ${error.message}`);
    }  
}

export default connectDb;