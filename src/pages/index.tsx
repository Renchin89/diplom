import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import { Button } from "@material-ui/core";
import Employee from "./Employee";
import Login from "./Login";

interface Props {
  className?: string;
}

const HomePage: FunctionComponent<Props> = ({ className }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  if (isLoggedIn) {
    return <Employee />;
  } else {
    return <Login />;
  }
};

export default HomePage;
