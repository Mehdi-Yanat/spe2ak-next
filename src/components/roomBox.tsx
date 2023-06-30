import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import { Room } from "@/interfaces/interfaces";

export default function RoomBox({ data }: { data: Room }) {
  return (
    <div className="flex flex-col  w-[300px] text-white rounded-[30px] p-4  border">
      <div className="flex justify-between">
        <h2 className="">{data.roomName}</h2>
        <p>5/6</p>
      </div>
      <div className="flex items-center justify-center  ">
        <AccountCircleIcon fontSize="large" />
        <AccountCircleIcon fontSize="large" className="text-[60px] " />
        <AccountCircleIcon fontSize="large" className="text-[60px]  " />
        <div className="flex items-center justify-center border   rounded-[50px] w-[50px] h-[50px]">
          +55
        </div>
      </div>
      <Button className="border text-white">Join</Button>
    </div>
  );
}
