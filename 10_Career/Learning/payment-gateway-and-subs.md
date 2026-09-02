---
type: Note
---
# payment gateway and subs

- **Chargebee** is the **Waiter and Cashier**. They take your order, calculate the total, add tax, write down what you owe, and manage your "tab" if you are a regular customer.
- **Mollie** is the **Credit Card Machine**. The waiter doesn't actually process your credit card; they hand it to the machine. The machine talks to the bank, moves the actual money, and gives you a receipt.

### **1. What is Chargebee?**

**Chargebee** is a **subscription management and recurring billing platform**.
It handles:

- Creating and managing subscription plans (e.g., monthly, yearly)
- Generating invoices and charging customers
- Managing trial periods, upgrades, downgrades, cancellations
- Dunning (retrying failed payments)
- Tax calculation, proration, etc.

Chargebee does **not** process payments directly. Instead, it connects to **payment gateways** (like Mollie, Stripe, PayPal, etc.) to actually move the money.

---

### **2. What is Mollie?**

**Mollie** is a **payment service provider (PSP)** based in Europe.
It processes online payments by connecting your business to various payment methods (credit cards, iDEAL, Bancontact, PayPal, etc.).

Mollie provides:

- A **hosted payment page** where customers enter their payment details
- APIs to create payments, handle refunds, and receive status updates
- A **test mode** for developers to simulate transactions without real money

In test mode, Mollie shows a simulated payment page where you can manually choose the outcome of a payment — that’s exactly what you’re seeing (the four options).

---

### **3. Relationship Between Chargebee and Mollie**

**Chargebee** and **Mollie** work together in a **layered architecture**:

- **Chargebee** = **the brain** (subscription logic, invoicing, customer lifecycle)
- **Mollie** = **the hand** (actually executing the payment)

When a customer orders something:

1. Your application (or Chargebee) creates a subscription/invoice in Chargebee.
2. Chargebee tells Mollie: "Please collect a payment of €X from this customer."
3. Mollie takes over the payment flow, showing its own hosted payment page.
4. The customer pays (or not) and Mollie knows the outcome.
5. Mollie sends the result back to Chargebee via a **webhook** or API response.
6. Chargebee updates the invoice/subscription status accordingly (e.g., `paid`, `payment_failed`, `pending`, etc.).

This separation of concerns makes it easier to switch payment providers later without rewriting all your billing logic.

---

### **4. The Four Test Mode Options Explained**

In Mollie’s test environment, you see four buttons that simulate different **payment statuses**:

| **Option** | **Meaning in Mollie test mode** | **What Chargebee typically does after receiving this status** |
| --- | --- | --- |
| **Open** | The payment is created but not yet completed. The customer has not finished the payment (e.g., they are still on the bank page). | Chargebee marks the invoice as `pending` or `payment_processing`. It will wait for a final status. |
| **Paid** | The payment was successful. | Chargebee marks the invoice as `paid`, activates the subscription, and sends a success confirmation. |
| **Failed** | The payment attempt failed (e.g., insufficient funds, card declined). | Chargebee marks the invoice as `payment_failed` and may trigger dunning (retry) logic depending on your settings. |
| **Expired** | The payment session expired because the customer did not complete it within the allowed time (e.g., 15 minutes). | Chargebee treats it like a failed payment or cancels the pending invoice, depending on configuration. |

These options let you test how your application and Chargebee handle each real‑world scenario without actually moving money.

---

### **5. Complete Workflow: From Order to Payment Status**

Here’s what happens step‑by‑step when a customer places an order:

1. **Customer clicks “Order”** on your website.
2. Your server (or client) sends a request to **Chargebee** to create a **subscription** or **one‑time invoice**.
3. Chargebee creates the invoice and then calls the **Mollie API** to initiate a payment. Chargebee passes the amount, currency, customer info, and a redirect URL.
4. Mollie creates a payment object and returns a **checkout URL** (the hosted payment page).
5. Chargebee redirects the customer’s browser to that Mollie checkout URL.
6. The customer sees the Mollie payment page (in test mode, that’s the page with the four options; in live mode, it’s the real bank/card interface).
7. The customer completes the payment or the session ends (open, paid, failed, expired).
8. Mollie knows the final status and **sends a webhook** to Chargebee (to a Chargebee‑provided endpoint) or returns the status to Chargebee via API if it’s a synchronous flow.
9. Chargebee receives the status and updates the invoice/subscription:
   - `paid` → invoice marked as paid, subscription active.
   - `failed` or `expired` → invoice marked as failed, subscription remains inactive or is cancelled, dunning may start.
   - `open` → Chargebee waits; no final update yet.
10. Optionally, your application can also receive a webhook from Chargebee to update the user interface or send emails.

---
