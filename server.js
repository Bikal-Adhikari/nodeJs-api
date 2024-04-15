import express from "express";
const app = express();
import morgan from "morgan";

const PORT = process.env.PORT || 8000;

//middlewares

app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.json({
    message: "TODO.......",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
