"use client";
import { useState } from "react";

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9ca3af"
    strokeWidth="2.2"
    strokeLinecap="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const UserIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9ca3af"
    strokeWidth="1.8"
  >
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
  </svg>
);

const HamburgerIcon = () => (
  <div className="flex flex-col gap-[5px]">
    <div className="w-[18px] h-[2px] bg-gray-500 rounded-sm" />
    <div className="w-[18px] h-[2px] bg-gray-500 rounded-sm" />
    <div className="w-[18px] h-[2px] bg-gray-500 rounded-sm" />
  </div>
);

const Navbar = ({ onUpgrade, onCreateCampaign, onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-white border border-gray-200 px-5 py-3 flex items-center justify-between">
      {/* Search input */}
      <div className="flex items-center gap-2.5 border border-blue-500 rounded-[4px] px-4 py-2.5 w-[520px]">
        <input
          type="text"
          placeholder="Find influencers to collaborate with"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
        />
        <SearchIcon />
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2.5">
        {/* Upgrade button */}
        <button
          onClick={onUpgrade}
          className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-white text-sm font-semibold px-3 py-2 rounded-lg transition-colors"
        >
          <StarIcon />
          Upgrade
        </button>

        {/* Create Campaign button */}
        <button
          onClick={onCreateCampaign}
          className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <span className="text-base leading-none">+</span>
          Create Campaign
        </button>

        {/* User avatar */}
        <div className="w-[34px] h-[34px] rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
          <UserIcon />
        </div>

        {/* Hamburger */}
        <button
          onClick={onMenuClick}
          className="p-1 hover:opacity-70 transition-opacity"
        >
          <HamburgerIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
