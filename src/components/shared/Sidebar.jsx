import React from "react";
import { FcBullish } from "react-icons/fc";
import { Link } from "react-router-dom";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/const/navigation";

export default function Sidebar() {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-1 py-2">
        <FcBullish />
        <span className="text-neutral-100 text-lg">Openshop</span>
      </div>
      <div className="flex-1">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <div key={item.key}>
            <span>{item.icon}</span>
            <Link to={item.path}>
              <span>{item.label}</span>
            </Link>
          </div>
        ))}
      </div>
      <div>Bottom part</div>
    </div>
  );
}
