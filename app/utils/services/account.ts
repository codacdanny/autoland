import axios from "axios";
import { getCookie } from "cookies-next";
import { Payment, PaymentMetrics, PaymentHistory } from "../types/account";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const addPayment = async (payment: Payment): Promise<Payment> => {
  const token = getCookie("token");
  const response = await axios.post(`${BASE_URL}/workshops/payments`, payment, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.data;
};

export const getPaymentMetrics = async (
  jobOrderId: string
): Promise<PaymentMetrics> => {
  const token = getCookie("token");
  const response = await axios.get(
    `${BASE_URL}/workshops/payments/${jobOrderId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data.data;
};

export const updateTotalAmount = async (
  jobOrderId: string,
  newAmount: number
): Promise<Payment> => {
  const token = getCookie("token");
  const response = await axios.put(
    `${BASE_URL}/workshops/payments/${jobOrderId}`,
    { newAmount },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data.data;
};

export const getPaymentHistory = async (
  jobOrderId: string
): Promise<PaymentHistory[]> => {
  const token = getCookie("token");
  const response = await axios.get(
    `${BASE_URL}/workshops/payments/history/${jobOrderId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data.data;
};
