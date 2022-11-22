import { FunctionComponent } from "react";
import cn from "classnames";
import { Avatar, Button, TextField } from "@material-ui/core";

interface Props {
  className?: string;
}

const AddEmployee: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={cn(className, "")}>
      <div className="w-2/4 m-auto bg-white p-10">
        <Avatar className="w-40 h-40 mb-10 m-auto" />
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
        />
        <Button className="mt-10">Save</Button>
      </div>
    </div>
  );
};
export default AddEmployee;
