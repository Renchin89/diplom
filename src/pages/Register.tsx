import { FunctionComponent, useState } from "react";
import cn from "classnames";
import { Button, TextField } from "@material-ui/core";
import { sendRequest } from "../utils/core";
import { useRouter } from "next/router";

interface Props {
  className?: string;
}

const Register: FunctionComponent<Props> = ({ className }) => {
  // Hooks
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
        router.push("/");
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
  return (
    <div className={cn(className, "w-full")}>
      <div className="w-2/4 m-auto">
        <h1 className="text-4xl font-bold text-center">
          Хүний нөөцийн эрсдлийн менежмент гаргах систем
        </h1>

        <div className="mt-10 flex flex-col space-y-4">
          <div className="flex space-x-2">
            <a href="/Login">Нэвтрэх</a>
            <p>|</p>
            <a href="/Register">Бүртгүүлэх</a>
          </div>
          <TextField
            type="string"
            placeholder="Овог"
            value={lastName}
            onChange={(e: any) => setLastName(e.target.value)}
          />
          <TextField
            type="string"
            placeholder="Нэр"
            value={firstName}
            onChange={(e: any) => setFirstName(e.target.value)}
          />
          <TextField
            placeholder="Нэвтрэх нэр"
            value={username}
            onChange={(e: any) => setUserName(e.target.value)}
          />
          <TextField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            placeholder="Нууц үг"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} className="mt-5">
            Бүртгүүлэх
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Register;
