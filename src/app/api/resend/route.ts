import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = req.body;
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // Replace with your verified email
      to: ["ledionres@gmail.com"], // Replace with the recipient's email
      subject: "New Form Submission",
      html: "<div>Hello</div>",
    });

    if (error) {
      console.error("Resend Error:", error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }
}
