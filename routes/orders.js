const express = require("express");
const router = express.Router();

const { notifyOwner } = require("../helpers/notifyOwner");

module.exports = ({ getMenuItems, getCompletedOrder, placeOrder }) => {
  router.get("/new", (req, res) => {
    getMenuItems()
      .then((menu) => {
        let templateVars = {
          menuItems: menu,
        };
        res.render("new_order", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  router.get("/:id/completed", (req, res) => {
    getCompletedOrder()
      .then((completedOrder) => {
        console.log(completedOrder);
        let templateVars = {
          completedOrder,
        };
        res.render("completed_order", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  // POST - place an order
  // INSERT ALL ORDERS MADE (MANY) INTO THE ORDERS TABLE (ONE)
  router.post("/:id", (req, res) => {
    console.log(req.body);
    // const {user_id, order_placed_at, special_instructions, order_ready_duration, order_ready, order_complete_at} = req.body
    // console.log(user_id, order_placed_at, special_instructions, order_ready_duration, order_ready, order_complete_at)
    console.log("creating a new order");
    placeOrder(1, new Date(), "no cheese", 30, false, null)
      .then((order) => {
        console.log("calling notify owner");
        notifyOwner();
        res.redirect(`/orders/1/completed`);
      })
      .catch((err) => console.log(err));
  });

  return router;
};
