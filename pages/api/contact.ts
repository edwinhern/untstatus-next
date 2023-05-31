// Initalize the mail package from sendgrid
const mail = require("@sendgrid/mail");
// Connect api key
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  // Parse the info inside the form
  const body = JSON.parse(req.body);

  const message = `Name: ${body.name}\r\nEmail: ${body.email}\r\nMessage: ${body.message}`;

  // format data based on how sendgrid takes in required info
  const data = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  // Send message but wait till complete to continue
  mail.send(data);

  res.status(200).json({ status: "OK" });
};
