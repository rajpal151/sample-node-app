let client = require('../dbconnection')
let collection = client.db().collection('Cat');
function postCat(cat,callback) {
    collection.insertOne(cat,callback);
}

function getAllCats(callback){
    collection.find({}).toArray(callback);
}
function Deletecat(cat,callback) {
    collection.deleteOne(cat,callback);
}
module.exports = {postCat,getAllCats,Deletecat}