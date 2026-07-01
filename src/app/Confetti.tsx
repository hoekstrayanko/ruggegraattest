"use client";

import { useState } from "react";

const COLORS = ["#fde047", "#f97316", "#ec4899", "#a855f7", "#38bdf8", "#4ade80"];

function generatePieces() {
  return Array.from({ length: 40 }, (_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 0.6;
    const duration = 2.2 + Math.random() * 1.4;
    const color = COLORS[i % COLORS.length];
    return { left, delay, duration, color, key: i };
  });
}

export default function Confetti() {
  const [pieces] = useState(generatePieces);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.key}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
