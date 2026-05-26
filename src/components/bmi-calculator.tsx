"use client";

import React, { useState, useMemo } from "react";
import { cn } from "@/utils";

type Category = {
  label: string;
  min: number;
  max: number;
  color: string;
};

const categories: Category[] = [
  { label: "Sangat Kurang", min: 0, max: 17, color: "#1d4ed8" }, // Blue 700
  { label: "Kurang", min: 17, max: 18.5, color: "#2563eb" }, // Blue 600
  { label: "Normal", min: 18.5, max: 25, color: "#059669" }, // Emerald 600
  { label: "Berlebih", min: 25, max: 27, color: "#b45309" }, // Amber 700
  { label: "Obesitas I", min: 27, max: 30, color: "#dc2626" }, // Red 600
  { label: "Obesitas II", min: 30, max: 100, color: "#991b1b" }, // Red 800
];

export function BMICalculator() {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(170);

  const analysis = useMemo(() => {
    const h = height / 100;
    const bmiValue = h > 0 ? weight / (h * h) : 0;
    const matched = categories.find(c => bmiValue >= c.min && bmiValue < c.max) || categories[categories.length - 1];
    return { value: bmiValue, ...matched };
  }, [weight, height]);

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32 animate-in fade-in duration-1000">

      {/* Sisi Input */}
      <div className="w-full max-w-sm space-y-16">
        <h1 className="text-5xl font-black text-slate-950 tracking-tighter">
          Cek <span style={{ color: analysis.color }} className="transition-colors duration-500">BMI.</span>
        </h1>

        <div className="space-y-14">
          {[
            { id: "height", label: "Tinggi Badan", val: height, set: setHeight, min: 100, max: 220, unit: "cm" },
            { id: "weight", label: "Berat Badan", val: weight, set: setWeight, min: 30, max: 200, unit: "kg" },
          ].map((item) => (
            <div key={item.id} className="space-y-5">
              <div className="flex justify-between items-end px-1">
                <label
                  htmlFor={item.id}
                  className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 cursor-pointer"
                >
                  {item.label}
                </label>
                <div className="flex items-baseline gap-1">
                  <input
                    type="number"
                    value={item.val || ""}
                    onChange={(e) => {
                      const v = e.target.value === "" ? 0 : parseInt(e.target.value);
                      item.set(v > item.max ? item.max : v);
                    }}
                    onBlur={() => {
                      if (item.val < item.min) item.set(item.min);
                    }}
                    className="w-24 text-right text-5xl font-black text-slate-950 tracking-tighter bg-transparent border-none outline-none focus:ring-0 p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none cursor-text"
                  />
                  <span className="text-sm text-slate-600 uppercase font-black pb-1">{item.unit}</span>
                </div>
              </div>
              <input
                id={item.id}
                type="range" min={item.min} max={item.max} value={item.val}
                onChange={(e) => item.set(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-slate-950 hover:accent-slate-800 transition-all"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sisi Hasil */}
      <div className="flex flex-col items-center max-w-md w-full">
        <div className="relative flex items-center justify-center mb-12">
          <div
            className="absolute w-80 h-80 rounded-full opacity-10 blur-[80px] transition-colors duration-700"
            style={{ backgroundColor: analysis.color }}
          ></div>

          <svg className="w-64 h-64 -rotate-90 relative z-10">
            <circle cx="128" cy="128" r="115" fill="transparent" stroke="#F1F5F9" strokeWidth="4" />
            <circle
              cx="128"
              cy="128"
              r="115"
              fill="transparent"
              stroke={analysis.color}
              strokeWidth="10"
              strokeDasharray="722.5"
              strokeDashoffset={722.5 - (Math.min(analysis.value, 40) / 40) * 722.5}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
            />
          </svg>

          <div className="absolute flex flex-col items-center text-center z-20">
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] mb-1">Indeks BMI</span>
            <span className="text-6xl font-black text-slate-950 tracking-tighter leading-none">{analysis.value.toFixed(1)}</span>
            <div
              className="mt-6 px-8 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-500"
              style={{ backgroundColor: analysis.color, boxShadow: `0 10px 25px ${analysis.color}44` }}
            >
              {analysis.label}
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-6 gap-2 pt-8 border-t border-slate-100">
          {categories.map((cat) => (
            <div key={cat.label} className="flex flex-col items-center gap-3">
              <div
                className={cn(
                  "w-full h-1.5 rounded-full transition-all duration-500",
                  analysis.label === cat.label ? "scale-y-125 translate-y-[-1px] opacity-100" : "opacity-20"
                )}
                style={{ backgroundColor: cat.color }}
              />
              <span className={cn(
                "text-[9px] font-black uppercase tracking-tighter text-center transition-all px-0.5",
                analysis.label === cat.label ? "text-slate-950" : "text-slate-500"
              )}>
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
