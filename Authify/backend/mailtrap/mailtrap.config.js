import { MailtrapClient } from "mailtrap";
// import dotenv from "dotenv";
// dotenv.config();

const TOKEN = "9606929462384130652b9e290b7f08a5";
console.log("MLTPTK:", TOKEN);

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "cholkargautam097@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);