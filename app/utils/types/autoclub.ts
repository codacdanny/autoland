import CarDetail from "../../autoclub/members/page";
export interface ServiceFeature {
  id: string;
  name: string;
  description: string;
  frequency: number; // Number of times this service can be used
}

export interface SubscriptionTier {
  id: string;
  name: "Platinum" | "Diamond" | "Gold" | "Silver";
  price: number;
  maxCars: number;
  serviceFrequency: number; // Total number of services allowed
  features: ServiceFeature[];
  color: string;
  isActive: boolean;
}

export interface AutoClubMember {
  id: string;
  name: string;
  phone: string;
  email: string;
  subscription: SubscriptionTier;
  status: "Active" | "Inactive" | "Expired";
  cars: CarDetail[];
  startDate: Date;
  endDate: Date;
}
export interface CarDetail {
  carModel: string;
  plateNumber: string;
}
