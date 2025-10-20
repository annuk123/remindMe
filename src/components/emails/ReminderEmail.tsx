import * as React from "react";
import {
  Html,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Link,
  Hr,
  Img,
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
          {/* 🌈 Header */}
          <Section
            style={{
              background: "linear-gradient(90deg, #4F46E5, #6366F1, #8B5CF6)",
              textAlign: "center",
              padding: "32px 24px",
              color: "#fff",
            }}
          >
            <Heading
              style={{
                fontSize: "24px",
                fontWeight: "700",
                margin: 0,
                letterSpacing: "-0.4px",
              }}
            >
              Your Smart Reminder Has Arrived 💌
            </Heading>
          </Section>

          {/* 🪄 Content */}
          <Section style={{ padding: "32px 40px 24px" }}>
            <Text
              style={{
                fontSize: "16px",
                color: "#374151",
                marginBottom: "20px",
                lineHeight: "1.6",
              }}
            >
              Hey there 👋 — here’s your scheduled reminder. Keep moving forward —
              small steps create big wins!
            </Text>

            <div
              style={{
                backgroundColor: "#F9FAFB",
                border: "1px solid #E5E7EB",
                borderRadius: "14px",
                padding: "20px 24px",
                marginBottom: "24px",
              }}
            >
              <Heading
                as="h2"
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: 0,
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
                    marginBottom: "8px",
                    lineHeight: "1.5",
                  }}
                >
                  {description}
                </Text>
              )}
              <Text
                style={{
                  fontSize: "14px",
                  color: "#6B7280",
                  fontStyle: "italic",
                }}
              >
                📅 {formattedTime} ({timeZone})
              </Text>
            </div>

            <Link
              href="https://remindme.pixelui.studio/dashboard"
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg, #4F46E5, #6366F1)",
                color: "#fff",
                textDecoration: "none",
                padding: "12px 28px",
                borderRadius: "10px",
                fontWeight: "500",
                fontSize: "15px",
                letterSpacing: "0.3px",
                transition: "all 0.2s ease",
              }}
            >
              View Your Dashboard →
            </Link>
          </Section>

          <Hr style={{ borderColor: "#E5E7EB", margin: "24px 0" }} />

          {/* ⚡ Footer */}
          <Section style={{ textAlign: "center", padding: "0 32px 32px" }}>
            <Text
              style={{
                fontSize: "13px",
                color: "#9CA3AF",
                marginBottom: "4px",
              }}
            >
              Powered by <b>RemindMe</b> ⚡ — your smart productivity assistant
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
