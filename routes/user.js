import express from "express";
import User from "../models/User";

const userRouter = express.Router();


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

//* GET , render user info.
userRouter.get('/', async(req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    
  }
})

export default userRouter;