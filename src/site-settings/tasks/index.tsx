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
        type: "inprogress",
        label: "In Progress"
    },
    {
        type: "done",
        label: "Done"
    },
    {
        type: "complete",
        label: "Complete"
    }
]