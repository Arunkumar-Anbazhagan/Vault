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

### Quick Summary Table

| Feature | Stripe | Chargebee | Mollie | Razorpay | PayPal | PhonePe |
| --- | --- | --- | --- | --- | --- | --- |
| **Type** | Payment Processor | Billing Platform | Payment Gateway | Payment Processor | Wallet + Processor | Wallet (India) |
| **Geography** | Global (150+ countries) | Global | Europe Strong | India Strong | Global | India Only |
| **Subscriptions** | Yes | YES (Primary) | No | Yes | Yes | Yes |
| **Invoicing** | Basic | YES (Advanced) | No | Basic | Moderate | None |
| **Pricing** | 2.9% + $0.30 | $99-299/mo + payment fees | 1.8-3.5% | 1.99% + ₹3 | 2.9% + $0.30 | 1.59% |
| **Best For** | Global SaaS | Recurring billing | EU payments | India e-commerce | Marketplaces | India mobile |

### Detailed Breakdown

#### **1. STRIPE**

**What it is:** Direct payment processor + gateway

**Strengths:**

- ✓ Works globally (150+ countries)
- ✓ Excellent documentation & community support
- ✓ Strongest developer experience
- ✓ Can handle subscriptions natively
- ✓ Webhooks are reliable
- ✓ Good fraud detection

**Weaknesses:**

- ✗ Doesn't handle invoicing well (you need extra tools)
- ✗ No built-in subscription management (you code it yourself)
- ✗ Higher fees than competitors

**When to use:**

- You're a global SaaS
- You want direct payment processing
- You don't need complex billing logic
- You're okay writing code to manage subscriptions

**Pricing:** 2.9% + $0.30 per transaction

---

#### **2. CHARGEBEE** (Your Current Choice)

**What it is:** Billing management platform that integrates with payment processors

**Strengths:**

- ✓ Purpose-built for recurring subscriptions
- ✓ Advanced invoicing & payment retry logic
- ✓ Handles dunning (payment failures) automatically
- ✓ Tax compliance features
- ✓ Works with multiple processors (Stripe, Mollie, Razorpay, PayPal)
- ✓ Can customize billing workflows
- ✓ Great for SaaS with complex billing needs

**Weaknesses:**

- ✗ Doesn't process payments itself (needs Stripe/Mollie/etc)
- ✗ Expensive ($99-299+ per month)
- ✗ Configuration-heavy (lots of settings)
- ✗ Overkill for simple one-time payments

**When to use:**

- You have recurring subscriptions
- You need advanced invoicing
- You want to handle payment failures automatically
- Your billing logic is complex

**Pricing:** $99-$299/month subscription + payment processor fees

---

#### **3. MOLLIE** (Your Payment Processor)

**What it is:** European payment gateway

**Strengths:**

- ✓ Strong in Europe (especially Netherlands)
- ✓ Support for local EU payment methods (iDEAL, SEPA, Bancontact)
- ✓ Good fees (1.8-3.5%)
- ✓ PCI compliant (handles card data securely)
- ✓ Simple API
- ✓ Test mode with simulated payment states

**Weaknesses:**

- ✗ Limited outside Europe
- ✗ No subscription management
- ✗ No invoicing
- ✗ Smaller merchant community
- ✗ Less documentation than Stripe

**When to use:**

- Your customers are in Europe
- You want local payment methods
- You're using Chargebee for billing

**Pricing:** 1.8% - 3.5% per transaction (varies by country)

---

#### **4. RAZORPAY** (India-First)

**What it is:** Payment processor optimized for India

**Strengths:**

- ✓ Best for India (super competitive: 1.99% + ₹3)
- ✓ Native UPI support (huge in India)
- ✓ Good documentation
- ✓ Supports subscriptions
- ✓ Easy to integrate
- ✓ Growing marketplace

**Weaknesses:**

- ✗ Limited outside India
- ✗ Customer support can be slower
- ✗ Smaller ecosystem than Stripe
- ✗ Less advanced billing features

**When to use:**

- Your primary market is India
- You want cheap payments
- You need UPI support
- You're building for Indian users

**Pricing:** 1.99% + ₹3 per transaction (cheapest for India)

---

#### **5. PAYPAL**

**What it is:** Digital wallet + payment processor

**Strengths:**

- ✓ Trusted brand globally
- ✓ 100+ countries supported
- ✓ Users can pay without cards (via PayPal wallet)
- ✓ Good for international transfers
- ✓ Handles subscriptions
- ✓ Less intimidating than entering card details

**Weaknesses:**

- ✗ Higher fees (2.9% + $0.30)
- ✗ Slower payouts (24-72 hours)
- ✗ Account limitations/freezes are notorious
- ✗ Invoicing is basic
- ✗ Less developer-friendly than Stripe
- ✗ Customer service can be poor

**When to use:**

- Your customers prefer PayPal (especially non-tech users)
- You're selling globally
- You need a wallet option
- You're on marketplaces (eBay, Etsy)

**Pricing:** 2.9% + $0.30 per transaction

---

#### **6. PHONEPE** (India Mobile-First)

**What it is:** Digital wallet primarily, now expanding to payments

**Strengths:**

- ✓ Huge in India (100M+ users)
- ✓ Super cheap (1.59%)
- ✓ Mobile-first experience
- ✓ Immediate payouts
- ✓ QR code payments support
- ✓ Works with any phone

**Weaknesses:**

- ✗ India only (no international)
- ✗ Mobile app required (not web-friendly)
- ✗ No invoicing
- ✗ New to business payments (limited features)
- ✗ Smaller merchant community
- ✗ Limited subscription support

**When to use:**

- 100% India-based business
- Your users are mobile-first
- You want rock-bottom fees
- You need quick payouts

**Pricing:** 1.59% per transaction

---

### Comparison by Use Case

#### **For Global SaaS with Subscriptions:**

**Best: Stripe + Custom Subscription Code** or **Chargebee + Stripe**

- Stripe for payments, handle subscriptions yourself OR use Chargebee as billing layer

#### **For India e-commerce with Subscriptions:**

**Best: Razorpay or PhonePe**

- Razorpay if you want advanced features
- PhonePe if you want cheapest option

#### **For European SaaS:**

**Best: Chargebee + Mollie** ✓ (Your setup)

- Mollie for local payment methods
- Chargebee for subscription management

#### **For Marketplace/Global Sellers:**

**Best: PayPal + Stripe**

- PayPal for customer trust
- Stripe as backup

#### **For Simple E-commerce (no subscriptions):**

**Best: Razorpay** (India) or **Stripe** (Global)

- No need for Chargebee complexity

---

### Your Current Setup Analysis

**Chargebee + Mollie is excellent for:**

- ✓ European customers
- ✓ Recurring subscriptions
- ✓ Strong invoicing needs
- ✓ Automatic payment retries
- ✓ Complex billing workflows

**Limitations:**

- ✗ Won't work well for India-only
- ✗ Expensive if you're just doing one-time payments
- ✗ Limited payment methods outside Europe
