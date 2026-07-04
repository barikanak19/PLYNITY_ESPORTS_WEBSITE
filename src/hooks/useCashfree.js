import { useCallback } from 'react';
import { CASHFREE_ENV } from '../config/env.js';
import {
  buildCashfreeReturnUrl,
  createCashfreePaymentSession,
  loadCashfreeScript,
} from '../services/cashfreeService';

export function useCashfree() {
  const initiatePayment = useCallback(async ({
    amount,
    name,
    email,
    phone,
    orderId,
    description,
    onFailure,
  }) => {
    try {
      console.log('[Cashfree] Initiating payment...', {
        orderId,
        amount,
        email,
        env: CASHFREE_ENV,
      });

      let scriptLoaded = await loadCashfreeScript();

      if (!scriptLoaded || !window.Cashfree) {
        console.warn('[Cashfree] SDK not available after first load attempt. Retrying once...');
        scriptLoaded = await loadCashfreeScript();
      }

      if (!scriptLoaded || !window.Cashfree) {
        throw new Error('Payment gateway could not be loaded. Please check your internet connection and try again.');
      }

      const returnUrl = buildCashfreeReturnUrl(orderId);
      console.log('[Cashfree] Generated return URL.', { returnUrl, orderId });

      const paymentSession = await createCashfreePaymentSession({
        orderId,
        amount,
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        orderNote: description,
        returnUrl,
      });

      const paymentSessionId = paymentSession.paymentSessionId;

      if (!paymentSessionId) {
        console.error('[Cashfree] Missing paymentSessionId from backend.', paymentSession);
        throw new Error('Payment session is missing. Please try again in a few moments.');
      }

      const cashfree = window.Cashfree({
        mode: CASHFREE_ENV,
      });

      console.log('[Cashfree] SDK initialized. Opening checkout...', { paymentSessionId, returnUrl });

      const checkoutResult = await cashfree.checkout({
        paymentSessionId,
        returnUrl,
      });

      console.log('[Cashfree] Checkout response received.', checkoutResult);

      if (checkoutResult?.error) {
        console.error('[Cashfree] Checkout error.', checkoutResult.error);
        onFailure?.(checkoutResult.error.message || 'Payment failed during checkout. Please try again.');
        return;
      }

      if (checkoutResult?.redirect) {
        console.log('[Cashfree] Checkout redirected to Cashfree-hosted payment page.');
        return;
      }

      if (checkoutResult?.paymentDetails) {
        console.warn('[Cashfree] Checkout returned payment details without a redirect. Registration will be finalized only after server-side verification.', checkoutResult.paymentDetails);
      }
    } catch (error) {
      console.error('[Cashfree] Payment flow failed.', error);
      onFailure?.(error.message || 'Unable to start payment. Please try again.');
    }
  }, []);

  return { initiatePayment };
}
