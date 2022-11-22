import { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import { Button, TextField } from "@material-ui/core";

interface Props {
  className?: string;
}

const MainPage: FunctionComponent<Props> = ({ className }) => {
  const [arr, setArr] = useState([
    {
      risk: "",
    },
  ]);
  const handleInputChange = (e: any, index: number) => {
    const { value } = e.target;
    const list = [...arr];
    list[index].risk = value;
    setArr(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index: any) => {
    const list = [...arr];
    list.splice(index, 1);
    setArr(list);
  };

  // handle click event of the Add button
  const handleAddClick = (index: any) => {
    setArr([...arr, { risk: "" }]);
  };
  return (
    <div className={cn(className, "w-3/4 m-auto bg-white p-10")}>
      <h1 className="text-xl">Risk Management</h1>
      <div className="">
        {arr.map((x, i) => {
          return (
            <div key={i}>
              <TextField
                className="mt-4"
                name="risk"
                value={x.risk}
                onChange={(e) => handleInputChange(e, i)}
              />
              {arr.length !== 1 && (
                <Button className="mt-2" onClick={() => handleRemoveClick(i)}>
                  Remove
                </Button>
              )}
              {arr.length - 1 === i && (
                <Button className="ml-2 mt-2" onClick={handleAddClick}>
                  Add
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
