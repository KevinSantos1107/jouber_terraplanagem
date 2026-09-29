# Project architecture

- Keep the supported TanStack Start project structure so Lovable preview, routing, and publishing remain operational.
- Keep the site as a single page at `/`; inquiries use WhatsApp links and do not require a backend.
- Keep the business WhatsApp number in one `WHATSAPP_NUMBER` constant until changed by the customer.
- Use the browser-native `<dialog>` for service details to avoid the prior modal crash.
