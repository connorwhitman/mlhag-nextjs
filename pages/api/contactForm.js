const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

export default function handler(req, res) {
  if ((req.method == "POST")) {

    const requestBody = req.Body
    const requestBodyJson = JSON.parse(requestBody)
    console.log({ requestBodyJson })
    res.status(200).json({ name: "John Doe" });
  } else {
    res.send(":(");
  }
}
 