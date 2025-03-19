import express from "express";
import Plants from "../models/Plants";

export const plantsRouter = express.Router();

//* POST,  Create a new plant info.
userRouter.post("/", async (req, res) => {
  try {
    const plants = new Plants(req.body);
    await plants.save();
    res.status(201).json(plants);
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e.message });
  }
});

//* GET , render all  plants.
userRouter.get('/', async(req, res) => {
  try {
    const plants = await Plants.find();
    res.json(plants);
  } catch (error) {

  }
})

//* GET , render single plant by id.
userRouter.get('/', async(req, res) => {
  try {
    const plants = await Plants.findById(req.params.id);
    res.json(plants);
  } catch (error) {
    
  }
})