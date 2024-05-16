import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu rounded-[5px] lg:shadow-lg lg:!bg-[#FFFFFF] lg:!w-[85%]">
      <ul>
        <li className="hover:bg-[#1E772C] hover:text-white font-medium text-lg py-3 pl-3 flex  items-center w-full rounded-[5px]">
            <Link className="my-auto" to="/financial-intermidation">Financial intermidation</Link>
        </li>
        <li className="hover:bg-[#1E772C] hover:text-white font-medium text-lg py-3 pl-3 flex  items-center w-full rounded-[5px]">
            <Link to="/collateral-warehousing-and-collateral-management">Collateral Warehousing and Collateral Management</Link>
        </li>
        <li className="hover:bg-[#1E772C] hover:text-white font-medium text-lg py-3 pl-3 flex  items-center w-full rounded-[5px]">
            <Link to="/cluster-marketing-and-brokerage-services">Cluster Marketing & Brokerage Services</Link>
        </li>
        <li className="hover:bg-[#1E772C] hover:text-white font-medium text-lg py-3 pl-3 flex  items-center w-full rounded-[5px]">
            <Link to="/infrastructure-as-a-service">Infrastructure-As-A-Service</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;