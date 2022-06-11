import * as React from "react";
import { useOvermind } from "../../overmind";

import "./header.css";
import { AppMode } from "../../overmind/state";
interface HeaderProps {
  socket: SocketIOClient.Socket;
}

const Header = (props: HeaderProps) => {
  let { state: { mode, board } } = useOvermind();

  return (
    <header className="app-header">
      <h1> Retro Board</h1>
    </header>
  );
}

export default Header;
