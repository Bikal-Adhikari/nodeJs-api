import express from "express";
import { idGenerator } from "../utils.js";
import { insertTask, updateTask } from "../models/task/taskModel.js";
import { getTasks } from "../models/task/taskModel.js";
const router = express.Router();

let fakeDb = [];
//controllers

//get data

router.get("/", async (req, res) => {
  const result = await getTasks();
  console.log(result);
  res.json({
    message: `Here are the tasks`,
    task: result,
  });
});

//POST data

router.post("/", async (req, res) => {
  //   const id = idGenerator();
  //   fakeDb.push({ ...req.body, id }); //add to the database

  try {
    const result = await insertTask(req.body);
    result?._id
      ? res.json({
          message: `New data has been added`,
        })
      : res.json({
          message: `Failed to add new data`,
        });
  } catch (error) {
    console.log(error);
  }
});

//update data

router.patch("/", async (req, res) => {
  try {
    const result = await updateTask(req.body);
    result?._id
      ? res.json({
          message: "Your task has been updated",
        })
      : res.json({
          error: "The ID does not exist in our records",
        });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: "something went wrong, try again later" });
  }
});

//delete data

router.delete("/", (req, res) => {
  const { id } = req.body;
  fakeDb = fakeDb.filter((item) => item.id !== id);
  res.json({
    message: "Your task has been updated",
  });
});

export default router;
