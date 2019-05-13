import express from "express";

let router = express.Router();

import {
  post_customer,
  get_customer,
  put_customer,
  delete_customer
} from "../controllers/customer.controller";

router.post("/customer", post_customer);

router.get("/customer", get_customer);

router.put("/customer", put_customer);

router.delete("/customer", delete_customer);

module.exports = router;
