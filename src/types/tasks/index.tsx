import { Employee } from "../employee";

export type TaskType = "todo" | "inProgress" | "inReview" | "complete";
// export type PriorityType = "Urgent" | "High" | "Normal" | "Low"

export enum PriorityType {
  URGENT = "Маш яаралтай",
  HIGH = "Яаралтай",
  NORMAL = "Дунд зэрэг",
  LOW = "Шаардлаггүй",
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
