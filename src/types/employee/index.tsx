export interface Employee {
  _id: string;
  name: string;
  lastname: string;
  position?: string;
  status?: EmployeeStatus;
  image?: string;
  department?: string;
  dateJoined: Date;
  email?: string;
  phoneNumber?: string;
  refreshRequest?: () => void;
}

export enum EmployeeStatus {
  ACTIVE = "идэвхитэй",
  INACTIVE = "идэвхигүй",
}

export enum DepartmentTypes {
  PRODUCT = "Production",
  DEVELOPER = "Developer",
  DESIGNER = "Designer",
}

// export type DepartmentTypes = "Production" | "Developer" | "Designer"

// export type activeStatus = "active" | "inactive";
