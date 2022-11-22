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

interface Props {
  className?: string;
  title: string;
  year: number;
}

const AddEmployee: FunctionComponent<Props> = ({ className }) => {
  const [department, setDepartment] = useState("");
  const handleChange = (event: any) => {
    setDepartment(event.target.value);
  };
  return (
    <div className={cn(className, "")}>
      <div className="w-2/4 m-auto bg-white p-10">
        <Avatar
          className="w-56 h-56 mb-10 m-auto"
        />
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={department}
        label="Department"
        onChange={handleChange}
      >
        <MenuItem value={1}>Product</MenuItem>
        <MenuItem value={2}>Developer</MenuItem>
        <MenuItem value={3}>Designer</MenuItem>
      </Select>
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
