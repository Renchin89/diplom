import { Employee } from "../employee";

export type TaskType = "todo" | "inProgress" | "inReview" | "complete";
// export type PriorityType = "Urgent" | "High" | "Normal" | "Low"

export enum PriorityType {
  URGENT = "Urgent",
  HIGH = "High",
  NORMAL = "Normal",
  LOW = "Low",
}

export interface Task {
  _id: string;
  type: TaskType;
  priority?: PriorityType;
  title?: string;
  description?: string;
  createdAt?: Date;
  dueDate?: Date;
  assignedTo?: Employee[];
}
