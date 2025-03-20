import express from "express";
import Order from "../models/Order.js"

export const orderRouter = express.Router();

//POST
orderRouter.post("/", async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: e.message});
    }
});

//* GET , render all  orders.
orderRouter.get('/', async(req, res) => {
  try {
    const order = await Order.find();
    res.json(order);
  } catch (error) {

  }
})

//* GET , render single order by id.
orderRouter.get('/', async(req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.json(order);
  } catch (error) {
    
  }
});

//* PUT order (edit)
orderRouter.put("/:id", async (req, res) => {
  try {
      const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!order) return res.status(404).json({ message: "order not found" });
      res.json(order);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

//* DELETE order
orderRouter.delete("/:id", async (req, res) => {
  try {
      const order = await Order.findByIdAndDelete(req.params.id);
      if (!order) return res.status(404).json({ message: "User not found" });
      res.json({ message: "plant deleted" });
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});