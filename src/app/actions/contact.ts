"use server";

import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";

export async function sendContactEmail(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    // Validate the data
    const validatedData = contactFormSchema.parse(data);

    // Configure AWS SES client
    const accessKey = process.env.AWS_SES_ACCESS_KEY_ID;
    const secretKey = process.env.AWS_SES_SECRET_ACCESS_KEY;

    const sesClient = new SESv2Client({
      region: "eu-west-3",
      credentials: {
        accessKeyId: `${accessKey}`,
        secretAccessKey: `${secretKey}`,
      },
    });

    // Prepare email content
    const emailFrom = process.env.EMAIL_FROM || "noreply@deanstavenuiter.nl";
    const emailTo = process.env.EMAIL_TO || "info@deanstavenuiter.nl";

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${
            validatedData.name
          }</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${
            validatedData.email
          }</p>
          ${
            validatedData.company
              ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${validatedData.company}</p>`
              : ""
          }
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #333;">Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${
            validatedData.message
          }</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">This email was sent from the contact form on deanstavenuiter.nl</p>
      </div>
    `;

    const textContent = `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.company ? `Company: ${validatedData.company}` : ""}

Message:
${validatedData.message}

---
This email was sent from the contact form on deanstavenuiter.nl
    `;

    // Create the SendEmailCommand
    const sendEmailCommand = new SendEmailCommand({
      FromEmailAddress: emailFrom,
      Destination: {
        ToAddresses: [emailTo],
      },
      Content: {
        Simple: {
          Subject: {
            Data: `New Contact Form Submission from ${validatedData.name}`,
            Charset: "UTF-8",
          },
          Body: {
            Html: {
              Data: htmlContent,
              Charset: "UTF-8",
            },
            Text: {
              Data: textContent,
              Charset: "UTF-8",
            },
          },
        },
      },
    });

    // Send the email
    await sesClient.send(sendEmailCommand);

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);

    if (error instanceof Error) {
      return { success: false, error: error.message };
    }

    return { success: false, error: "Failed to send email. Please try again." };
  }
}
