import { FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import {
  Button,
  Fade,
  Backdrop,
  Modal,
  Paper,
  TextField,
  Avatar,
  Tooltip,
  Dialog,
  DialogContent,
  IconButton,
  DialogTitle,
  Menu,
  MenuItem,
} from "@material-ui/core";
import AdjustIcon from "@material-ui/icons/Adjust";
import { PriorityType, Task, TaskType } from "../../../types/tasks";
import { sendRequest } from "../../../utils/core";
import dayjs from "dayjs";
import { ChevronRightIcon, CloseIcon, FlagIcon } from "../../../assets/icons";
import { COLORS } from "../../../site-settings/theme";
import AddEmployeeIcon from "../../../assets/icons/AddEmployee";

interface Props {
  className?: string;
  type: TaskType;
  label?: string;
  tasks?: any;
}

// const Task: Array<Task> = [
//   {
//     _id: "task1",
//     type: "todo",
//     title: "To Do title",
//     priority: PriorityType.URGENT,
//     createdAt: new Date(),
//     dueDate: new Date(),
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas!",
//     assignedTo: [],
//   },
//   {
//     _id: "task2",
//     type: "todo",
//     title: "To Do title2",
//     priority: PriorityType.HIGH,
//     createdAt: new Date(),
//     dueDate: new Date(),
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas!",
//     assignedTo: [],
//   },
//   {
//     _id: "task3",
//     type: "complete",
//     title: "Complete title",
//     priority: PriorityType.HIGH,
//     createdAt: new Date(),
//     dueDate: new Date(),
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas!",
//     assignedTo: [],
//   },
//   {
//     _id: "task4",
//     type: "complete",
//     title: "Complete title1",
//     priority: PriorityType.LOW,
//     createdAt: new Date(),
//     dueDate: new Date(),
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas!",
//     assignedTo: [],
//   },
//   {
//     _id: "task5",
//     type: "inProgress",
//     title: "In Progress title",
//     priority: PriorityType.URGENT,
//     createdAt: new Date(),
//     dueDate: new Date(),
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas!",
//     assignedTo: [],
//   },
//   {
//     _id: "task6",
//     type: "inProgress",
//     title: "In Progress title1",
//     priority: PriorityType.NORMAL,
//     createdAt: new Date(),
//     dueDate: new Date(),
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas!",
//     // assignedTo: Employees,
//   },
//   {
//     _id: "task7",
//     type: "inReview",
//     title: "In review title",
//     priority: PriorityType.HIGH,
//     createdAt: new Date(),
//     dueDate: new Date(),
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas!",
//     assignedTo: [],
//   },
// ];

const TaskModal: FunctionComponent<{
  className?: string;
  task?: Task;
  priority?: string;
  type?: string;
  isVisible?: boolean;
  onClose: () => void;
}> = ({ className, priority, task, type, isVisible = false, onClose }) => {
  const { content, createdAt, dueDate, title, assignees } = task ?? {};
  const [anchorEl, setAnchorEl] = useState(null);
  const [assigned, setAssigned] = useState<any[]>([]);
  const perassign = assignees?.map((name)=>{
    name
  })
  const handlePrioritySet = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePriorityClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    sendRequest(`/user/${assignees}`, "get")
      .then((res: any) => {
        
        setAssigned(res);
        console.log(assigned, "aaaaaaaaaaaaaaaaaaaa");
      })
      .catch((err: any) => console.log(err));
  }, []);

  return (
    <Dialog
      open={isVisible}
      onClose={onClose}
      classes={{
        paper: "!max-w-none m-0 w-screen md:w-160 lg:w-200",
      }}
    >
      <DialogTitle>
        <div className="grid w-full grid-cols-2">
          <p className="col-span-1 self-center font-bold">{title}</p>
          <div className="text-xs ml-12 col-span-1 space-y-1">
            <p>Created at: </p>
            <p className="text-sm font-semibold">
              {dayjs(createdAt).format("YY/DD/MM HH:MM") ?? ""}
            </p>
          </div>
        </div>
      </DialogTitle>
      <IconButton
        className="absolute right-2 top-2 bg-gray-100 opacity-80"
        onClick={onClose}
      >
        <CloseIcon className="text-black" />
      </IconButton>
      <hr />
      <DialogContent
        classes={{
          root: "py-6",
        }}
      >
        <div className="w-full flex flex-col space-y-4">
          <div className="flex w-full justify-between items-center">
            <div className="flex space-x-1">
              <div className="border border-gray-700 bg-wallpaper-light rounded-l-md w-fit py-2 px-4 text-base capitalize font-medium">
                {type ?? ""}
              </div>
              <div className="border border-gray-700 bg-wallpaper-light hover:bg-slate-300 cursor-pointer rounded-r-md w-fit p-2">
                <ChevronRightIcon />
              </div>
            </div>
            <Button
              variant="outlined"
              onClick={handlePrioritySet}
              startIcon={<FlagIcon />}
              className={
                priority === "Urgent"
                  ? "text-status-red"
                  : priority === "High"
                  ? "text-status-orange"
                  : priority === "Normal"
                  ? "text-status-yellow"
                  : "text-status-gray"
              }
            >
              {priority}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handlePriorityClose}
            >
              {Object.values(PriorityType).map((p, idx) => (
                <MenuItem key={idx}>{p}</MenuItem>
              ))}
            </Menu>
          </div>
          <div className="grid grid-cols-5">
            <p className="col-span-4 bg-slate-100 p-4 rounded-sm text-base">
              {content}
            </p>
            <div className="col-span-1 w-full justify-center items-end flex flex-col text-base">
              <p>Due to: </p>
              <p className="text-status-red font-bold">
                {dayjs(dueDate).format("YY/DD/MM HH:MM") ?? ""}
              </p>
            </div>
          </div>
          <IconButton className="h-fit w-fit">
            <AddEmployeeIcon className="h-8 w8" />
          </IconButton>
          <h1>Гүйцэтгэж буй ажилтан:</h1>
          <p>{assigned}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Card: FunctionComponent<Props> = ({ className, type, label }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task>();
  const [tasks, setTasks] = useState<any[]>([]);
  const [priority, setPriority] = useState<string>("High");

  if (type === undefined || label === undefined) {
    return null;
  }

  // const tasks = Task.filter((f) => f.type === type);
  useEffect(() => {
    sendRequest("/task/list", "get")
      .then((res: any) => {
        const _tasks = res.data.data.tasks.map((item: any) => {
          return {
            _id: item.id,
            name: item.name || "",
            content: item.content || "",
            type: item.type,
            assignees: item.assignees || "",
            status: item.status || "",
          };
        });
        setTasks(_tasks);
      })
      .catch((err: any) => console.log(err));
  }, []);
  return (
    <div
      className={cn(
        className,
        "w-full p-4 overflow-y-auto rounded-lg space-y-4"
      )}
    >
      <div
        className={cn(
          "flex flex-col bg-white border-t-4 px-2 py-4 rounded-md ",
          type === "todo"
            ? "border-status-cyan"
            : type === "inProgress"
            ? "border-status-yellow"
            : type === "inReview"
            ? "border-status-orange"
            : type === "complete"
            ? "border-status-green"
            : "bg-none"
        )}
      >
        <p className="text-xl font-bold">{label ?? ""}</p>
      </div>
      <>
        {tasks.map((t, idx) => (
          <Paper
            key={idx}
            className="drop-shadow-xl cursor-pointer mb-4 h-auto p-4 bg-white border-none flex flex-col space-y-2"
            onClick={() => {
              setSelectedTask(t);
              setModalVisible(!modalVisible);
            }}
          >
            <div className="flex justify-between">
              <h1 className="text-lg">{t.name}</h1>
              <Tooltip title={t.priority ?? "none"} placement="top">
                <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center p-1">
                  <FlagIcon
                    stroke={
                      priority === "Urgent"
                        ? COLORS.status.red
                        : priority === "High"
                        ? COLORS.status.orange
                        : priority === "Normal"
                        ? COLORS.status.yellow
                        : COLORS.status.gray
                    }
                    className="h-6 w-6"
                  />
                </div>
              </Tooltip>
            </div>
            <p>{t.content}</p>
            <div className="flex justify-between items-center">
              <div className="flex text-gray-600 text-sm space-x-1 font-medium">
                <p>{dayjs(t.createdAt).format("DD/MM") ?? ""}</p>
                <p>-</p>
                <p className="text-status-red font-bold">
                  {dayjs(t.dueDate).format("DD/MM") ?? ""}
                </p>
              </div>
              <div className="flex space-x-2 items-center">
                {/* {t.assignees.map((name, idx) => {
                  return (
                    <Tooltip title={name}>
                      <Avatar
                        className="w-6 h-6 text-sm"
                        alt={name ?? ""}
                        src="/static/images/avatar/1.jpg"
                        key={idx}
                      />
                    </Tooltip>
                  );
                })} */}
              </div>
            </div>
          </Paper>
        ))}
        <TaskModal
          priority={priority}
          onClose={() => setModalVisible(!modalVisible)}
          task={selectedTask}
          type={label}
          isVisible={modalVisible}
        />
      </>
    </div>
  );
};

export default Card;
