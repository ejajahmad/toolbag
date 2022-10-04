import React from 'react'
import uuid from 'react-uuid';

export default function DocToolbar({ notesCategories, setNotesCategories, text }) {



  return (
    <div className=" bg-slate-50 bg-opacity-10 backdrop-blur-lg absolute left-2/4 right-2/4 -translate-x-1/2 bottom-5 mx-auto  w-[97%] h-10 flex items-center justify-center gap-2">
      {notesCategories.map((category) => (
        <button
          key={uuid()}
          className={` bg-[${category.color}] hover:bg-[${category.color}] hover:underline outline-none border-none px-2 py-1 text-xs menuBtn `}
          //   style={{
          //     backgroundColor: `${category.color}`,
          //   }}
        >
          {category.name}
          <div className={` border  w-80 h-20 bg-white absolute  bottom-10 left-2/4 right-2/4 -translate-x-1/2 shadow-md  menuBox`}></div>
        </button>
      ))}
      <button className={`  outline-none border-none  hover:outline-1  hover:outline-white  px-2 py-1 text-xs menuBtn `}>
        +
      </button>
      <p className={`outline-none border-none px-2 py-1 text-xs absolute right-0 top-2/4 bottom-2/4 -translate-y-1/2 mr-2 h-max  `}>
        Characters: {text.length} - Words: {text.split(" ").length}
      </p>
    </div>
  );
}
