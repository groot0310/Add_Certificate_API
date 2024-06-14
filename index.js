const express = require("express");

const app = express();
app.use(express.json());

//array of certificates
const certificate = [
  { title: "Complete ReactJs Course", id: 1 },
  { title: "HTML5 & CSS3 Complete Course", id: 2 },
  { title: "Bootstrap 5 Course", id: 3 },
  { title: "Git and GitHub from scratch", id: 4 },
];

//welcome page
app.get("/", (req, res) => {
  res.send("Welcome to my first API Building Application");
});

//get all certificates
app.get("/api/certificate", (req, res) => {
  res.send(certificate);
});

//get certificate by id
app.get("/api/certificate/:id", (req, res) => {
  const certificate = certificate.find((f) => f.id === parseInt(req.params.id));
  if (!certificate)
    res.status(404).send("The certificate with the given ID was not found");
  res.send(certificate);
});

//add certificate
app.post("/api/certificate", (req, res) => {
  const certificate = {
    title: req.body.title,
    id: certificate.length + 1,
  };
  certificate.push(certificate);
  res.send(certificate);
});

//update certificate title
app.put("/api/certificate   ", (req, res) => {
  const certificate = certificate.find((f) => f.id === parseInt(req.params.id));
  if (!certificate)
    res.status(404).send("The certificate with the given ID was not found");
  certificate.title = req.body.title;
  res.send(certificate);
});

//delete certificate
app.delete("/api/certificate/:id", (req, res) => {
  const certificate = certificate.find((f) => f.id === parseInt(req.params.id));
  if (!certificate) res.status(404).send("The certificate was not found");
  const index = certificate.indexOf(certificate);
  certificate.splice(index, 1);
  res.send(certificate);
});

app.listen(8080);
