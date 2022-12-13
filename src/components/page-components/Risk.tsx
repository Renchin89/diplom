import { FunctionComponent, useState } from "react";
import router, { useRouter } from "next/router";
import cn from "classnames";
import { Button, TextField } from "@material-ui/core";
import { sendRequest } from "../../utils/core";

interface Props {
  className?: string;
}

const MainPage: FunctionComponent<Props> = ({ className }) => {
  const [arr, setArr] = useState([
    {
      risk: "",
    },
  ]);
  const [name, setName] = useState<string>("");
  const [key, setKey] = useState<string>("");
  const handleInputChange = (e: any, index: number) => {
    const { value } = e.target;
    const list = [...arr];
    list[index].risk = value;
    setArr(list);
  };
  const handleSave = (event: any) => {
    event.preventDefault();

    sendRequest("/review", "post", {
      name: name,
      key: key,
    })
      .then((res: any) => {
        console.log(res);
        router.push("/");
      })
      .catch((error: any) => {
        console.error(error);
      });
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
      <h1 className="text-xl font-bold">Эрсдэл</h1>
      <div className="">
        {arr.map((x, i) => {
          return (
            <div key={i} className="">
              <TextField
                multiline
                variant="outlined"
                className="mt-10 w-3/5"
                name="risk"
                value={x.risk}
                onChange={e => handleInputChange(e, i)}
              />
              {arr.length !== 1 && (
                <Button
                  className="mt-10 ml-4 h-14"
                  onClick={() => handleRemoveClick(i)}
                >
                  Устгах
                </Button>
              )}
              {arr.length - 1 === i && (
                <Button className="ml-2 mt-10 h-14" onClick={handleAddClick}>
                  Нэмэх
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
