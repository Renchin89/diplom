import { FunctionComponent, useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import cn from "classnames";
import { Button, TextField } from "@material-ui/core";
import { sendRequest } from "../../utils/core";

interface Props {
  className?: string;
}

const MainPage: FunctionComponent<Props> = ({ className }) => {
  const [name, setName] = useState<string>("");
  const [key, setKey] = useState<string>("key");
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [risk, setRisk] = useState<any[]>([]);
  const refreshUserList = () => setRefreshKey(refreshKey + 1);

  useEffect(() => {
    sendRequest("/risk/list", "get")
      .then((res: any) => {
        setRisk(res.data.data.risks);
        console.log(risk);
      })
      .catch((err: any) => console.log(err));
  }, [refreshKey]);

  const handleUpdate = () => {
    sendRequest(`/risk`, "post", {
      name: name,
      key: key,
    })
      .then((res: any) => {
        refreshUserList && refreshUserList();
        console.log(res);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  return (
    <div className={cn(className, "w-3/4 m-auto bg-white p-10")}>
      <h1 className="text-xl font-bold">Эрсдэл</h1>
      <div className="w-full">
        {risk.map((name, idx) => {
          const id = name._id;
          const handleDelete = () => {
            sendRequest(`/risk/${id}`, "delete").then(res => {
              console.log(res);
              refreshUserList && refreshUserList();
            });
          };
          return (
            <div className="flex">
              <div
                className="w-3/5 border-2 border-grey rounded-md p-3 mt-3 text-xl"
                key={idx}
              >
                {name.name}
              </div>
              <Button className="ml-2 mt-3 h-14" onClick={handleDelete}>
                Устгах
              </Button>
              <Button className="ml-2 mt-3 h-14">Засах</Button>
            </div>
          );
        })}
      </div>
      <div className="">
        <h1 className="text-xl font-bold mt-10">Эрсдэл нэмэх</h1>
        <TextField
          multiline
          variant="outlined"
          className="mt-5 w-3/5"
          onChange={e => setName(e.target.value)}
        />
        <Button onClick={handleUpdate} className="ml-2 mt-5 h-14">
          Нэмэх
        </Button>
      </div>
    </div>
  );
};

export default MainPage;
