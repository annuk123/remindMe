import * as React from "react";
import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
  Link,
} from "@react-email/components";
import { formatLocalTime } from "../../lib/formatLocalTime";

export default function ReminderEmail({
  title,
  description,
  remindAt,
  timeZone = "UTC",
}: {
  title: string;
  description?: string;
  remindAt: string;
  timeZone?: string;
}) {
  let formattedTime: string;
  try {
    formattedTime = formatLocalTime(remindAt, timeZone);
  } catch {
    formattedTime = new Date(remindAt).toLocaleString("en-US");
  }

  return (
    <Html>
      <Body
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          backgroundColor: "#f4f7fb",
          color: "#333",
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            padding: "0 0 32px",
            maxWidth: "640px",
            margin: "40px auto",
            overflow: "hidden",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          }}
        >
          {/* 🌈 Header / Branding */}
          <Section
            style={{
              background: "linear-gradient(90deg,#4F46E5,#6366F1,#8B5CF6)",
              color: "#fff",
              padding: "24px 32px",
              textAlign: "center",
            }}
          >
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-2xl shadow-md mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-7 h-7"
            >
              <path d="M12 3a9 9 0 00-9 9v6a3 3 0 003 3h12a3 3 0 003-3v-6a9 9 0 00-9-9z" />
            </svg>
          </div>
            <Heading
              style={{
                fontSize: "24px",
                fontWeight: "700",
                margin: 0,
                color: "#fff",
                letterSpacing: "-0.5px",
              }}
            >
              RemindMe — Your Smart Companion
            </Heading>
          </Section>

          {/* 👋 Greeting */}
          <Section style={{ padding: "32px 40px 16px" }}>
            <Text style={{ fontSize: "16px", color: "#555", marginBottom: "12px" }}>
              Hey there 👋
            </Text>
            <Text style={{ fontSize: "17px", color: "#333", lineHeight: "1.6" }}>
              Here’s your scheduled reminder. Stay consistent — your future self
              will thank you 💪
            </Text>
          </Section>

          {/* 🔔 Reminder Card */}
          <Section
            style={{
              background: "#F9FAFB",
              border: "1px solid #E5E7EB",
              borderRadius: "12px",
              padding: "20px 24px",
              margin: "20px 40px",
            }}
          >
            <Heading
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#111827",
                marginBottom: "8px",
              }}
            >
              {title}
            </Heading>

            {description && (
              <Text
                style={{
                  fontSize: "15px",
                  color: "#4B5563",
                  lineHeight: "1.5",
                  marginBottom: "8px",
                }}
              >
                {description}
              </Text>
            )}

            <Text
              style={{
                fontSize: "14px",
                color: "#6B7280",
                marginTop: "8px",
                fontStyle: "italic",
              }}
            >
              📅 {formattedTime} ({timeZone})
            </Text>
          </Section>

          {/* ✨ Motivation / CTA */}
          <Section style={{ padding: "20px 40px 0" }}>
            <Text
              style={{
                fontSize: "15px",
                color: "#374151",
                lineHeight: "1.7",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              You’re doing great — one step at a time  
              <br />
              Don’t stop until your small actions turn into big wins.
            </Text>

            <Link
              href="https://remindme.app/dashboard"
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

          <Hr style={{ margin: "32px 0 16px", borderColor: "#eee" }} />

          {/* 🖋️ Footer */}
          <Section style={{ textAlign: "center", padding: "0 24px" }}>
            <Text
              style={{
                fontSize: "13px",
                color: "#9CA3AF",
                lineHeight: "1.6",
                marginBottom: "4px",
              }}
            >
              Made with 💙 by <b>RemindMe</b>
            </Text>
            <Link
              href="https://remindme.app"
              style={{ color: "#6366F1", textDecoration: "none", fontSize: "13px" }}
            >
              Visit RemindMe → 
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
