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
})