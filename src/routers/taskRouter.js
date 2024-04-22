import express from "express";
import { idGenerator } from "../utils.js";
import {
  deleteTask,
  insertTask,
  updateTask,
  getTasks,
} from "../models/task/taskModel.js";

const router = express.Router();

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
          status: "success",
          message: `New data has been added`,
        })
      : res.json({
          status: "failure",
          message: `Failed to add new data`,
        });
  } catch (error) {
    console.log(error);
    res.status(500).sendStatusjson({
      status: "failure",
      message: error.message,
    });
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

router.delete("/", async (req, res) => {
  try {
    const { _id } = req.body;
    const result = await deleteTask(_id);
    result?._id
      ? res.json({
          message: "Your task has been removed",
        })
      : res.json({
          error: "The ID does not exist in our records",
        });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again!" });
  }
});

export default router;
