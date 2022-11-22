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
import { DepartmentTypes } from "../types/employee";

interface Props {
  className?: string;
  title: string;
  year: number;
}

const AddEmployee: FunctionComponent<Props> = ({ className }) => {
  const deps = Object.values(DepartmentTypes);
  const [department, setDepartment] = useState<DepartmentTypes>(
    DepartmentTypes.DEVELOPER
  );
  const handleChange = (event: any) => {
    setDepartment(event.target.value);
  };
  return (
    <div className={cn(className, "")}>
      <div className="w-2/4 m-auto bg-white p-10">
        <Avatar className="w-56 h-56 mb-10 m-auto" />
        <FormControl fullWidth variant="outlined" className="flex">
          <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={department}
            label="Department"
            onChange={(e) => {
              setDepartment(e.target.value as DepartmentTypes);
            }}
          >
            {deps.map((val, idx) => (
              <MenuItem key={idx} value={idx}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Phone" variant="outlined" />
        <TextField id="outlined-basic" label="Phone" variant="outlined" />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="Actvier or Not active"
          onChange={handleChange}
        >
          <MenuItem value={1}>Active</MenuItem>
          <MenuItem value={2}>Not active</MenuItem>
          <MenuItem value={3}>Unverified</MenuItem>
        </Select>
        <Button className="mt-10">Add Employee</Button>
      </div>
    </div>
  );
};
export default AddEmployee;
