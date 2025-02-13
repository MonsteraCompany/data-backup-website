import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  const { name, company, email, phone } = body

  try {
    const data = await resend.emails.send({
      from: "SecureSauvegarde <onboarding@resend.dev>",
      to: ["resend@monstera.company"],
      subject: "Nouveau contact de SecureSauvegarde",
      html: `
        <h1>Nouveau contact</h1>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Société:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
      `,
    })

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

