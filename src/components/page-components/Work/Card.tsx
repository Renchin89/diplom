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
} from "@material-ui/core";
import AdjustIcon from "@material-ui/icons/Adjust";
import { Task, TaskType } from "../../../types/tasks";
import { sendRequest } from "../../../utils/core";
import dayjs from "dayjs";
import { Employees } from "../Employee";
import { FlagIcon } from "../../../assets/icons";
import { COLORS } from "../../../site-settings/theme";

interface Props {
  className?: string;
  type: TaskType;
  label?: string;
}

const Task: Array<Task> = [
  {
    _id: "task1",
    type: "todo",
    title: "To Do title",
    priority: "Urgent",
    createdAt: new Date(),
    dueDate: new Date(),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas!",
    assignedTo: Employees,
  },
  {
    _id: "task2",
    type: "todo",
    title: "To Do title2",
    priority: "High",
    createdAt: new Date(),
    dueDate: new Date(),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas!",
    assignedTo: Employees,
  },
  {
    _id: "task3",
    type: "complete",
    title: "Complete title",
    priority: "Urgent",
    createdAt: new Date(),
    dueDate: new Date(),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas!",
    assignedTo: Employees,
  },
  {
    _id: "task4",
    type: "complete",
    title: "Complete title1",
    priority: "Low",
    createdAt: new Date(),
    dueDate: new Date(),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas!",
    assignedTo: Employees,
  },
  {
    _id: "task5",
    type: "inProgress",
    title: "In Progress title",
    priority: "Urgent",
    createdAt: new Date(),
    dueDate: new Date(),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas!",
    assignedTo: Employees,
  },
  {
    _id: "task6",
    type: "inProgress",
    title: "In Progress title1",
    priority: "Normal",
    createdAt: new Date(),
    dueDate: new Date(),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas!",
    assignedTo: Employees,
  },
  {
    _id: "task7",
    type: "inReview",
    title: "In review title",
    priority: "High",
    createdAt: new Date(),
    dueDate: new Date(),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad est! Eveniet a totam cupiditate eligendi, quaerat saepe est harum recusandae alias minus deleniti quidem vero soluta omnis. Quo, voluptas!",
    assignedTo: Employees,
  },
];

const TaskModal: FunctionComponent<{
  className?: string;
  task?: Task;
  isVisible?: boolean;
  onClose: () => void;
}> = ({ className, task, isVisible = false, onClose }) => {
  const { description, createdAt, dueDate, title, assignedTo, priority } =
    task ?? {};

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isVisible}
      onClose={() => {
        onClose();
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isVisible}>
        <div className="w-2/4 flex-wrap flex bg-white m-auto mt-40 p-12">
          <div className="flex justify-between">
            <h1 className="text-lg">{title}</h1>
            <h1
              className={
                (cn(
                  priority === "Urgent"
                    ? "text-status-red"
                    : priority === "High"
                    ? "text-status-orange"
                    : priority === "Normal"
                    ? "text-status-yellow"
                    : "text-status-gray"
                ),
                "font-bold text-base")
              }
            >
              {priority}
            </h1>
          </div>
          <div className="">
            <h1 className="text-xl mb-5">Assigned:</h1>
            <div className="flex items-center space-x-4">
              <Avatar alt="Renchindorj" />
              <h1 className="text-xl">Renchindorj</h1>
            </div>
          </div>
          <Button className="mt-10">Assign</Button>
        </div>
      </Fade>
    </Modal>
  );
};

