// Initalize the mail package from sendgrid
const mail = require('@sendgrid/mail');
// Connect api key
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
    // Parse the info inside the form 
    const body = JSON.parse(req.body);

    // format message box
    const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;

    // format data based on how sendgrid takes in required info
    const data = {
        to: process.env.CONTACT_EMAIL,
        from: process.env.CONTACT_EMAIL,
        subject: `New message from ${body.name}`,
        text: message,
        html: message.replace(/\r\n/g, '<br />'),
    };

    // Send message but wait till complete to continue
    await mail.send(data);

    res.status(200).json({ status: 'OK' });
  };