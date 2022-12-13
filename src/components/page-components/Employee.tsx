import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import cn from "classnames";
import { Avatar, Button, Checkbox, IconButton } from "@material-ui/core";
import { EmailIcon, MoreIcon, PhoneIcon, PrintIcon } from "../../assets/icons";
import dayjs from "dayjs";
import { Employee, EmployeeStatus } from "../../types/employee";
import { sendRequest } from "../../utils/core";

interface Props {
  className?: string;
}

const EmployeeCard: FunctionComponent<Employee> = props => {
  const {
    name,
    position,
    status,
    dateJoined,
    department,
    email,
    phoneNumber,
    _id,
    refreshRequest,
  } = props;
  const router = useRouter();
  const [dropMenu, setDropMenu] = useState<boolean>(false);
  const [updatedData, setUpdatedData] = useState<any>({});
  const handleUpdate = () => {
    sendRequest(`/user/${_id}`, "put", updatedData).then((res: any) => {
      refreshRequest && refreshRequest();
      console.log(res);
    });
  };

  return (
    <div className="rounded-lg bg-white p-3 space-y-4">
      <div className="flex items-center justify-between">
        <Checkbox />
        <div className="flex flex-row space-x-2 items-center">
          <div
            className={cn(
              "border rounded-md px-2 py-px h-7 cursor-pointer",
              status === EmployeeStatus.ACTIVE
                ? "border-status-green text-status-green"
                : "border-status-red text-status-red"
            )}
          >
            {status ?? "active"}
          </div>
          <IconButton onClick={() => setDropMenu(!dropMenu)}>
            <MoreIcon />
          </IconButton>
          <div className={cn("flex-col flex absolute bg-white border-black", dropMenu ? "" : "hidden")}>
            <a>Edit</a>
            <a>Edit</a>
            <a>Edit</a>
          </div>
        </div>
      </div>
      <div className="profile flex flex-col text-center items-center text-base">
        <Avatar
          className="w-32 h-32 text-5xl mb-4"
          alt={name ?? ""}
          src="/static/images/avatar/1.jpg"
        />
        <p className="font-bold">{name}</p>
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
            name: item.firstname || "" + " " + item.lastname || "",
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
