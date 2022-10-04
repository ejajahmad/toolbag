import React, { useState } from "react";
import uuid from "react-uuid";
import DocToolbar from "./DocToolbar";

export default function DocContainer() {
    const [text, setText] = useState("");
    const [notesCategories, setNotesCategories] = useState([
        {
            name: "Characters",
            color: "#ff7b00",
            things: {
                name: "Jack",
                notes: ["He male", "He lives on mars", "A poor young"],
            },
        },
        {
            name: "Locations",
            color: "#01a031",
            things: {
                name: "Essos",
                notes: ["He male", "He lives on mars", "A poor young"],
            },
        },
    ]);

    return (
      <div className=" fixed top-0 left-0 w-screen h-screen bg-slate-900 text-white font-mono p-5">
        <textarea
          className=" bg-slate-800  appearance-none focus-within:outline-dotted outline-2 outline-slate-600 w-full h-full p-5 text-sm"
          name="text-editor"
          id="text-editor"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <form className=" bg-white bg-opacity-5 backdrop-blur-md p-2  w-max h-max absolute top-2/4 bottom-2/4 left-2/4 right-2/4 -translate-x-1/2 -translate-y-1/2 shadow-md flex flex-col gap-2">
          <input type="text" placeholder="Entity name" className=" border-none outline-none pl-2 text-slate-900 " />
          <div className="bg-white border-none outline-none pl-2 text-slate-900 flex items-center gap-2">
            <label htmlFor="Entity color" className="text-gray-400">
              Entity color
            </label>
            <input type="color" placeholder="Entity color" className="border-none outline-none appearance-none scale-75 " />
          </div>
          <hr className="border  border-gray-500" />
          <p>Items</p>
          <div>
            <input type="text" placeholder="Item name" className=" border-none outline-none pl-2 text-slate-900 " />
          </div>
        </form>

        <DocToolbar notesCategories={notesCategories} setNotesCategories={setNotesCategories} text={text} />
      </div>
    );
}
