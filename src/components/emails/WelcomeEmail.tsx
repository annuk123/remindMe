import * as React from "react";
import {
  Html,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Link,
  Img,
  Hr,
} from "@react-email/components";

export default function WelcomeEmail({
  name,
}: {
  name?: string;
}) {
  return (
    <Html>
      <Body
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          backgroundColor: "#f5f7fb",
          color: "#111827",
          margin: 0,
          padding: "32px 0",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            maxWidth: "600px",
            margin: "0 auto",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          {/* 🌈 Header / Branding */}
          <Section
            style={{
              background: "linear-gradient(90deg,#4F46E5,#6366F1,#8B5CF6)",
              textAlign: "center",
              padding: "36px 24px",
              color: "#fff",
            }}
          >
            <Img
              src="https://remindme.pixelui.studio/logo.png"
              alt="RemindMe Logo"
              width="56"
              height="56"
              style={{
                borderRadius: "14px",
                marginBottom: "14px",
              }}
            />
            <Heading
              style={{
                fontSize: "26px",
                fontWeight: "700",
                margin: 0,
                letterSpacing: "-0.3px",
              }}
            >
              Welcome to RemindMe 🎉
            </Heading>
          </Section>

          {/* 👋 Intro Section */}
          <Section style={{ padding: "36px 40px 20px" }}>
            <Text
              style={{
                fontSize: "16px",
                color: "#374151",
                lineHeight: "1.6",
                marginBottom: "12px",
              }}
            >
              Hey {name ? name : "there"} 👋
            </Text>

            <Text
              style={{
                fontSize: "16px",
                color: "#4B5563",
                lineHeight: "1.7",
                marginBottom: "20px",
              }}
            >
              Welcome aboard! You’ve just joined a growing community of
              productive minds who never miss what matters.  
              <br />  
              With <b>RemindMe</b>, managing your reminders becomes effortless —
              schedule, organize, and get notified right when you need it.
            </Text>

            <div
              style={{
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
                borderRadius: "14px",
                padding: "20px 24px",
                marginBottom: "24px",
              }}
            >
              <Text
                style={{
                  fontSize: "15px",
                  color: "#374151",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                ✅ Create reminders instantly  
                ⏰ Receive beautifully branded email notifications  
                🌐 Access your reminders anywhere, anytime
              </Text>
            </div>

            <Link
              href="https://remindme.pixelui.studio/dashboard"
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg,#4F46E5,#6366F1)",
                color: "#fff",
                textDecoration: "none",
                padding: "12px 28px",
                borderRadius: "10px",
                fontWeight: "500",
                fontSize: "15px",
                letterSpacing: "0.3px",
              }}
            >
              Open Your Dashboard →
            </Link>
          </Section>

          <Hr style={{ borderColor: "#E5E7EB", margin: "28px 0 16px" }} />

          {/* ✨ Footer */}
          <Section style={{ textAlign: "center", padding: "0 32px 32px" }}>
            <Text
              style={{
                fontSize: "13px",
                color: "#9CA3AF",
                marginBottom: "6px",
              }}
            >
              You’re receiving this email because you signed up for{" "}
              <b>RemindMe</b>.
            </Text>

            <Text
              style={{
                fontSize: "13px",
                color: "#9CA3AF",
                marginBottom: "8px",
              }}
            >
              Powered by <b>RemindMe</b>   
            </Text>

            <Link
              href="https://remindme.pixelui.studio"
              style={{
                color: "#6366F1",
                textDecoration: "none",
                fontSize: "13px",
              }}
            >
              remindme.pixelui.studio
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
