const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://kuemwhang:1q1q-www3@kuemwhang.tbopdvx.mongodb.net/?retryWrites=true&w=majority&appName=kuemwhang')
    } catch (error) {
        throw new Error("Connetion Failed!")
    }
};
module.exports = connectDB;