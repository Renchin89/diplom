import { FunctionComponent, useState } from "react";
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
} from "@material-ui/core";
import AdjustIcon from "@material-ui/icons/Adjust";

interface Props {
  className?: string;
}

const Card: FunctionComponent<Props> = ({ className }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div
      className={cn(
        className,
        " col w-80 p-2 bg-amber-300 overflow-y-auto rounded-lg "
      )}
    >
      <div className="head text-xl mb-2 pl-2">Ene Progress</div>

      <div className="body">
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
            DescriptionDescriptionDescriptionDescript ionDescription
            DescriptionDescriptio nDescriptionDescript ionDescriptionDescr
            iptionDes criptionDescriptionDescriptionDescr iptionDescription
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
                    react-transition-group animates me. react-transition-group
                    animates me. react-transition-group animates me.
                    react-transition-group animates me. react-transition-group
                    animates me. react-transition-group animates me.
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
        </Paper>
      </div>
    </div>
  );
};

export default Card;
