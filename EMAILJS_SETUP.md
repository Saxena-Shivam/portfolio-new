# Setting Up EmailJS for Your Contact Form

This guide will help you set up EmailJS to make your contact form functional.

## 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows you to send 200 emails per month

## 2. Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps to connect your email account
5. Note down the **Service ID** for later use

## 3. Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template. Make sure to include these variables in your template:
   - `{{user_name}}` - The name from the contact form
   - `{{user_email}}` - The email from the contact form
   - `{{message}}` - The message from the contact form
4. Save the template and note down the **Template ID**

## 4. Get Your Public Key

1. Go to "Account" in your dashboard (https://dashboard.emailjs.com/admin/account)
2. Find your **Public Key** in the "API Keys" section

## 5. Update Your Code

Open `src/components/ContactSection.tsx` and replace these placeholders:

```javascript
// Initialize EmailJS with your Public Key
emailjs.init({
  publicKey: "YOUR_PUBLIC_KEY", // Replace with your actual Public Key
});

// In handleSubmit function:
const result = await emailjs.sendForm(
  "YOUR_SERVICE_ID",  // Replace with your actual Service ID
  "YOUR_TEMPLATE_ID", // Replace with your actual Template ID
  formRef.current as HTMLFormElement,
  {
    publicKey: "YOUR_PUBLIC_KEY", // Replace with your actual Public Key (same as above)
  }
);
```

## 6. Update Your Contact Information

In the same file, update the contactInfo array with your actual contact details:

```javascript
const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    value: "your.email@example.com", // Replace with your actual email
    href: "mailto:your.email@example.com", // Replace with your actual email
  },
  // Update other contact information and social media links
];
```

## 7. Test Your Form

After making these changes, your contact form should be fully functional. Send a test message to ensure everything is working correctly.

## Troubleshooting

- If emails aren't being sent, check your browser console for errors
- Verify that your EmailJS account is active and that you haven't exceeded the free tier limits
- Make sure your email service authentication is still valid
- Make sure your public key is correctly copied from the dashboard
