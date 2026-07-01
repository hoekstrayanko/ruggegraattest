"use client";

import { useState } from "react";

export default function ShareButton({
  profileName,
  emoji,
}: {
  profileName: string;
  emoji: string;
}) {
  const [copied, setCopied] = useState(false);

  const shareText = `Mijn ruggengraat scoort: ${emoji} ${profileName}! Doe de Ruggengraattest ook op https://ruggegraattest.nl`;

  async function handleShare() {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ text: shareText });
        return;
      } catch {
        // gebruiker annuleerde de share-dialoog, val terug op kopiëren
      }
    }

    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard niet beschikbaar, geen verdere actie mogelijk
    }
  }

  return (
    <button
      onClick={handleShare}
      className="rounded-full bg-white px-6 py-3 font-bold text-purple-700 shadow-lg transition-transform hover:scale-105 active:scale-95"
    >
      {copied ? "Gekopieerd! 📋" : "Deel je resultaat 📣"}
    </button>
  );
}
