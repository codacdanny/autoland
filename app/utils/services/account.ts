import axios from "axios";
import { getCookie } from "cookies-next";
import {
  PaymentRequest,
  PaymentRecord,
  PaymentSummary,
  PaymentUpdateResponse,
} from "../types/account";
import { log } from "console";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const addPayment = async (
  payment: PaymentRequest
): Promise<PaymentRecord> => {
  const token = getCookie("token");
  const response = await axios.post(`${BASE_URL}/workshops/payments`, payment, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(payment);
  return response.data.data;
};

export const getPaymentHistory = async (
  jobId: string
): Promise<PaymentRecord[]> => {
  const token = getCookie("token");
  const response = await axios.get(
    `${BASE_URL}/workshops/payments/history/${jobId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data.data;
};

export const getPaymentSummary = async (
  jobId: string
): Promise<PaymentSummary> => {
  const token = getCookie("token");
  const response = await axios.get(
    `${BASE_URL}/workshops/payments/${jobId}/summary`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  console.log(response.data.data);
  return response.data.data;
};

export const updatePaymentAmount = async (
  jobId: string,
  newAmount: number
): Promise<PaymentUpdateResponse> => {
  const token = getCookie("token");
  const response = await axios.put(
    `${BASE_URL}/workshops/payments/${jobId}`,
    { newAmount },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data.data;
};
