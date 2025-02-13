import axios from "axios";
import { JobOrder } from "../types/jobOrder";

export const fetchJobOrders = async (
  page: number,
  limit: number
): Promise<JobOrder[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/workshops/job-orders/table?page=${page}&limit=${limit}`
    );
    console.log(response);
    return response.data.data; // Return the data
  } catch (error) {
    console.error("Error fetching job orders:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
