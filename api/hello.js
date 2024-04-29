import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export default async function POST(req, res) {
  const { body } = await req; // Parsing request body as JSON
  console.log("hello world",body);
  // const { email, subject, message } = body;
  // console.log(email) // Destructuring body directly
  // console.log(subject)
  const email= body.email
  const subject=body.subject
  const message=body.message
 

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["workingwithneelava@gmail.com", email],
      subject: subject,
      react:(
        <>
          <h4>The New message is given bellow</h4>
          <h2>{message}</h2>
        </>
      ) // Directly using message from body
    });

    return res.json(data);
  } catch (error) {
    return res.json({ error });
  }
}


// import { Resend } from 'resend';

// const resend = new Resend('re_Zf93rve1_Ee8VAC76UaubqaFKhXbR6qRT');

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'workingwithneelava@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });
