import { FunctionComponent, useState } from "react";
import cn from "classnames";
import { Button, TextField } from "@material-ui/core";
import { sendRequest } from "../../utils/core";
import { useRouter } from "next/router";
interface Props {
  className?: string;
}

const Login: FunctionComponent<Props> = ({ className }) => {
  // Hooks
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  // Functions
  const handleLogin = (event: any) => {
    event.preventDefault();

    sendRequest("/auth/login", "post", {
      email: email,
      password: password,
    })
      .then((res: any) => {
        localStorage.setItem("auth-token", res.data.data);
        router.push("/");
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  return (
    <div className={cn(className, "w-full")}>
      <div className="w-2/5 m-auto">
        <h1 className="text-4xl font-bold text-center">
          HR Risk Management System
        </h1>

        <div className="mt-10 space-y-5 flex flex-col">
          <div className="flex space-x-2">
            <a href="/Login">Login</a>
            <p>|</p>
            <a href="/Register">Register</a>
          </div>
          <TextField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} className="mt-5">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
