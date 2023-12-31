"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

const Library = () => {
  const [showMore, setShowMore] = useState(false);

  const onClickAdd = () => {
    // Handle upload
  };

  const onClickShow = () => {};

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4 pr-3">
        <div className="inline-flex cursor-pointer items-center gap-x-2 text-neutral-400 hover:text-white transition">
          <TbPlaylist size={26} />
          <p className=" font-medium text-md">Your Library</p>
        </div>
        <div className="inline-flex items-center gap-x-2">
          <div
            className=" p-1.5 rounded-full bg-neutral-900 flex items-center justify-center cursor-pointer 
          text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/60 transition"
            onClick={onClickAdd}
          >
            <AiOutlinePlus size={21} />
          </div>
          <div
            className="p-1.5 rounded-full bg-neutral-900 flex items-center justify-center cursor-pointer 
          text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/60 transition"
            onClick={onClickShow}
          >
            <AiOutlineArrowRight size={21} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of songs</div>
    </div>
  );
};

export default Library;
