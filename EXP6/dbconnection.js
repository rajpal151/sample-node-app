const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rajpal1511:nloeqsf2t5Ga@cluster0.0a5e2pf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
client.connect();
module.exports = client;
