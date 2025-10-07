import { GlobalOutlined, MenuOutlined } from "@ant-design/icons";
import React from "react";

export const Header = ({ title, onMenuClick, onLanguageClick }) => (
  <div className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 px-4 py-3 flex justify-between items-center">
    <div className="text-xl font-bold text-gray-900">{title}</div>
    <div className="flex items-center gap-3">
      <button onClick={onLanguageClick} className="p-2 rounded-full hover:bg-gray-100">
        <GlobalOutlined className="text-lg" />
      </button>
      <button onClick={onMenuClick} className="p-2 rounded-full hover:bg-gray-100">
        <MenuOutlined className="text-lg" />
      </button>
    </div>
  </div>
);
