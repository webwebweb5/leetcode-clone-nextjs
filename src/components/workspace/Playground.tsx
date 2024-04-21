"use client";

import PreferenceNav from "./PreferenceNav";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";

export interface ISettings {
  fontSize: string;
  settingsModalIsOpen: boolean;
  dropdownIsOpen: boolean;
}

export default function Playground() {
  return (
    <div className="">
      <PreferenceNav />
      <CodeMirror
        value="const a = 1"
        theme={vscodeDark}
        extensions={[javascript()]}
        style={{ fontSize: 16, overflow: "auto" }}
      />
    </div>
  );
}
