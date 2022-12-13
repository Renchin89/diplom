import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import cn from "classnames";
import {
  Avatar,
  Button,
  Checkbox,
  IconButton,
  Select,
  TextField,
} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { EmailIcon, MoreIcon, PhoneIcon, PrintIcon } from "../../assets/icons";
import dayjs from "dayjs";
import {
  DepartmentTypes,
  Employee,
  EmployeeStatus,
} from "../../types/employee";
import { sendRequest } from "../../utils/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface Props {
  className?: string;
}

const EmployeeCard: FunctionComponent<Employee> = props => {
  const {
    name,
    lastname,
    position,
    status,
    dateJoined,
    department,
    email,
    phoneNumber,
    _id,
    refreshRequest,
  } = props;
  const stats = Object.values(EmployeeStatus);
  const departments = Object.values(DepartmentTypes);
  const router = useRouter();
  const [updatedData, setUpdatedData] = useState<{
    firstname?: string;
    lastname?: string;
    position?: string;
    phone?: number;
    department?: string;
    status?: string;
    email?: string;
  }>();
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleDelete = () => {
    sendRequest(`/user/${_id}`, "delete").then((res: any) => {
      refreshRequest && refreshRequest();
      handleClose();
      console.log(res);
    });
  };
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdate = () => {
    console.log(updatedData);
    sendRequest(`/user/${_id}`, "put", updatedData)
      .then((res: any) => {
        setOpen(!open);
        refreshRequest && refreshRequest();
        console.log(res);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
  return (
    <div className="rounded-lg bg-white p-3 space-y-4">
      <div className="flex items-center justify-between">
        <Checkbox />
        <div className="flex flex-row space-x-2 items-center">
          <div
            className={cn(
              "border rounded-md px-2 py-px h-7 cursor-pointer capitalize",
              status === EmployeeStatus.ACTIVE
                ? "border-status-green text-status-green"
                : "border-status-red text-status-red"
            )}
          >
            {status ?? "active"}
          </div>
          <IconButton onClick={handleClick}>
            <MoreIcon />
          </IconButton>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Edit</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>
              <TextField
                label="Firstname"
                defaultValue={name}
                className="w-full mb-5"
                variant="outlined"
                onChange={async (e: any) => {
                  const val = e.target.value;
                  setUpdatedData({ firstname: val });
                }}
              />
              <TextField
                label="Lastname"
                defaultValue={lastname}
                className="w-full mb-5"
                variant="outlined"
                onChange={async (e: any) => {
                  const val = e.target.value;
                  setUpdatedData({ lastname: val });
                }}
              />
              <TextField
                label="Position"
                defaultValue={position}
                className="w-full mb-5"
                variant="outlined"
                onChange={async (e: any) => {
                  const val = e.target.value;
                  setUpdatedData({ position: val });
                }}
              />
              {/* <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                defaultValue={department}
                onChange={async (e: any) => {
                  const val = e.target.value;
                  await setUpdatedData({ department: val });
                }}
              >
                {departments.map((dep, ind) => {
                  return (
                    <MenuItem key={ind} value={dep}>
                      {dep}
                    </MenuItem>
                  );
                })}
              </Select> */}
              <TextField
                label="Phone"
                defaultValue={phoneNumber}
                className="w-full mb-5"
                variant="outlined"
                onChange={async (e: any) => {
                  const val = e.target.value;
                  setUpdatedData({ phone: val });
                }}
              />

              <TextField
                label="Email"
                defaultValue={email}
                className="w-full mb-5"
                variant="outlined"
                onChange={async (e: any) => {
                  const val = e.target.value;
                  setUpdatedData({ email: val });
                }}
              />

              <Select
                className="w-3/5 capitalize mb-5 pl-3"
                id="demo-simple-select-helper"
                defaultValue={status}
                onChange={async (e: any) => {
                  const val = e.target.value;
                  await setUpdatedData({ status: val });
                }}
              >
                {stats.map((stat, ind) => {
                  return (
                    <MenuItem className="capitalize" key={ind} value={stat}>
                      {stat}
                    </MenuItem>
                  );
                })}
              </Select>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(!open)} color="primary">
                Cancel
              </Button>
              <Button onClick={handleUpdate} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                setOpen(!open);
              }}
            >
              Edit
            </MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </Menu>
        </div>
      </div>
      <div className="profile flex flex-col text-center items-center text-base">
        <Avatar
          className="w-32 h-32 text-5xl mb-4"
          alt={name ?? ""}
          src="/static/images/avatar/1.jpg"
        />
        <p className="font-bold Cap">
          {lastname}&nbsp;
          {name}
        </p>
        <p className="text-gray-600">{position ?? ""}</p>
      </div>
      <div className="bg-wallpaper-light rounded border border-gray-400 p-3 space-y-4">
        <div className="flex w-full text-xs">
          <div className="flex flex-col w-1/2 space-y-1">
            <p className="text-gray-600">Department</p>
            <p className="text-base">{department ?? ""}</p>
          </div>
          <div className="flex flex-col w-1/2 space-y-1">
            <p className="text-gray-600">Date Hired</p>
            <p className="text-base">
              {dayjs(dateJoined).format("DD/MM/YYYY")}
            </p>
          </div>
        </div>
        <div className="flex flex-col text-base space-y-2">
          <div className="flex space-x-2">
            <EmailIcon />
            <p>{email ?? ""}</p>
          </div>
          <div className="flex space-x-2">
            <PhoneIcon />
            <p>{phoneNumber ?? ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Employee: FunctionComponent<Props> = ({ className }) => {
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [employees, setEmployees] = useState<any[]>([]);
  const [employeeCount, setEmployeeCount] = useState<any>("");

  useEffect(() => {
    sendRequest("/user/list", "get")
      .then((res: any) => {
        const _employees = res.data.data.users.map((item: any) => {
          return {
            _id: item._id,
            name: item.firstname || "",
            lastname: item.lastname || "",
            position: item.position || "",
            status: item.status || EmployeeStatus.INACTIVE,
            dateJoined: new Date(item.createdAt || ""),
            department: item.department || "",
            email: item.email || "",
            phoneNumber: item.phone || "",
          };
        });
        setEmployeeCount(res.data.data.total);
        setEmployees(_employees);
      })
      .catch((err: any) => console.log(err));
  }, [refreshKey]);

  const refreshUserList = () => setRefreshKey(refreshKey + 1);
  return (
    <div className={cn(className, "flex flex-col w-full")}>
      <div className="header flex justify-between align-middle items-center w-full">
        <h1 className="text-3xl font-bold">{employeeCount} Employees</h1>
        <div className="flex space-x-12 items-center">
          <p>0 selected</p>
          <IconButton>
            <MoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <Button
            onClick={() => {
              router.push("/AddEmployee");
            }}
          >
            Add employee
          </Button>
        </div>
      </div>
      <div className="body grid grid-cols-4 gap-6 mt-6">
        {employees.map((employee, idx) => {
          return (
            <EmployeeCard
              key={idx}
              _id={employee._id}
              name={employee.name}
              lastname={employee.lastname}
              position={employee.position}
              status={employee.status}
              dateJoined={employee.dateJoined}
              department={employee.department}
              email={employee.email}
              phoneNumber={employee.phoneNumber}
              refreshRequest={refreshUserList}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Employee;
