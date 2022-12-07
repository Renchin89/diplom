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
  INACTIVE = "Not active",
}

export enum DepartmentTypes {
  PRODUCT = "Production",
  DEVELOPER = "Developer",
  DESIGNER = "Designer",
}



// export type DepartmentTypes = "Production" | "Developer" | "Designer"

// export type activeStatus = "active" | "inactive";
