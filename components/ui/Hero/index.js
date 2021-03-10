import React from "react";

export default function Hero({ bgImage, title, content }) {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-gray-600 bg-opacity-80 px-10 md:px-40 py-12 md:py-20 space-y-5">
        <div className="text-2xl md:text-3xl text-white">{title}</div>
        <div className="text-white">{content}</div>
      </div>
    </div>
  );
}
