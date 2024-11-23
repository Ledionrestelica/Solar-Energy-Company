"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

let tabs = [
  { id: "private", label: "Private" },
  { id: "brf", label: "BRF" },
  { id: "business", label: "Business" },
];

export default function Tabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="px-[10px] md:px-[20px] lg:px-[70px] w-full mt-[50px]">
      <div className="flex justify-between p-1 border border-[#CDD6DF] rounded-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "text-white" : "hover:text-[#314A61]/60"
            } relative rounded-full flex-1 px-3 py-3 text-lg font-medium text-[#314A61] transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-primary mix-blend-plus-lighter"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab === tabs[0].id && <Form1 />}
      {activeTab === tabs[1].id && <Form2 />}
      {activeTab === tabs[2].id && <Form3 />}
    </div>
  );
}
