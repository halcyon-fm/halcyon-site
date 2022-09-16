/**************************************************************
 * main.js
 **************************************************************/

const express = require("express")
const nodemailer = require("nodemailer")
const path = require("path")

const { check, validationResult } = require("express-validator");

const app = express()
const port = process.env.PORT || "3000";


app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());


app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/contact", [
  check("name", "Name cannot be empty").not().isEmpty(),
  check("subject").not().isEmpty(),
  check("email", "Email cannot be empty").not().isEmpty(),
  check("message", "Message cannot be empty").not().isEmpty(),

  check("name").isLength({ min: 1, max: 100}).trim().escape(),    
  check("subject").custom((value, { request }) => (value === "general" || value === "demos")),
  check("email").isEmail().normalizeEmail(),
  check("message").trim(),

], (request, response) => {
  let errors = validationResult(request);

  if (!errors.errors.length) {
    let title = "";
    let to = "";
    if (request.body.subject === "general") {
      title = "General Inquiry";
      to = "kyle@halcyon.fm";
    }
    else if (request.body.subject === "demos") {
      title = "Demos";
      to = "demos@halcyon.fm";
    }

    let subject = `${title} - ${request.body.name} - ${request.body.email}`;
    let message = `Name: ${request.body.name}\nEmail: ${request.body.email}\n\n${request.body.message}`;

    let emailDetail = {
      from: "",
      to: to,
      cc: "zyshara@halcyon.fm",
      subject: subject,
      text: message,
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "EMAIL_HERE",
        pass: "PASSWORD_HERE"
      },
    });

    transporter.sendMail(emailDetail, function(error, info) {
      console.log(error);
      if (error) {
        let serverErrors = { errors: [{msg: error}] };
        response.status(500).send(serverErrors).end();
      }
      else { response.status(200).end(); }
      transporter.close();
    });
  }
  else {
    response.status(500).send(errors).end();
  }
});


app.listen(port, () => {
    console.log(`Halcyon LV`);
    console.log(`Listetning on port ${port}`);
});