const Card: FunctionComponent<Props> = ({ className, type, label }) => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log("🚀 ~ file: Card.tsx:153 ~ modalVisible", modalVisible);
  const [selectedTask, setSelectedTask] = useState<Task>();
  const [posts, setPosts] = useState<string[]>([]);
  if (type === undefined || label === undefined) {
    return null;
  }

  const tasks = Task.filter((f) => f.type === type);

  const handleLogin = () => {
    sendRequest("/task/list", "get", {})
      .then((res: any) => {
        console.log(res);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
  useEffect(() => {
    handleLogin();
  }, []);
  return (
    <div
      className={cn(
        className,
        type === "todo"
          ? "bg-status-cyan"
          : type === "inProgress"
          ? "bg-status-yellow"
          : type === "inReview"
          ? "bg-status-orange"
          : type === "complete"
          ? "bg-status-green"
          : "bg-none",
        "w-full p-4 overflow-y-auto rounded-lg space-y-4"
      )}
    >
      <p className="text-xl font-bold pl-2">{label ?? ""}</p>
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
              <h1 className="text-lg">{t.title}</h1>
              <Tooltip title={t.priority ?? "none"} placement="top">
                <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center p-1">
                  <FlagIcon
                    stroke={
                      t.priority === "Urgent"
                        ? COLORS.status.red
                        : t.priority === "High"
                        ? COLORS.status.orange
                        : t.priority === "Normal"
                        ? COLORS.status.yellow
                        : COLORS.status.gray
                    }
                    className="h-6 w-6"
                  />
                </div>
              </Tooltip>
            </div>
            <p>{t.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex text-gray-600 text-sm space-x-1 font-medium">
                <p>{dayjs(t.createdAt).format("DD/MM") ?? ""}</p>
                <p>-</p>
                <p className="text-status-red font-bold">
                  {dayjs(t.dueDate).format("DD/MM") ?? ""}
                </p>
              </div>
              <div className="flex space-x-2 items-center">
                {t.assignedTo?.map((emp, idx) => {
                  return (
                    <Tooltip title={emp.name}>
                      <Avatar
                        className="w-6 h-6 text-sm"
                        alt={emp.name ?? ""}
                        src="/static/images/avatar/1.jpg"
                        key={idx}
                      />
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          </Paper>
        ))}
        <TaskModal
          onClose={() => setModalVisible(!modalVisible)}
          task={selectedTask}
          isVisible={modalVisible}
        />
        {/* <Paper
          onClick={() => {
            setModalVisible(!modalVisible);
          }}
          className="drop-shadow-xl cursor-pointer mb-4 h-auto p-4 bg-white"
        >
          <div className="text-lg flex align-middle space-x-2">
            <AdjustIcon className="w-4 mt-0.5 decoration-lime-500" />
            <h1 className="text-lg ">Title</h1>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <footer className="flex mt-6 justify-between">
            <p>Created at</p>
            <p>Nov 22, 2022 2:39 PM</p>
          </footer>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalVisible}
            onClose={() => {
              setModalVisible(!modalVisible);
            }}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalVisible}>
              <div className="w-2/4 flex-wrap flex bg-white m-auto mt-40 p-12">
                <div className="w-3/4">
                  <h1 className="text-2xl mb-10">Transition modal</h1>
                  <p className="text-lg ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="">
                  <h1 className="text-xl mb-5">Assigned:</h1>
                  <div className="flex items-center space-x-4">
                    <Avatar alt="Renchindorj" />
                    <h1 className="text-xl">Renchindorj</h1>
                  </div>
                </div>
                <Button className="mt-10">Assign</Button>
              </div>
            </Fade>
          </Modal>
        </Paper>
        <Paper
          onClick={() => {
            setModalVisible(!modalVisible);
          }}
          className="drop-shadow-xl cursor-pointer mb-4 h-auto p-4 bg-white"
        >
          <div className="text-lg flex align-middle space-x-2">
            <AdjustIcon className="w-4 mt-0.5 decoration-lime-500" />
            <h1 className="text-lg ">Title</h1>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <footer className="flex mt-6 justify-between">
            <p>Created at</p>
            <p>Nov 22, 2022 2:39 PM</p>
          </footer>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalVisible}
            onClose={() => {
              setModalVisible(!modalVisible);
            }}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalVisible}>
              <div className="w-2/4 flex-wrap flex bg-white m-auto mt-40 p-12">
                <div className="w-3/4">
                  <h1 className="text-2xl mb-10">Transition modal</h1>
                  <p className="text-lg ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="">
                  <h1 className="text-xl mb-5">Assigned:</h1>
                  <div className="flex items-center space-x-4">
                    <Avatar alt="Renchindorj" />
                    <h1 className="text-xl">Renchindorj</h1>
                  </div>
                </div>
                <Button className="mt-10">Assign</Button>
              </div>
            </Fade>
          </Modal>
        </Paper>
        <Paper className="drop-shadow-xl mb-4 h-auto p-4 bg-white">
          <div className="text-lg flex align-middle space-x-2">
            <AdjustIcon className="w-4 mt-0.5 decoration-lime-500" />
            <h1 className="text-lg ">Title</h1>
          </div>
          <p>Description</p>
          <footer className="flex mt-6 justify-between">
            <p>Created at</p>
            <p>Nov 22, 2022 2:39 PM</p>
          </footer>
        </Paper> */}
      </>
    </div>
  );
};

export default Card;
