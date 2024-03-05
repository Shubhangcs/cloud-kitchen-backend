const db = require("../database/db");

module.exports = (req , res , next) => { 
    const displayAllHotels = `SELECT * FROM HOTELS;`;
    db.query(displayAllHotels, (error, result) => { 
        if (error) { 
            res.status(500).json({status:false , message:"Unable to fetch the data"});
        }
        res.status(200).json({status:true , message:"Data Fetched Successfully" , data:result});
    });
};