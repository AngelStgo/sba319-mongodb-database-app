import express from "express";
import Plants from "../models/Plants.js";

export const plantsRouter = express.Router();

//* POST,  Create a new plant info.
plantsRouter.post("/", async (req, res) => {
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
plantsRouter.get('/', async(req, res) => {
  try {
    const plants = await Plants.find();
    res.json(plants);
  } catch (error) {

  }
})

//* GET , render single plant by id.
plantsRouter.get('/', async(req, res) => {
  try {
    const plants = await Plants.findById(req.params.id);
    res.json(plants);
  } catch (error) {
    
  }
})