const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "", // generated ethereal user
      pass: "", // generated ethereal password
    },
  });

  const mailOptions = {
    from: req.body.mail, // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: req.body.name, // Subject line
    text: req.body.message, // plain text body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("email sent: " + info.response);
      res.send("success");
    }
  });
});

module.exports = router;
