import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

// This function is to deplot on the edge network (available nearest to the User)
export const runtime = 'edge';
// This function makes vercel to not use cache for this function, i.e. it will be called every time a new event is triggered
export const dynamic = 'force-dynamic';

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>I will try to get back at you as soon as possible.</p>
          <p>Your submitted message: </p>
          <p>{message}</p>
        </>
      ),
    });
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}