/**
 * useRazorpay — loads Razorpay SDK and exposes a payment function
 */
import { useCallback } from 'react';
import { RAZORPAY_KEY_ID } from '../config/tournaments';

/** Dynamically load Razorpay checkout script */
function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

/**
 * @returns {Function} initiatePayment(options) → Promise<paymentId>
 */
export function useRazorpay() {
  const initiatePayment = useCallback(async ({ amount, name, email, phone, description, onSuccess, onFailure }) => {
    const loaded = await loadRazorpayScript();
    if (!loaded) {
      onFailure?.('Failed to load payment gateway. Please check your internet connection.');
      return;
    }

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: amount * 100, // paise
      currency: 'INR',
      name: 'Plynity Esports',
      description,
      image: '/plynity-logo.png',
      prefill: { name, email, contact: phone },
      theme: { color: '#f97316' },
      modal: {
        ondismiss: () => onFailure?.('Payment cancelled by user.'),
      },
      handler: (response) => {
        onSuccess?.(response.razorpay_payment_id);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', (resp) => {
      onFailure?.(resp.error?.description || 'Payment failed');
    });
    rzp.open();
  }, []);

  return { initiatePayment };
}