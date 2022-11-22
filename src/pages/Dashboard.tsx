import { ChangeEvent, FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

interface Props {
  className?: string;
  title: string;
  year: number;
}

const Dashboard: FunctionComponent<Props> = ({ className }) => {
  const [filter, setFilter] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };
  return (
    <div className={cn(className, "flex flex-col w-full")}>
      <div className="header flex justify-between align-middle items-center w-full">
        <h1 className="text-3xl font-bold">32 Employees</h1>
        <div className="flex space-x-12 items-center">
          <p>0 selected</p>
          <div>
            <svg
              width="4"
              height="16"
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.00005 16C1.66672 16 1.38338 15.8833 1.15005 15.65C0.916715 15.4167 0.800049 15.1333 0.800049 14.8C0.800049 14.4667 0.916715 14.1833 1.15005 13.95C1.38338 13.7167 1.66672 13.6 2.00005 13.6C2.33338 13.6 2.61672 13.7167 2.85005 13.95C3.08338 14.1833 3.20005 14.4667 3.20005 14.8C3.20005 15.1333 3.08338 15.4167 2.85005 15.65C2.61672 15.8833 2.33338 16 2.00005 16ZM2.00005 9.2C1.66672 9.2 1.38338 9.08333 1.15005 8.85C0.916715 8.61667 0.800049 8.33333 0.800049 8C0.800049 7.66667 0.916715 7.38333 1.15005 7.15C1.38338 6.91667 1.66672 6.8 2.00005 6.8C2.33338 6.8 2.61672 6.91667 2.85005 7.15C3.08338 7.38333 3.20005 7.66667 3.20005 8C3.20005 8.33333 3.08338 8.61667 2.85005 8.85C2.61672 9.08333 2.33338 9.2 2.00005 9.2ZM2.00005 2.4C1.66672 2.4 1.38338 2.28333 1.15005 2.05C0.916715 1.81667 0.800049 1.53333 0.800049 1.2C0.800049 0.866666 0.916715 0.583333 1.15005 0.35C1.38338 0.116667 1.66672 0 2.00005 0C2.33338 0 2.61672 0.116667 2.85005 0.35C3.08338 0.583333 3.20005 0.866666 3.20005 1.2C3.20005 1.53333 3.08338 1.81667 2.85005 2.05C2.61672 2.28333 2.33338 2.4 2.00005 2.4Z"
                fill="#666666"
              />
            </svg>
          </div>
          <div>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.45 4.8V1.5H5.55V4.8H4.05V0H15.95V4.8H14.45ZM1.5 6.3H18.5H4.05H1.5ZM16.475 8.675C16.675 8.675 16.85 8.6 17 8.45C17.15 8.3 17.225 8.125 17.225 7.925C17.225 7.725 17.15 7.55 17 7.4C16.85 7.25 16.675 7.175 16.475 7.175C16.275 7.175 16.1 7.25 15.95 7.4C15.8 7.55 15.725 7.725 15.725 7.925C15.725 8.125 15.8 8.3 15.95 8.45C16.1 8.6 16.275 8.675 16.475 8.675ZM14.45 16.5V11.7H5.55V16.5H14.45ZM15.95 18H4.05V13.6H0V7.45C0 6.7 0.254167 6.07083 0.7625 5.5625C1.27083 5.05417 1.9 4.8 2.65 4.8H17.35C18.1 4.8 18.7292 5.05417 19.2375 5.5625C19.7458 6.07083 20 6.7 20 7.45V13.6H15.95V18ZM18.5 12.1V7.45C18.5 7.11667 18.3917 6.84167 18.175 6.625C17.9583 6.40833 17.6833 6.3 17.35 6.3H2.65C2.31667 6.3 2.04167 6.40833 1.825 6.625C1.60833 6.84167 1.5 7.11667 1.5 7.45V12.1H4.05V10.2H15.95V12.1H18.5Z"
                fill="#666666"
              />
            </svg>
          </div>
          <Button>Add employee</Button>
        </div>
      </div>
      <div className="body grid grid-cols-4 gap-6 mt-6">
        <div className="per-person rounded-lg bg-white p-3">
          <div className="head flex items-center justify-between">
            <Checkbox />
            <div className="mr-2 flex items-center space-x-2">
              <div className="border-2 float-right rounded-xl border-lime-400 px-2 py-px">
                Active
              </div>
              <svg
                width="16"
                height="4"
                viewBox="0 0 16 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1.99995C16 2.33328 15.8833 2.61662 15.65 2.84995C15.4167 3.08329 15.1333 3.19995 14.8 3.19995C14.4667 3.19995 14.1833 3.08329 13.95 2.84995C13.7167 2.61662 13.6 2.33328 13.6 1.99995C13.6 1.66662 13.7167 1.38328 13.95 1.14995C14.1833 0.916618 14.4667 0.799952 14.8 0.799952C15.1333 0.799952 15.4167 0.916618 15.65 1.14995C15.8833 1.38328 16 1.66662 16 1.99995ZM9.2 1.99995C9.2 2.33328 9.08333 2.61662 8.85 2.84995C8.61667 3.08329 8.33333 3.19995 8 3.19995C7.66667 3.19995 7.38333 3.08329 7.15 2.84995C6.91667 2.61662 6.8 2.33328 6.8 1.99995C6.8 1.66662 6.91667 1.38328 7.15 1.14995C7.38333 0.916618 7.66667 0.799952 8 0.799952C8.33333 0.799952 8.61667 0.916618 8.85 1.14995C9.08333 1.38328 9.2 1.66662 9.2 1.99995ZM2.4 1.99995C2.4 2.33328 2.28333 2.61662 2.05 2.84995C1.81667 3.08329 1.53333 3.19995 1.2 3.19995C0.866666 3.19995 0.583333 3.08329 0.35 2.84995C0.116667 2.61662 0 2.33328 0 1.99995C0 1.66662 0.116667 1.38328 0.35 1.14995C0.583333 0.916618 0.866666 0.799952 1.2 0.799952C1.53333 0.799952 1.81667 0.916618 2.05 1.14995C2.28333 1.38328 2.4 1.66662 2.4 1.99995Z"
                  fill="#666666"
                />
              </svg>
            </div>
          </div>
          <div className="profile flex flex-col text-center items-center">
            <Avatar
              className="w-32 h-32 text-5xl mb-4"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <h2>Renchindorj</h2>
            <p>Web developer</p>
          </div>
          <div className="text bg-sky-50 rounded">
            <div className="flex p-4 flex-wrap justify-between">
              <p className="w-1/2 opacity-75 text-xs">Department</p>
              <p className="w-1/2 opacity-75 text-xs text-right">Date Hired</p>
              <p className="w-1/2 ">Development team</p>
              <p className="w-1/2 text-right">2022/09/01</p>
              <div className="mt-2  w-full">
                <p className="break-all">18b1num0000@stud.num.edu.mn</p>
                <p>88015708</p>
              </div>
            </div>
          </div>
        </div>
        <div className="per-person rounded-lg bg-white p-3">
          <div className="head flex items-center justify-between">
            <Checkbox className="" />
            <div className="mr-2 flex items-center space-x-2">
              <div className="border-2 float-right rounded-xl border-lime-400 px-2 py-px">
                Active
              </div>
              <svg
                width="16"
                height="4"
                viewBox="0 0 16 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1.99995C16 2.33328 15.8833 2.61662 15.65 2.84995C15.4167 3.08329 15.1333 3.19995 14.8 3.19995C14.4667 3.19995 14.1833 3.08329 13.95 2.84995C13.7167 2.61662 13.6 2.33328 13.6 1.99995C13.6 1.66662 13.7167 1.38328 13.95 1.14995C14.1833 0.916618 14.4667 0.799952 14.8 0.799952C15.1333 0.799952 15.4167 0.916618 15.65 1.14995C15.8833 1.38328 16 1.66662 16 1.99995ZM9.2 1.99995C9.2 2.33328 9.08333 2.61662 8.85 2.84995C8.61667 3.08329 8.33333 3.19995 8 3.19995C7.66667 3.19995 7.38333 3.08329 7.15 2.84995C6.91667 2.61662 6.8 2.33328 6.8 1.99995C6.8 1.66662 6.91667 1.38328 7.15 1.14995C7.38333 0.916618 7.66667 0.799952 8 0.799952C8.33333 0.799952 8.61667 0.916618 8.85 1.14995C9.08333 1.38328 9.2 1.66662 9.2 1.99995ZM2.4 1.99995C2.4 2.33328 2.28333 2.61662 2.05 2.84995C1.81667 3.08329 1.53333 3.19995 1.2 3.19995C0.866666 3.19995 0.583333 3.08329 0.35 2.84995C0.116667 2.61662 0 2.33328 0 1.99995C0 1.66662 0.116667 1.38328 0.35 1.14995C0.583333 0.916618 0.866666 0.799952 1.2 0.799952C1.53333 0.799952 1.81667 0.916618 2.05 1.14995C2.28333 1.38328 2.4 1.66662 2.4 1.99995Z"
                  fill="#666666"
                />
              </svg>
            </div>
          </div>
          <div className="profile flex flex-col text-center items-center">
            <Avatar
              className="w-32 h-32 text-5xl mb-4"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <h2>Renchindorj</h2>
            <p>Web developer</p>
          </div>
          <div className="text bg-sky-50 rounded">
            <div className="flex p-4 flex-wrap justify-between">
              <p className="w-1/2 opacity-75 text-xs">Department</p>
              <p className="w-1/2 opacity-75 text-xs text-right">Date Hired</p>
              <p className="w-1/2 ">Development team</p>
              <p className="w-1/2 text-right">2022/09/01</p>
              <div className="mt-2  w-full">
                <p className="break-all">18b1num0000@stud.num.edu.mn</p>
                <p>88015708</p>
              </div>
            </div>
          </div>
        </div>
        <div className="per-person rounded-lg bg-white p-3">
          <div className="head flex items-center justify-between">
            <Checkbox className="" />
            <div className="mr-2 flex items-center space-x-2">
              <div className="border-2 float-right rounded-xl border-lime-400 px-2 py-px">
                Active
              </div>
              <svg
                width="16"
                height="4"
                viewBox="0 0 16 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1.99995C16 2.33328 15.8833 2.61662 15.65 2.84995C15.4167 3.08329 15.1333 3.19995 14.8 3.19995C14.4667 3.19995 14.1833 3.08329 13.95 2.84995C13.7167 2.61662 13.6 2.33328 13.6 1.99995C13.6 1.66662 13.7167 1.38328 13.95 1.14995C14.1833 0.916618 14.4667 0.799952 14.8 0.799952C15.1333 0.799952 15.4167 0.916618 15.65 1.14995C15.8833 1.38328 16 1.66662 16 1.99995ZM9.2 1.99995C9.2 2.33328 9.08333 2.61662 8.85 2.84995C8.61667 3.08329 8.33333 3.19995 8 3.19995C7.66667 3.19995 7.38333 3.08329 7.15 2.84995C6.91667 2.61662 6.8 2.33328 6.8 1.99995C6.8 1.66662 6.91667 1.38328 7.15 1.14995C7.38333 0.916618 7.66667 0.799952 8 0.799952C8.33333 0.799952 8.61667 0.916618 8.85 1.14995C9.08333 1.38328 9.2 1.66662 9.2 1.99995ZM2.4 1.99995C2.4 2.33328 2.28333 2.61662 2.05 2.84995C1.81667 3.08329 1.53333 3.19995 1.2 3.19995C0.866666 3.19995 0.583333 3.08329 0.35 2.84995C0.116667 2.61662 0 2.33328 0 1.99995C0 1.66662 0.116667 1.38328 0.35 1.14995C0.583333 0.916618 0.866666 0.799952 1.2 0.799952C1.53333 0.799952 1.81667 0.916618 2.05 1.14995C2.28333 1.38328 2.4 1.66662 2.4 1.99995Z"
                  fill="#666666"
                />
              </svg>
            </div>
          </div>
          <div className="profile flex flex-col text-center items-center">
            <Avatar
              className="w-32 h-32 text-5xl mb-4"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <h2>Renchindorj</h2>
            <p>Web developer</p>
          </div>
          <div className="text bg-sky-50 rounded">
            <div className="flex p-4 flex-wrap justify-between">
              <p className="w-1/2 opacity-75 text-xs">Department</p>
              <p className="w-1/2 opacity-75 text-xs text-right">Date Hired</p>
              <p className="w-1/2 ">Development team</p>
              <p className="w-1/2 text-right">2022/09/01</p>
              <div className="mt-2  w-full">
                <p className="break-all">18b1num0000@stud.num.edu.mn</p>
                <p>88015708</p>
              </div>
            </div>
          </div>
        </div>
        <div className="per-person rounded-lg bg-white p-3">
          <div className="head flex items-center justify-between">
            <Checkbox className="" />
            <div className="mr-2 flex items-center space-x-2">
              <div className="border-2 float-right rounded-xl border-lime-400 px-2 py-px">
                Active
              </div>
              <svg
                width="16"
                height="4"
                viewBox="0 0 16 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1.99995C16 2.33328 15.8833 2.61662 15.65 2.84995C15.4167 3.08329 15.1333 3.19995 14.8 3.19995C14.4667 3.19995 14.1833 3.08329 13.95 2.84995C13.7167 2.61662 13.6 2.33328 13.6 1.99995C13.6 1.66662 13.7167 1.38328 13.95 1.14995C14.1833 0.916618 14.4667 0.799952 14.8 0.799952C15.1333 0.799952 15.4167 0.916618 15.65 1.14995C15.8833 1.38328 16 1.66662 16 1.99995ZM9.2 1.99995C9.2 2.33328 9.08333 2.61662 8.85 2.84995C8.61667 3.08329 8.33333 3.19995 8 3.19995C7.66667 3.19995 7.38333 3.08329 7.15 2.84995C6.91667 2.61662 6.8 2.33328 6.8 1.99995C6.8 1.66662 6.91667 1.38328 7.15 1.14995C7.38333 0.916618 7.66667 0.799952 8 0.799952C8.33333 0.799952 8.61667 0.916618 8.85 1.14995C9.08333 1.38328 9.2 1.66662 9.2 1.99995ZM2.4 1.99995C2.4 2.33328 2.28333 2.61662 2.05 2.84995C1.81667 3.08329 1.53333 3.19995 1.2 3.19995C0.866666 3.19995 0.583333 3.08329 0.35 2.84995C0.116667 2.61662 0 2.33328 0 1.99995C0 1.66662 0.116667 1.38328 0.35 1.14995C0.583333 0.916618 0.866666 0.799952 1.2 0.799952C1.53333 0.799952 1.81667 0.916618 2.05 1.14995C2.28333 1.38328 2.4 1.66662 2.4 1.99995Z"
                  fill="#666666"
                />
              </svg>
            </div>
          </div>
          <div className="profile flex flex-col text-center items-center">
            <Avatar
              className="w-32 h-32 text-5xl mb-4"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <h2>Renchindorj</h2>
            <p>Web developer</p>
          </div>
          <div className="text bg-sky-50 rounded">
            <div className="flex p-4 flex-wrap justify-between">
              <p className="w-1/2 opacity-75 text-xs">Department</p>
              <p className="w-1/2 opacity-75 text-xs text-right">Date Hired</p>
              <p className="w-1/2 ">Development team</p>
              <p className="w-1/2 text-right">2022/09/01</p>
              <div className="mt-2  w-full">
                <p className="break-all">18b1num0000@stud.num.edu.mn</p>
                <p>88015708</p>
              </div>
            </div>
          </div>
        </div>
        <div className="per-person rounded-lg bg-white p-3">
          <div className="head flex items-center justify-between">
            <Checkbox className="" />
            <div className="mr-2 flex items-center space-x-2">
              <div className="border-2 float-right rounded-xl border-lime-400 px-2 py-px">
                Active
              </div>
              <svg
                width="16"
                height="4"
                viewBox="0 0 16 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1.99995C16 2.33328 15.8833 2.61662 15.65 2.84995C15.4167 3.08329 15.1333 3.19995 14.8 3.19995C14.4667 3.19995 14.1833 3.08329 13.95 2.84995C13.7167 2.61662 13.6 2.33328 13.6 1.99995C13.6 1.66662 13.7167 1.38328 13.95 1.14995C14.1833 0.916618 14.4667 0.799952 14.8 0.799952C15.1333 0.799952 15.4167 0.916618 15.65 1.14995C15.8833 1.38328 16 1.66662 16 1.99995ZM9.2 1.99995C9.2 2.33328 9.08333 2.61662 8.85 2.84995C8.61667 3.08329 8.33333 3.19995 8 3.19995C7.66667 3.19995 7.38333 3.08329 7.15 2.84995C6.91667 2.61662 6.8 2.33328 6.8 1.99995C6.8 1.66662 6.91667 1.38328 7.15 1.14995C7.38333 0.916618 7.66667 0.799952 8 0.799952C8.33333 0.799952 8.61667 0.916618 8.85 1.14995C9.08333 1.38328 9.2 1.66662 9.2 1.99995ZM2.4 1.99995C2.4 2.33328 2.28333 2.61662 2.05 2.84995C1.81667 3.08329 1.53333 3.19995 1.2 3.19995C0.866666 3.19995 0.583333 3.08329 0.35 2.84995C0.116667 2.61662 0 2.33328 0 1.99995C0 1.66662 0.116667 1.38328 0.35 1.14995C0.583333 0.916618 0.866666 0.799952 1.2 0.799952C1.53333 0.799952 1.81667 0.916618 2.05 1.14995C2.28333 1.38328 2.4 1.66662 2.4 1.99995Z"
                  fill="#666666"
                />
              </svg>
            </div>
          </div>
          <div className="profile flex flex-col text-center items-center">
            <Avatar
              className="w-32 h-32 text-5xl mb-4"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <h2>Renchindorj</h2>
            <p>Web developer</p>
          </div>
          <div className="text bg-sky-50 rounded">
            <div className="flex p-4 flex-wrap justify-between">
              <p className="w-1/2 opacity-75 text-xs">Department</p>
              <p className="w-1/2 opacity-75 text-xs text-right">Date Hired</p>
              <p className="w-1/2 ">Development team</p>
              <p className="w-1/2 text-right">2022/09/01</p>
              <div className="mt-2  w-full">
                <p className="break-all">18b1num0000@stud.num.edu.mn</p>
                <p>88015708</p>
              </div>
            </div>
          </div>
        </div>
        <div className="per-person rounded-lg bg-white p-3">
          <div className="head flex items-center justify-between">
            <Checkbox className="" />
            <div className="mr-2 flex items-center space-x-2">
              <div className="border-2 float-right rounded-xl border-lime-400 px-2 py-px">
                Active
              </div>
              <svg
                width="16"
                height="4"
                viewBox="0 0 16 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1.99995C16 2.33328 15.8833 2.61662 15.65 2.84995C15.4167 3.08329 15.1333 3.19995 14.8 3.19995C14.4667 3.19995 14.1833 3.08329 13.95 2.84995C13.7167 2.61662 13.6 2.33328 13.6 1.99995C13.6 1.66662 13.7167 1.38328 13.95 1.14995C14.1833 0.916618 14.4667 0.799952 14.8 0.799952C15.1333 0.799952 15.4167 0.916618 15.65 1.14995C15.8833 1.38328 16 1.66662 16 1.99995ZM9.2 1.99995C9.2 2.33328 9.08333 2.61662 8.85 2.84995C8.61667 3.08329 8.33333 3.19995 8 3.19995C7.66667 3.19995 7.38333 3.08329 7.15 2.84995C6.91667 2.61662 6.8 2.33328 6.8 1.99995C6.8 1.66662 6.91667 1.38328 7.15 1.14995C7.38333 0.916618 7.66667 0.799952 8 0.799952C8.33333 0.799952 8.61667 0.916618 8.85 1.14995C9.08333 1.38328 9.2 1.66662 9.2 1.99995ZM2.4 1.99995C2.4 2.33328 2.28333 2.61662 2.05 2.84995C1.81667 3.08329 1.53333 3.19995 1.2 3.19995C0.866666 3.19995 0.583333 3.08329 0.35 2.84995C0.116667 2.61662 0 2.33328 0 1.99995C0 1.66662 0.116667 1.38328 0.35 1.14995C0.583333 0.916618 0.866666 0.799952 1.2 0.799952C1.53333 0.799952 1.81667 0.916618 2.05 1.14995C2.28333 1.38328 2.4 1.66662 2.4 1.99995Z"
                  fill="#666666"
                />
              </svg>
            </div>
          </div>
          <div className="profile flex flex-col text-center items-center">
            <Avatar
              className="w-32 h-32 text-5xl mb-4"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <h2>Renchindorj</h2>
            <p>Web developer</p>
          </div>
          <div className="text bg-sky-50 rounded">
            <div className="flex p-4 flex-wrap justify-between">
              <p className="w-1/2 opacity-75 text-xs">Department</p>
              <p className="w-1/2 opacity-75 text-xs text-right">Date Hired</p>
              <p className="w-1/2 ">Development team</p>
              <p className="w-1/2 text-right">2022/09/01</p>
              <div className="mt-2  w-full">
                <p className="break-all">18b1num0000@stud.num.edu.mn</p>
                <p>88015708</p>
              </div>
            </div>
          </div>
        </div>
        <div className="per-person rounded-lg bg-white p-3">
          <div className="head flex items-center justify-between">
            <Checkbox className="" />
            <div className="mr-2 flex items-center space-x-2">
              <div className="border-2 float-right rounded-xl border-lime-400 px-2 py-px">
                Active
              </div>
              <svg
                width="16"
                height="4"
                viewBox="0 0 16 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1.99995C16 2.33328 15.8833 2.61662 15.65 2.84995C15.4167 3.08329 15.1333 3.19995 14.8 3.19995C14.4667 3.19995 14.1833 3.08329 13.95 2.84995C13.7167 2.61662 13.6 2.33328 13.6 1.99995C13.6 1.66662 13.7167 1.38328 13.95 1.14995C14.1833 0.916618 14.4667 0.799952 14.8 0.799952C15.1333 0.799952 15.4167 0.916618 15.65 1.14995C15.8833 1.38328 16 1.66662 16 1.99995ZM9.2 1.99995C9.2 2.33328 9.08333 2.61662 8.85 2.84995C8.61667 3.08329 8.33333 3.19995 8 3.19995C7.66667 3.19995 7.38333 3.08329 7.15 2.84995C6.91667 2.61662 6.8 2.33328 6.8 1.99995C6.8 1.66662 6.91667 1.38328 7.15 1.14995C7.38333 0.916618 7.66667 0.799952 8 0.799952C8.33333 0.799952 8.61667 0.916618 8.85 1.14995C9.08333 1.38328 9.2 1.66662 9.2 1.99995ZM2.4 1.99995C2.4 2.33328 2.28333 2.61662 2.05 2.84995C1.81667 3.08329 1.53333 3.19995 1.2 3.19995C0.866666 3.19995 0.583333 3.08329 0.35 2.84995C0.116667 2.61662 0 2.33328 0 1.99995C0 1.66662 0.116667 1.38328 0.35 1.14995C0.583333 0.916618 0.866666 0.799952 1.2 0.799952C1.53333 0.799952 1.81667 0.916618 2.05 1.14995C2.28333 1.38328 2.4 1.66662 2.4 1.99995Z"
                  fill="#666666"
                />
              </svg>
            </div>
          </div>
          <div className="profile flex flex-col text-center items-center">
            <Avatar
              className="w-32 h-32 text-5xl mb-4"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <h2>Renchindorj</h2>
            <p>Web developer</p>
          </div>
          <div className="text bg-sky-50 rounded">
            <div className="flex p-4 flex-wrap justify-between">
              <p className="w-1/2 opacity-75 text-xs">Department</p>
              <p className="w-1/2 opacity-75 text-xs text-right">Date Hired</p>
              <p className="w-1/2 ">Development team</p>
              <p className="w-1/2 text-right">2022/09/01</p>
              <div className="mt-2  w-full">
                <p className="break-all">18b1num0000@stud.num.edu.mn</p>
                <p>88015708</p>
              </div>
            </div>
          </div>
        </div>
        <div className="per-person rounded-lg bg-white p-3">
          <div className="head flex items-center justify-between">
            <Checkbox className="" />
            <div className="mr-2 flex items-center space-x-2">
              <div className="border-2 float-right rounded-xl border-lime-400 px-2 py-px">
                Active
              </div>
              <svg
                width="16"
                height="4"
                viewBox="0 0 16 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1.99995C16 2.33328 15.8833 2.61662 15.65 2.84995C15.4167 3.08329 15.1333 3.19995 14.8 3.19995C14.4667 3.19995 14.1833 3.08329 13.95 2.84995C13.7167 2.61662 13.6 2.33328 13.6 1.99995C13.6 1.66662 13.7167 1.38328 13.95 1.14995C14.1833 0.916618 14.4667 0.799952 14.8 0.799952C15.1333 0.799952 15.4167 0.916618 15.65 1.14995C15.8833 1.38328 16 1.66662 16 1.99995ZM9.2 1.99995C9.2 2.33328 9.08333 2.61662 8.85 2.84995C8.61667 3.08329 8.33333 3.19995 8 3.19995C7.66667 3.19995 7.38333 3.08329 7.15 2.84995C6.91667 2.61662 6.8 2.33328 6.8 1.99995C6.8 1.66662 6.91667 1.38328 7.15 1.14995C7.38333 0.916618 7.66667 0.799952 8 0.799952C8.33333 0.799952 8.61667 0.916618 8.85 1.14995C9.08333 1.38328 9.2 1.66662 9.2 1.99995ZM2.4 1.99995C2.4 2.33328 2.28333 2.61662 2.05 2.84995C1.81667 3.08329 1.53333 3.19995 1.2 3.19995C0.866666 3.19995 0.583333 3.08329 0.35 2.84995C0.116667 2.61662 0 2.33328 0 1.99995C0 1.66662 0.116667 1.38328 0.35 1.14995C0.583333 0.916618 0.866666 0.799952 1.2 0.799952C1.53333 0.799952 1.81667 0.916618 2.05 1.14995C2.28333 1.38328 2.4 1.66662 2.4 1.99995Z"
                  fill="#666666"
                />
              </svg>
            </div>
          </div>
          <div className="profile flex flex-col text-center items-center">
            <Avatar
              className="w-32 h-32 text-5xl mb-4"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <h2>Renchindorj</h2>
            <p>Web developer</p>
          </div>
          <div className="text bg-sky-50 rounded">
            <div className="flex p-4 flex-wrap justify-between">
              <p className="w-1/2 opacity-75 text-xs">Department</p>
              <p className="w-1/2 opacity-75 text-xs text-right">Date Hired</p>
              <p className="w-1/2 ">Development team</p>
              <p className="w-1/2 text-right">2022/09/01</p>
              <div className="mt-2  w-full">
                <p className="break-all">18b1num0000@stud.num.edu.mn</p>
                <p>88015708</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
