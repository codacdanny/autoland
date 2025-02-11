import axios from "axios";

// Define types
export enum UserRole {
  WORKSHOP_MANAGER = "workshopManager",
  ACCOUNTANT = "accountant",
  FRONT_DESK = "frontDesk",
  AUTOCLUB = "autoclub",
  CUSTOMER = "customer",
}

interface SignupRequest {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  role?: UserRole;
  workshop?: string;
}

interface SignupResponse {
  message: string;
  user: {
    id: string;
    fullName: string;
    role: UserRole;
    email: string;
  };
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  token: string;
}

// API base URL - you should store this in an environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Auth service
export const authService = {
  signup: async (userData: SignupRequest): Promise<SignupResponse> => {
    try {
      const response = await api.post<SignupResponse>("/auths/signup", {
        ...userData,
        role: userData.role || UserRole.CUSTOMER, // Set default role to customer if not provided
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "Signup failed");
      }
      throw new Error("An unexpected error occurred");
    }
  },

  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    console.log(API_BASE_URL);
    try {
      const response = await api.post<LoginResponse>(
        "/auths/login",
        credentials
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || "Login failed");
      }
      throw new Error("An unexpected error occurred");
    }
  },
};
