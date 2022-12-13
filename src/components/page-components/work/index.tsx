import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import {
  Button,
  Modal,
  Paper,
  TextField,
  Fade,
  Backdrop,
  Avatar,
} from "@material-ui/core";
import Card from "./Card";
import { sendRequest } from "../../../utils/core";
import { tasks } from "../../../site-settings/tasks";
interface Props {
  className?: string;
}

const MainPage: FunctionComponent<Props> = ({ className }) => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [assignee, setAssignee] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const handleAddTask = (event: any) => {
    event.preventDefault();

    sendRequest("/auth/register", "post", {
      name: name,
      content: content,
      type: type,
      assignee: assignee,
      status: status,
    })
      .then((res: any) => {
        console.log(res);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  console.log(tasks);
  return (
    <div className={cn(className, "w-full p-2 flex space-x-4 h-200")}>
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
              <h1 className="text-2xl mb-10">Add New Task</h1>
              <TextField
                onChange={(e: any) => setName(e.target.value)}
                label="Add Title"
                variant="outlined"
                multiline
                className="pr-10 text-lg w-full"
              />
              <TextField
                onChange={(e: any) => setContent(e.target.value)}
                label="Add Description"
                variant="outlined"
                multiline
                className="pr-10 mt-10 text-lg w-full"
              />
            </div>
            <div className="">
              <h1 className="text-xl mb-5">Creating by:</h1>
              <div className="flex items-center space-x-4">
                <Avatar alt="Renchindorj" />
                <h1 className="text-xl">Renchindorj</h1>
              </div>
            </div>
            <Button className="mt-10" onClick={handleAddTask}>
              Add Task
            </Button>
          </div>
        </Fade>
      </Modal>
      <Button
        className="absolute right-10"
        onClick={() => setModalVisible(!modalVisible)}
      >
        Add Task
      </Button>
      {tasks.map((t, idx) => (
        <Card type={t.type} label={t.label} key={idx} />
      ))}
    </div>
  );
};

export default MainPage;
