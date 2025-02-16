import axios from "axios";
import { Appointment } from "../types/appointment";
import { getCookie } from "cookies-next";

export const fetchAppointments = async (): Promise<Appointment[]> => {
  const token = getCookie("token");
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/workshops/appointments`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data; // Return the appointments data
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error; // Rethrow the error for handling in the component
  }
};

export const deleteAppointment = async (
  appointmentId: string,
  token: string
): Promise<void> => {
  try {
    await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/workshops/appointments/${appointmentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      }
    );
  } catch (error) {
    console.error("Error deleting appointment:", error);
    throw error; // Rethrow the error for handling in the component
  }
};
