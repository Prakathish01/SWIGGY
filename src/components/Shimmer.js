import { SideSpaceLeft, SideSpaceRight } from "./SideSpace.js";
export const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-evenly pt-[75px] ml-[160px] mr-[160px]">
      <SideSpaceLeft />
      <SideSpaceRight />
      {Array.from({ length: 16 }).map((_, index) => (
        <div
          key={index}
          className="m-2.5 w-[150px] h-[300px] bg-[#bfbdbd] animate-pulse rounded"
        ></div>
      ))}
    </div>
  );
};
