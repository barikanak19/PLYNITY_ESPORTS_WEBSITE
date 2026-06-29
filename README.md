# Plynity Esports

Plynity Esports is a Vite + React tournament registration site for BGMI and Free Fire Max events.

## Payment Gateway

Payments are handled through Cashfree Web Checkout. Configure the following environment variables before running the app:

- VITE_CASHFREE_APP_ID
- VITE_CASHFREE_ENV=sandbox

The registration flow requests a payment_session_id from your backend endpoint at /api/cashfree/session, opens the checkout, and only saves the registration after payment succeeds. The frontend never stores or exposes the Cashfree Secret Key.
