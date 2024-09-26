
const { MongoClient } = require('mongodb');

async function connectToDatabase() {
    const uri = 'mongodb://localhost:27017/CCZ';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client;
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
}

module.exports = connectToDatabase;
