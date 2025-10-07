import React from "react";

export const FeatureCard = ({ title, description, image, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 cursor-pointer hover:shadow-xl transition-shadow"
  >
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 bg-[#ffbe99] rounded-2xl flex items-center justify-center overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);
