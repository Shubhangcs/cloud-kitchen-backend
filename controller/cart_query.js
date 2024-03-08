const db = require("../database/db");

module.exports = (req, res, next) => {
    try {
        const { price, quantity, userid, foodid, date } = req.body;
        const retriveData = `SELECT  * FROM CARTITEMS WHERE USER_ID = ?;`;
        var finalQuery = ``;
        var itemList = [];
        db.query(retriveData, [userid], (error, result) => { 
            if (error) { 
                res.status(500).json({status:false , message:error.message});
            }
            if (result.length != 0) { 
                for (var i = 0; i < result.length; i++) { 
                    if (result[i]['USER_ID'] == userid && result[i]['FOOD_ID'] == foodid) {
                        finalQuery = `UPDATE CARTITEMS SET CART_QUANTITY = ? , CART_PRICE = ? WHERE USER_ID = ? AND FOOD_ID = ?`;
                        itemList = [quantity+result[i]['CART_QUANTITY'] , price+result[i]['CART_PRICE'] , userid , foodid];
                    }
                }
                db.query(finalQuery, itemList, (error, message) => { 
                    if (error) { 
                        res.status(500).json({status:false , message:error.message});
                    }
                    res.status(200).json({status:true , messaqge:"Query execuited"});
                });
            }
            if (result.length === 0) { 
                finalQuery = `INSERT INTO CARTITEMS(CART_DATE , CART_PRICE , CART_QUANTITY , USER_ID , FOOD_ID) VALUES (?,?,?,?,?)`;
                itemList = [date, price, quantity, userid, foodid];
                 db.query(finalQuery, itemList, (error, message) => {
                   if (error) {
                     res
                       .status(500)
                       .json({ status: false, message: error.message });
                   }
                   res
                     .status(200)
                     .json({ status: true, messaqge: "Query execuited" });
                 });
            }
        },);
    } catch (e) { 
        console.log(e);
    };

}
