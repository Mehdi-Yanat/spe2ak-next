import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function ChatBox() {
  return (
    <div className="flex">
      <AccountCircleIcon className="text-white text-[50px] " />
      <div>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus sit
          magnam consequatur odit quas, beatae omnis ut sapiente expedita ullam,
          nemo nostrum dignissimos tempore impedit quis possimus voluptas
          dolores eius? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Ducimus sit magnam consequatur odit quas, beatae omnis ut
          sapiente expedita ullam, nemo nostrum dignissimos tempore impedit quis
          possimus voluptas dolores eius? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Ducimus sit magnam consequatur odit
          quas, beatae omnis ut sapiente expedita ullam, nemo nostrum
          dignissimos tempore impedit quis possimus voluptas dolores eius?
        </p>
        <p className="text-white">1s ago</p>
      </div>
    </div>
  );
}
