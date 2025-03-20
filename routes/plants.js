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

//* PUT plants (edit)
plantsRouter.put("/:id", async (req, res) => {
  try {
      const plants = await Plants.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!plants) return res.status(404).json({ message: "plant not found" });
      res.json(plants);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

//* DELETE plants
plantsRouter.delete("/:id", async (req, res) => {
  try {
      const plants = await Plants.findByIdAndDelete(req.params.id);
      if (!plants) return res.status(404).json({ message: "User not found" });
      res.json({ message: "plant deleted" });
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});