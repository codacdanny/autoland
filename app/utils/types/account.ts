export interface Payment {
  _id?: string;
  jobOrderId: string;
  amount: number;
  totalAmountDue: number;
  paymentPhase: string;
  paymentMethod: string;
  date?: string;
}

export interface PaymentMetrics {
  jobOrderId: string;
  totalJobAmount: number;
  previouslyPaid: number;
  remainingBalance: number;
}

export interface PaymentHistory {
  id: Key | null | undefined;
  jobOrderId: string;
  paymentPhase: string;
  paymentMethod: string;
  date: string;
  amount: number;
}
