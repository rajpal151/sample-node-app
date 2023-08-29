let collection= require('../models/cat');

const postCat =(req,res) =>{
    let cat = req.body;
    collection.postCat(cat, (err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result,message:'success'});
        }
    });
}
const getAllCats = (req,res) => {
    collection.getAllCats((err,result)=>{
        if (!err) {
            res.json({statusCode:200, data:result, message:'success'});
        }
    }); 
}
const Deletecat =(req,res) =>{
    let cat = req.body;
    collection.Deletecat(cat, (err, result) => {
        if (!err) {
            res.json({statusCode:203, data:result,message:'success'});
        }
    });
}


module.exports = {postCat,getAllCats,Deletecat}
   