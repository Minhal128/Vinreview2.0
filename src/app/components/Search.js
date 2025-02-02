'use client'
import LocationSelection from "./LocationSelection";
import { useContext } from "react";
import { SearchContext } from "../context/search";

export default function Search() {
  const { searchActive } = useContext(SearchContext);

  return (
    <div
      // className={`${
      //   searchActive
      //     ? "bg-white rounded-full py-3 xl:h-[80px]"
      //     : "bg-white rounded-full py-3 xl:pr-6 xl:h-[80px]"
      // } flex items-center justify-center xl:block w-3/4 mx-auto relative shadow-lg`}
    >
      <div className="flex items-center w-full px-6 xl:px-0">
        <LocationSelection />
      </div>
    </div>
  );
}
