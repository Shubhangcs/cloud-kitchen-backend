const db = require("../database/db");


module.exports = (req , res , next) => { 
    const { catogery } = req.body;
    const fetchFoodOnCatogery = `SELECT * FROM FOODITEMS WHERE FOOD_CATOGERY = ?`;
    db.query(fetchFoodOnCatogery, [catogery], (error, result) => {
        if (error) { 
            res.status(500).json({status:false , message:error.message});
        }
        res.status(200).json({status:true , message:"Data Fetched Successfully" , result:result});
     });
};