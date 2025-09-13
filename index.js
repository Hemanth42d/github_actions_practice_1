import express, { urlencoded } from "express";
import ejs from "ejs";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", ejs);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { result: null });
});

app.post("/addNumbers", (req, res) => {
  const { firstNumber, secondNumber } = req.body;
  let sum = null;
  try {
    sum = Number(firstNumber) + Number(secondNumber);
  } catch (error) {
    sum = "Error: " + error.message;
  }
  res.render("index.ejs", { result: sum });
});

app.post("/subtractNumbers", (req, res) => {
  const { firstNumber, secondNumber } = req.body;
  let diff = null;
  try {
    diff = Number(firstNumber) - Number(secondNumber);
  } catch (error) {
    diff = "Error: " + error.message;
  }
  res.render("index.ejs", { result: diff });
});

app.get("/subtraction", (req, res) => {
  res.render("subtraction.ejs");
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
