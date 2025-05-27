import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { BsCart4 } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="d-flex justify-content-between vw-100 align-center container fixed-top mt-4">
      <div className="text-black">
        <IoReorderThreeOutline style={{ color: "black", fontSize: "2rem" }} />
      </div>
      <div className="text-black">Logo</div>
      <div className="d-flex justify-content-between align-center">
        <div>
          <HiOutlineUser style={{ color: "black", fontSize: "2rem" }} />
        </div>
        <div>
          <BsCart4 style={{ color: "black", fontSize: "2rem" }} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
