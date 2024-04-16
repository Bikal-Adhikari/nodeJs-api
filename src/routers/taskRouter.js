import express from "express";
import { idGenerator } from "../utils.js";
const router = express.Router();

let fakeDb = [];
//controllers

//get data

router.get("/", (req, res) => {
  res.json({
    message: `Here are the tasks`,
    data: fakeDb,
  });
});

//POST data

router.post("/", (req, res) => {
  const id = idGenerator();
  fakeDb.push({ ...req.body, id }); //add to the database
  res.json({
    message: `New data has been added`,
  });
});

//update data

router.patch("/", (req, res) => {
  const { id, type } = req.body;
  fakeDb = fakeDb.map((item) => {
    if (item.id === id) {
      return { ...item, type };
    }
    return item;
  });
  res.json({
    message: "Your task has been updated",
  });
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
