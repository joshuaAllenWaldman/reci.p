const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/project-one';

mongoose.connect (connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected on ${connectionString}`);
})
mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected`);
})
mongoose.connection.on('error', (err) => {
    console.log(`Mongoose Error: ${err}`);
})

module.exports = {
    User: require('./User'),
    Recipe: require('./Recipe'),
    Category: require('./Category')
}

