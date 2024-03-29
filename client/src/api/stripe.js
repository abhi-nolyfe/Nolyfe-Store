import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const url = process.env.REACT_APP_API_URL;

const createPayments = async (cartItems) => {
    try {
      const response = await axios.post(`${url}/stripe/create-checkout-session`, cartItems);

      return response.data;
    } catch (err) {
      throw err;
    }
  };

const getStripePublishableKey = async () => {
    const response = await axios.get(`${url}/stripe-publishable-key`);
    return response.data;
  };

  
let stripePromise;

const getStripe = async () => {
  if (!stripePromise) {
    const stripePublishableKey = await getStripePublishableKey();
    stripePromise = loadStripe(stripePublishableKey);
  }

  return stripePromise;
};

export { createPayments, getStripe };
