"use client";

import React from "react";

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-white">
      
      {/* 1. Top Left: Soft Pink Blob */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-[#FFB6D9]/30 rounded-full mix-blend-multiply blur-[128px] animate-blob opacity-70" />

      {/* 2. Top Right: Soft Purple Blob (Delayed Animation) */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#D4A5E8]/30 rounded-full mix-blend-multiply blur-[128px] animate-blob animation-delay-2000 opacity-70" />

      {/* 3. Bottom Center: Soft Blue Blob (Delayed Animation) */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-[#A8D8FF]/30 rounded-full mix-blend-multiply blur-[128px] animate-blob animation-delay-4000 opacity-70" />

    </div>
  );
}