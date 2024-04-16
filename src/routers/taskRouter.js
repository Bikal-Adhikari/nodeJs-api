import express from "express";
const router = express.Router();

const fakeDb = [];
//controllers

//get data

router.get("/", (req, res) => {
  res.json({
    message: `Welcome to the API!`,
    data: fakeDb,
  });
});

//POST data

router.post("/", (req, res) => {
  console.log(req.body);
  fakeDb.push(req.body); //add to the database
  res.json({
    message: `New data has been added`,
  });
});

export default router;
