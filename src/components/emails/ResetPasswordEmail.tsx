import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
} from "@react-email/components";

export default function ResetPasswordEmail({
  name,
  resetUrl,
}: {
  name: string;
  resetUrl: string;
}) {
  return (
    <Html>
      <Head />
      <Body
        style={{
          backgroundColor: "#f9fafb",
          fontFamily: "Inter, system-ui, sans-serif",
          color: "#111827",
          margin: 0,
          padding: "40px 0",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "32px",
            maxWidth: "480px",
            margin: "0 auto",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <Heading
            style={{
              fontSize: "22px",
              marginBottom: "12px",
              fontWeight: 600,
            }}
          >
            Reset your password 🔒
          </Heading>

          <Text style={{ fontSize: "15px", lineHeight: "1.6" }}>
            Hey <strong>{name}</strong>,
          </Text>
          <Text style={{ fontSize: "15px", lineHeight: "1.6" }}>
            You recently requested to reset your password for your{" "}
            <strong>RemindMe</strong> account.
            Click the button below to create a new one.
          </Text>

          <Section style={{ textAlign: "center", marginTop: "24px" }}>
            <a
              href={resetUrl}
              style={{
                backgroundColor: "#111827",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Reset Password
            </a>
          </Section>

          <Text
            style={{
              marginTop: "24px",
              fontSize: "13px",
              color: "#6b7280",
              lineHeight: "1.5",
            }}
          >
            This link will expire in 15 minutes. If you didn’t request a
            password reset, you can safely ignore this email — your account
            will remain secure.
          </Text>

          <Hr style={{ borderColor: "#e5e7eb", margin: "24px 0" }} />

          <Text
            style={{
              fontSize: "12px",
              color: "#9ca3af",
              textAlign: "center",
              lineHeight: "1.5",
            }}
          >
            © {new Date().getFullYear()} RemindMe. All rights reserved.
            <br />
            Built with ❤️ by Annu.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
