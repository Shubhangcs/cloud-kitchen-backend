const db = require('../database/db');


module.exports = (req, res, next) => { 
    const { price, quantity, userid, foodid ,date} = req.body;
    const addToCartQuery = `INSERT INTO CARTITEMS (ORDER_PRICE , ORDER_QUANTITY , USER_ID , FOOD_ID , ORDER_DATE) VALUES(?,?,?,?,?)`;
    db.query(addToCartQuery, [price, quantity, userid, foodid,date], (error, result) => { 
        if(error){ 
            res.status(500).json({status:false , message:error.message});
        }
        res.status(200).json({status:true , message:"Added to cart Successfully"});
    });
};
