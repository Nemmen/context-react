import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="flex justify-center items-center bg-white sticky bottom-0 h-[70px] border-t">
      <div className=" flex gap-[450px] ">
        <div className="">
          {page > 1 && (
            <button className="mr-10 border border-black shadow shadow-black active:shadow-none py-1 px-2 hover:cursor-pointer" onClick={() => handlePageChange(page - 1)}>Prev</button>
          )}
          {page < totalPages && (
            <button className="border  shadow shadow-black active:shadow-none  py-1 px-2  border-black hover:cursor-pointer" onClick={() => handlePageChange(page + 1)}>Next</button>
          )}
        </div>
        <div>
          {page} of {totalPages}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
