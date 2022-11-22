import { FunctionComponent } from "react";
import cn from "classnames";
import { Button, TextField } from "@material-ui/core";

interface Props {
  className?: string;
}

const Login: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={cn(className, "w-full")}>
      <div className="w-1/4 m-auto">
        <h1 className="text-4xl font-bold text-center">
          HR Risk Management System
        </h1>

        <div className="mt-10">
          <div className="flex space-x-2">
            <p>Login</p>
            <p>|</p>
            <p>Register</p>
          </div>
          <TextField type="email" placeholder="Email" />
          <TextField type="password" placeholder="Password" />
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
