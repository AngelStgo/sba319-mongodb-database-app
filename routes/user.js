import express from "express";
import User from "../models/User.js";

export const userRouter = express.Router();


//* POST,  Create a new user
userRouter.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e.message });
  }
});

//* GET , render all user.
userRouter.get('/', async(req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {

  }
})

//* GET , render single user by id.
userRouter.get('/', async(req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    
  }
})

//* PUT User (edit)
userRouter.put("/:id", async (req, res) => {
  try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json(user);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

//* DELETE User
userRouter.delete("/:id", async (req, res) => {
  try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json({ message: "User deleted" });
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

// export default userRouter;