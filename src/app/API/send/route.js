import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, subject, message } = req.body;

      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: ["eugeniopedraza@live.com.mx", email],
        subject: subject,
        react: (
          <>
            <h1>{subject}</h1>
            <p>¡Gracias por contactarme!</p>
            <p>Nuevo mensaje enviado</p>
            <p>{message}</p>
          </>
        ),
      });

      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json(data);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}