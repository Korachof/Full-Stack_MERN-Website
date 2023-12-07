// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const legoDatabase = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
legoDatabase.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500: The Connection to the server has stopped' });
    } else  {
        console.log('Successfully connected to MongoDB Lego Retired Sets Collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const legoSchema = mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
    date: { type: Date, required: true, default: Date.now }
});

// Compile the model from the schema.
const Lego = mongoose.model("Retired Lego Sets", legoSchema);

// CREATE model *****************************************
const createLegoSet = async (name, price, date) => {
    const legoSet = new Lego({ 
        name: name, 
        price: price, 
        date: date
    });
    return legoSet.save();
}

// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveLegoSet = async () => {
    const request = Lego.find();
    return request.exec();
}

// RETRIEVE by ID
const retrieveLegoSetByID = async (_id) => {
    const requestById = Lego.findById({_id: _id});
    return requestById.exec();
}

// UPDATE model *****************************************************
const updateLego = async (_id, setName, setPrice, setDate) => {
    const outcome = await Lego.replaceOne({_id: _id }, {
        setName: setName,
        setPrice: setPrice,
        setDate: setDate
    });
    return { 
        _id: _id, 
        setName: setName,
        setPrice: setPrice,
        setDate: setDate
    }
}

// DELETE model based on _id  *****************************************
const deleteLegoById = async (_id) => {
    const deleteResult = await Lego.deleteOne({_id: _id});
    return deleteResult.deletedCount;
};

// Export our variables for use in the controller file.
export { createLegoSet, retrieveLegoSet, retrieveLegoSetByID, updateLego, deleteLegoById }