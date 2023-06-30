import { Button, Input } from "@mui/material";
import React from "react";

export default function ChatInput() {
  return (
    <form className="flex">
      <input
        className="text-white border bg-black rounded-[30px] p-2 w-full "
        placeholder="Your Message"
        type="text"
      />
      <Button className="text-white">Send</Button>
    </form>
  );
}
