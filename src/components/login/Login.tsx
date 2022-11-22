import { FunctionComponent, useState } from "react";
import cn from "classnames";
import { Button, TextField } from "@material-ui/core";
import { sendRequest } from '../../utils/core';

interface Props {
  className?: string;
}

const Login: FunctionComponent<Props> = ({ className }) => {

  // Hooks
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Functions
  const handleLogin = (event: any) => {
    event.preventDefault();

    sendRequest('/auth/login', 'post', {
      email: email,
      password: email
    })
      .then((res: any) => {
        localStorage.setItem('auth-token', res.data.data);
      })
      .catch((error: any) => {
        console.log(error);
      })
  }

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
          <TextField type="email" placeholder="Email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
          <TextField type="password" placeholder="Password" value={password} onChange={(e: any) => setPassword(e.target.value)} />
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
