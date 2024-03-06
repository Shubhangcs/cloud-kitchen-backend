const db = require('../database/db');

module.exports = (req, res, next) => { 
    const { userid } = req.body;
    const retriveCartItemsQuery = `SELECT 
    C.ORDER_PRICE,
    C.ORDER_QUANTITY,
    C.USER_ID,
    C.FOOD_ID,
    C.ORDER_ID,
    F.FOOD_NAME,
    F.FOOD_TYPE,
    F.FOOD_CATOGERY,
    F.FOOD_RATING,
    F.FOOD_PRICE,
    F.FOOD_IMAGE,
    H.HOTEL_NAME
FROM 
    CARTITEMS C
JOIN 
    FOODITEMS F ON C.FOOD_ID = F.FOOD_ID
JOIN 
    HOTELS H ON F.HOTEL_ID = H.HOTEL_ID
 WHERE USER_ID = ?     
;
`;

    db.query(retriveCartItemsQuery, [userid] ,(error, result) => { 
        if (error) { 
            res.status(500).json({status:false , message:error.message});
        }
        res.status(200).json({status:true , message:"Success" , data:result});
    });
};