import { TaskType } from "../../types/tasks";


export const tasks: Array<{
    type: TaskType,
    label: string,
}>= [
    {
        type: "todo",
        label: "To Do"
    },
    {
        type: "inProgress",
        label: "In Progress"
    },
    {
        type: "inReview",
        label: "In Review"
    },
    {
        type: "complete",
        label: "Complete"
    }
]