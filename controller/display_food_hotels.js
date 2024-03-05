const db = require("../database/db");

module.exports = (req , res , next) => {
    const { hotel } = req.body;
    const fetchFoodOnHotels = `SELECT * FROM FOODITEMS WHERE HOTEL_ID = ?`;
    db.query(fetchFoodOnHotels, [hotel], (error, result) => { 
        if (error) { 
            res.status(500).json({status: false , message: error.message});
        }
        res.status(200).json({status:true , message: "Data Fetched Successfully" , data:result});
    });
};