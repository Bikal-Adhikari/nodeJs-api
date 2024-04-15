import express from "express";
const router = express.Router();

//controllers

//get data

router.get("/", (req, res) => {
  res.json({
    message: `Welcome to the API!`,
  });
});

//POST data

router.post("/", (req, res) => {
  res.json({
    message: `Welcome to the API!`,
  });
});

export default router;
