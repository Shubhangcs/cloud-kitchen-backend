const db = require('../database/db');

module.exports = (req , res , next) => { 
    const { price, date, userid, address } = req.body;
    const confirmOrderQuery = `INSERT INTO ORDERITEMS(ORDER_PRICE , ORDER_DATE , USER_ID , ADDRESS) VALUES(?,?,?,?)`;
    db.query(confirmOrderQuery, [price, date, userid, address], (error, result) => { 
        if (error) { 
            res.status(500).json({status:false  , message:error.message});
        }
        res.status(200).json({status:true , message:"Order Successfull..."});
    });
};