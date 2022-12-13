import { TaskType } from "../../types/tasks";


export const tasks: Array<{
    type: TaskType,
    label: string,
}>= [
    {
        type: "todo",
        label: "Төлөвлөсөн"
    },
    {
        type: "inProgress",
        label: "Хийж буй"
    },
    {
        type: "inReview",
        label: "Шалгаж буй"
    },
    {
        type: "complete",
        label: "Дууссан"
    }
]