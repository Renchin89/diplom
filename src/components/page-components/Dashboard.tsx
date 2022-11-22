import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@material-ui/core";
import { Employee, EmployeeStatus } from "../../types/employee";
import { EmailIcon, MoreIcon, PhoneIcon, PrintIcon } from "../../assets/icons";
import dayjs from "dayjs";

interface Props {
  className?: string;
  title: string;
  year: number;
}

const Employees = [
  {
    _id: "a1",
    name: "Renchindorj",
    position: "Developer",
    status: EmployeeStatus.ACTIVE,
    dateJoined: new Date(),
    department: "Development team",
    email: "18b1num0000@stud.num.edu.mn",
    phoneNumber: "88015708",
  },
  {
    _id: "a2",
    name: "Renchindorj0",
    position: "Developer",
    status: EmployeeStatus.ACTIVE,
    dateJoined: new Date(),
    department: "Development team",
    email: "18b1num0000@stud.num.edu.mn",
    phoneNumber: "88015708",
  },
  {
    _id: "a3",
    name: "Renchindorj2",
    position: "Developer",
    status: EmployeeStatus.INACTIVE,
    dateJoined: new Date(),
    department: "Development team",
    email: "18b1num0000@stud.num.edu.mn",
    phoneNumber: "88015708",
  },
  {
    _id: "a4",
    name: "Renchindorj3",
    position: "Developer",
    status: EmployeeStatus.INACTIVE,
    dateJoined: new Date(),
    department: "Development team",
    email: "18b1num0000@stud.num.edu.mn",
    phoneNumber: "88015708",
  },
];

const EmployeeCard: FunctionComponent<Employee> = (props) => {
  const { name, position, status, dateJoined, department, email, phoneNumber } =
    props;

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
          <IconButton>
            <MoreIcon />
          </IconButton>
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
            <p className="break-all">{email ?? ""}</p>
          </div>
          <div className="flex space-x-2">
            <PhoneIcon />
            <p className="break-all">{phoneNumber ?? ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard: FunctionComponent<Props> = ({ className }) => {
  const employeeCount = Employees.reduce((total) => {
    return total + 1;
  }, 0);

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
          <Button>Add employee</Button>
        </div>
      </div>
      <div className="body grid grid-cols-4 gap-6 mt-6">
        {Employees.map((employee, idx) => {
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
            />
          );
        })}
      </div>
    </div>
  );
};
export default Dashboard;
