import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import { Button, Paper, TextField } from "@material-ui/core";
import Card from "./Card";
interface Props {
  className?: string;
}

const MainPage: FunctionComponent<Props> = ({ className }) => {
  return (
    <div className={cn(className, "w-full p-2 flex space-x-4 h-200")}>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
    </div>
  );
};

export default MainPage;
