export interface JobOrderTableType {
  jobId: string;
  bookingDate: string; // You can use Date if you want to handle it as a Date object
  clientName: string;
  clientEmail: string;
  carIssue: string;
  paymentStatus: string;
  team: string;
  customerJobOrderStatus: string;
  carRepairStatus: string;
  deliveryStatus: string;
}
