export interface Employee {
  _id: string;
  name: string;
  position?: string;
  status?: EmployeeStatus;
  image?: string;
  department?: string;
  dateJoined: Date;
  email?: string;
  phoneNumber?: string;
}

export enum EmployeeStatus { 
  ACTIVE = "Active",
  INACTIVE = "Not active"
}

// export type activeStatus = "active" | "inactive";
