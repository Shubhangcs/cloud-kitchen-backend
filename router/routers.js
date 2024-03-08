const router = require("express").Router();
const foodTable = require('../model/food_table');
const hotelTable = require('../model/hotel_table');
const userTable = require('../model/user_table');
const cart = require('../model/cart_items.js');
const orderTable = require("../model/order_items.js");
const addItemsToCart = require('../controller/cart_query');


const foodAddition = require('../controller/food_add');
const hotelAddition = require('../controller/hotel_add');
const register = require("../controller/register");
const login = require("../controller/login");

const displayAllHotels = require("../controller/display_hotels");
const displayFoodOnCatogery = require("../controller/display_food_catogery");
const displayFoodOnHotels = require("../controller/display_food_hotels");
const retriveCartItemsQuery = require("../controller/retrive_cart_items_query.js");
const orderItems = require('../controller/order_items.js');

module.exports = router.get("/ordertable",orderTable);
module.exports = router.get("/foodtable", foodTable);
module.exports = router.get("/hoteltable", hotelTable);
module.exports = router.get("/usertable", userTable);
module.exports = router.get("/cart", cart);


module.exports = router.post("/foodaddition", foodAddition);
module.exports = router.post("/hoteladdition", hotelAddition);
module.exports = router.post("/register", register);
module.exports = router.post("/login", login);

module.exports = router.get("/hotels", displayAllHotels);
module.exports = router.post("/foodcatogery", displayFoodOnCatogery);
module.exports = router.post("/foodhotels", displayFoodOnHotels);
module.exports = router.post("/addtocart", addItemsToCart);
module.exports = router.post("/getcartitems", retriveCartItemsQuery);
module.exports = router.post("/orderitems",orderItems);