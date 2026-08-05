
Source: [Stripe Webhooks Implementation Guide](https://www.hooklistener.com/learn/stripe-webhooks-implementation)

---

## 1. Overview & Core Concepts
* **Definition**: Stripe webhooks are HTTP POST callbacks sent by Stripe to an application whenever an event occurs in a Stripe account (e.g., successful payment, subscription cancellation).
* **Key Benefit**: Eliminates the need for continuous API polling by delivering real-time event updates directly to your server.
* **Common Trigger Events**:
  * `payment_intent.succeeded` / `payment_intent.payment_failed`
  * `charge.succeeded` / `charge.dispute.created`
  * `customer.subscription.created` / `.updated` / `.deleted`
  * `invoice.payment_succeeded` / `.payment_failed`

---

## 2. Implementation Steps

### Step 1: Webhook Endpoint Requirements
* **HTTP Method**: Must accept `POST` requests containing JSON payloads.
* **Response Time**: Must return an HTTP `200 OK` status code within **10 seconds** to avoid triggering retries.
* **Protocol**: HTTPS is mandatory in production environments.
* **Architecture**: Must process heavy business logic asynchronously (e.g., queuing background jobs).

### Step 2: Dashboard Setup & Secret Provisioning
1. Navigate to **Stripe Dashboard → Developers → Webhooks**.
2. Click **Add Endpoint** and enter the secure webhook destination URL.
3. Select specific event types to listen for.
4. Save the endpoint and copy the generated **Webhook Signing Secret** (`whsec_...`).
5. Store the secret securely in environment variables.

---

## 3. Webhook Security & Signature Verification

### Signature Mechanism
* Stripe sends a `Stripe-Signature` header with each HTTP payload:
  `Stripe-Signature: t=1672531200,v1=4f4c4d4e...`
* **Components**:
  * `t`: Epoch timestamp of when the event was sent.
  * `v1`: HMAC-SHA256 signature calculated from the raw payload using the secret key.

### Security Best Practices
* **Use Raw Payload**: Always pass the *raw, unparsed request body* to the signature verification method. Middleware that re-serializes JSON (e.g., Express `body-parser`, Django `request.POST`, Laravel defaults) breaks HMAC verification.
* **Timestamp Tolerance**: The official SDK enforces a default 5-minute (300 seconds) timestamp tolerance window to mitigate replay attacks.
* **CSRF Exemption**: Exclude webhook routes from CSRF protection middleware in web frameworks (Rails, Django, Laravel).
* **SDK Methods**: Always use SDK verification helpers (`stripe.webhooks.constructEvent` in Node, `stripe.Webhook.construct_event` in Python, or `\Stripe\Webhook::constructEvent` in PHP) rather than hand-rolling signature comparisons.

---

## 4. Reliability & Event Processing Design

### At-Least-Once Delivery & Retries
* **Delivery Guarantee**: Stripe guarantees *at-least-once* delivery, meaning duplicate events can and will occur.
* **Retry Schedule**: If an endpoint times out (>10s) or returns a non-2xx status code, Stripe retries the delivery using exponential backoff over **up to 3 days (72 hours)**.
* **Endpoint Disablement**: Sustained failures across retries can cause Stripe to automatically disable the webhook endpoint.

### Design Principles
1. **Fast Response Strategy**: Validate the signature, persist/enqueue the raw event, and return `200 OK` immediately. Perform emails, database mutations, and third-party API calls in background queues (e.g., Sidekiq, Celery, BullMQ, SQS).
2. **Idempotency Pattern**: Track processed `event.id` values in a database with a `UNIQUE` index constraint. Short-circuit processing if an incoming `event.id` has already been handled to prevent double-charging or duplicate fulfillment.
3. **Out-of-Order Handling**: Retries can cause newer events to arrive before older ones. Fetch the latest state directly from Stripe's API if event execution sequence matters.

---

## 5. Testing & Local Development
* **Stripe CLI**:
  * Forward events to a local endpoint: `stripe listen --forward-to localhost:3000/stripe/webhooks`
  * Fire sample test events: `stripe trigger payment_intent.succeeded`
* **Local Secrets**: The Stripe CLI outputs a temporary local signing secret (`whsec_...`) during the `listen` command for local verification testing.

---

## 6. Rigid Terms & Definitions

* **Snapshot Events**: Webhook payloads that contain the full object data snapshot at the exact moment the event occurred.
* **Thin Events**: Webhook payloads containing only the object ID and event type, requiring the application to make an API call back to Stripe to retrieve current object details (used to reduce payload size in high-volume settings).
* **HMAC-SHA256**: Keyed-Hash Message Authentication Code using the SHA-256 cryptographic hash function, used by Stripe to prove payload authenticity and integrity.
* **Replay Attack**: A malicious attack where an eavesdropper captures a valid payload and signature, then re-transmits it to your server to trigger unauthorized repeated logic.
* **Idempotency**: An operation property where making the same request multiple times produces the exact same state outcome as making it once.

---

## 7. Resources & Official References

* **Official Implementation Reference**:
  * Detailed code examples and setup steps available in the [Stripe Webhooks Guide](https://www.hooklistener.com/learn/stripe-webhooks-implementation).
* **Official Stripe Documentation Resources**:
  * [Stripe Webhook Documentation](https://stripe.com/docs/webhooks) — Official guide on webhooks setup, event listings, and signature verification.
  * [Stripe API Reference: Webhook Endpoints](https://stripe.com/docs/api/webhook_endpoints) — API specifications for managing endpoints programmatically.
  * [Stripe CLI Tool](https://stripe.com/docs/stripe-cli) — Download and documentation for local webhook forwarding and testing.