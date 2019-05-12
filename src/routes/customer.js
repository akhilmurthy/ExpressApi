let express = require("express");
let router = express.Router();

var customerController = require("../controllers/customer.controller");

router.post("/customer", customerController.post_customer);

router.get("/customer", customerController.get_customer);

router.put("/customer", customerController.put_customer);

router.delete("/customer", customerController.delete_customer);

module.exports = router;
