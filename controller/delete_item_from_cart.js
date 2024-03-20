const db = require('../database/db');


module.exports = (req , res , next) => { 
    const { foodid } = req.body;
    const deleteCartItems = `DELETE FROM CARTITEMS WHERE FOOD_ID = ?`;
    db.query(deleteCartItems, [foodid], (error, result) => { 
        if (error) { 
            res.status(500).json({ status: false, message: error.message });
        }
        res.status(200).json({status:true , message:"Query Execuited Successfully"});
    });
}