import { Resend } from "resend";
import { render } from "@react-email/render";
import ReminderEmail from "@/components/emails/ReminderEmail";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function GET() {
  // ✅ Add 'await' here
  const emailHtml = await render(
    ReminderEmail({
      title: "Test Reminder — It Works 🎉",
      description: "This is a sample reminder email from your RemindMe app.",
      remindAt: new Date().toISOString(),
    })
  );

  try {
    await resend.emails.send({
      from: "RemindMe <onboarding@resend.dev>",
      to: "anuk35168@gmail.com", // 👈 your test email here
      subject: "🔔 Test Reminder Email",
      html: emailHtml, // ✅ now a string, not a Promise
    });

    return Response.json({
      success: true,
      message: "Email sent successfully ✅",
    });
  } catch (err) {
    console.error(err);
    return Response.json({
      success: false,
      message: "Email failed ❌",
    });
  }
}
