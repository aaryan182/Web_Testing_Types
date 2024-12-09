import express from "express";

export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  const answer = a + b;

  res.json({
    answer,
  });
});

app.post("/subtract", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  const answer = a - b;

  res.json({
    answer,
  });
});

app.post("/multiply", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  const answer = a * b;

  res.json({
    answer,
  });
});

app.post("/divide", (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  const answer = a / b;

  res.json({
    answer,
  });
});
