import React, { useState } from "react";
import UserBox from "./userBox";
import { IconButton } from "@mui/material";
import CallEndIcon from "@mui/icons-material/CallEnd";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import ChatIcon from "@mui/icons-material/Chat";
import ChatBox from "./chat/chat";
import ChatInput from "./chat/chatInput";

export default function MainContent() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="w-[100%] h-[100%]">
      <h1 className="text-white pl-[50px] p-10 text-5xl	">Talk</h1>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <UserBox />
      </div>
      <div className=" mt-5 flex gap-5 items-center justify-center">
        <IconButton onClick={() => setOpenChat((value) => !value)}>
          <ChatIcon className="text-white" />
        </IconButton>
        <IconButton>
          <MicOffIcon className="text-white" />
        </IconButton>
        <IconButton>
          <VideocamOffIcon className="text-white" />
        </IconButton>
        <IconButton className="bg-red-500">
          <CallEndIcon className="text-white" />
        </IconButton>
      </div>
      {openChat ? (
        <div className="flex m-5  rounded-[50px] flex-col gap-5 border p-5">
          <div className="overflow-y-scroll max-h-[500px] flex flex-col gap-2">
            <ChatBox />
          </div>
          <ChatInput />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
