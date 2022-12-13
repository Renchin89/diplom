import { ChangeEvent, FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import SelectInput from "@material-ui/core/Select/SelectInput";
import { DepartmentTypes, EmployeeStatus } from "../../types/employee";
import { sendRequest } from "../../utils/core";

interface Props {
  className?: string;
  title: string;
  year: number;
}

const AddEmployee: FunctionComponent<Props> = ({ className }) => {
  const departmentArray = Object.values(DepartmentTypes);
  const employeeStatusArray = Object.values(EmployeeStatus);
  const [department, setDepartment] = useState<DepartmentTypes>(
    DepartmentTypes.DEVELOPER
  );
  const [status, setStatus] = useState<EmployeeStatus>(EmployeeStatus.ACTIVE);

  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  // Functions
  const handleLogin = (event: any) => {
    event.preventDefault();

    sendRequest("/auth/register", "post", {
      email: email,
      password: password,
      firstname: firstName,
      lastname: lastName,
      username: username,
    })
      .then((res: any) => {
        console.log(res);
        router.push("/Employee");
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
  return (
    <div className={cn(className, "")}>
      <div className="w-2/4 m-auto bg-white p-10 flex flex-col space-y-4">
        <Avatar className="w-56 h-56 mb-10 m-auto" />
        {/* <Select
          defaultValue={department}
          value={department}
          label="Department"
          onChange={(e) => {
            setDepartment(e.target.value as DepartmentTypes);
          }}
        >
          {departmentArray.map((dep, idx) => (
            <MenuItem key={idx} value={idx}>
              {dep}
            </MenuItem>
          ))}
        </Select> */}
        <TextField
          label="Firstname"
          variant="outlined"
          value={firstName}
          onChange={(e: any) => setFirstName(e.target.value)}
        />
        <TextField
          label="Lastname"
          variant="outlined"
          value={lastName}
          onChange={(e: any) => setLastName(e.target.value)}
        />
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e: any) => setUserName(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        {/* <Select
          defaultValue={status}
          value={status}
          label="Active or Not active"
          onChange={(e) => {
            setStatus(e.target.value as EmployeeStatus);
          }}
        >
          {employeeStatusArray.map((emp, idx) => (
            <MenuItem key={idx} value={idx}>
              {emp}
            </MenuItem>
          ))}
        </Select> */}
        <Button className="mt-10" onClick={handleLogin}>Add Employee</Button>
      </div>
    </div>
  );
};
export default AddEmployee;
