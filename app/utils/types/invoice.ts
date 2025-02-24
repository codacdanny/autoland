export interface InvoiceData {
  customerDetails: {
    customerName: string;
    regNo: string;
    vehicleMake: string;
    chassisNo: string;
    modelNo: string;
    date: string;
    jobOrderNo: string;
    phoneNo: string;
    email: string;
  };
  costSummary: {
    labour: number;
    sundries: number;
    vat: number;
    estimator: string;
  };
  partsAndServices: Array<{
    partNo: string;
    partName: string;
    description: string;
    quantity: number;
    unitPrice: number;
    amount: number;
  }>;
  _id: string;
  jobOrderId: {
    _id: string;
    jobOrderId: string;
  };
}
