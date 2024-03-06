const db = require("../database/db");

module.exports = async (req , res , next) => {
  const cart = `
        CREATE TABLE ORDERITEMS(
            ORDER_ID INT AUTO_INCREMENT,
            ORDER_PRICE INT,
            ORDER_DATE DATE,
            USER_ID INT,
            ADDRESS VARCHAR(300),
            FOREIGN KEY (USER_ID) REFERENCES USERDETAILS(USER_ID)
        )ENGINE=MyISAM;
    `;
    db.query(cart, (error, result) => { 
        if (error) { 
            res.status(500).json({status:false , message: error.message});
        }
        res.status(200).json({status:true , message:'Table Created Successfully'});
    });
};
