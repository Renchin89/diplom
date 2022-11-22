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
  
  return (
    <div className={cn(className, "")}>
      <div className="w-2/4 m-auto bg-white p-10">
        <Avatar className="w-56 h-56 mb-10 m-auto" />
        <Select
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
        </Select>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Phone" variant="outlined" />
        <TextField id="outlined-basic" label="Phone" variant="outlined" />
        <Select
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
        </Select>
        <Button className="mt-10">Add Employee</Button>
      </div>
    </div>
  );
};
export default AddEmployee;
