import { mailOptions, transporter } from "@/config/nodemailer";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.email || !body.message) {
    return new Response("Please fill all the fields to send a mail", {
      status: 400,
    });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "URGENT: email from portfolio webiste",
      text: `The text version of the email
            Name: ${body.name}
            Email: ${body.email}
            Message: ${body.email}`,
      html: `
      <div style="font-family:Comic sans MS; font-size:14px;">
      <strong><p>Hi Sandeep,</p></strong>
      
      <p>${body.message}</p>

      <p>${body.name},</p>
      <p>${body.email}</p>
      </div>
      `,
    });

    return Response.json({
      message: "Thank you for your email. I'll reply shortly",
    });
  } catch (error) {
    console.log("Error in API -> ", error);
    return new Response("Sorry! Some error occured!", { status: 400 });
  }
}
