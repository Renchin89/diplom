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
  const [filter, setFilter] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };
  return <div className={cn(className, "")}>
    aaasda
  </div>;
};
export default AddEmployee;
