import mongoose from "mongoose";

async function connectMongo () {
    try {
        await mongoose.connect('mongodb://localhost/widgets');
        console.log('Connected to Mongo DB....');
    } catch(err) {
        console.error(`Error: ${err}`);
    }
}

connectMongo();

const widgetSchema = new mongoose.Schema({
    name:String,
    description: String,
    price: Number,
    soldout: String,
    inventory: String,
    stores: Array
});

const Widgets = mongoose.model('widgets', widgetSchema);

export {Widgets};