import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema({
    city: String,
    temperature: Number,
    humidity: Number,
    weather: String,
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("Weather", weatherSchema);
