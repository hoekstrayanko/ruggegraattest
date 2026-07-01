"use client";

import { useState } from "react";
import { questions, maxScore, getProfile } from "./quiz-data";
import ShareButton from "./ShareButton";
import Confetti from "./Confetti";

type Stage = "intro" | "question" | "result";

const REACTION_DELAY_MS = 700;

export default function Quiz() {
  const [stage, setStage] = useState<Stage>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [reaction, setReaction] = useState<string | null>(null);

  function start() {
    setStage("question");
    setQuestionIndex(0);
    setScore(0);
    setReaction(null);
  }

  function answer(points: number, reactionText: string) {
    if (reaction) return; // negeer dubbelklikken tijdens de reactie-animatie
    setReaction(reactionText);

    setTimeout(() => {
      setReaction(null);
      const newScore = score + points;
      setScore(newScore);

      if (questionIndex + 1 < questions.length) {
        setQuestionIndex(questionIndex + 1);
      } else {
        setStage("result");
      }
    }, REACTION_DELAY_MS);
  }

  function restart() {
    setStage("intro");
  }

  if (stage === "intro") {
    return (
      <div className="animate-pop-in flex max-w-xl flex-col items-center gap-6 rounded-3xl bg-white/95 p-10 text-center shadow-2xl">
        <span className="text-6xl">🦴</span>
        <h1 className="text-4xl font-black tracking-tight text-purple-900">
          De Ruggengraattest
        </h1>
        <p className="text-lg text-zinc-600">
          Een <span className="font-semibold">wetenschappelijk klinkend</span>{" "}
          maar volledig onwetenschappelijk onderzoek naar de stevigheid van uw
          ruggengraat. Zes pijnlijk herkenbare scenario&apos;s, een vleugje
          schunnigheid, en aan het eind een meedogenloos eindoordeel over wie
          u werkelijk bent. 😏
        </p>
        <button
          onClick={start}
          className="rounded-full bg-gradient-to-r from-purple-700 to-pink-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          Start het schunnige zelfonderzoek 😏🔥
        </button>
        <p className="text-sm text-zinc-400">
          Duurt ongeveer 90 seconden. Schaamte niet inbegrepen.
        </p>
      </div>
    );
  }

  if (stage === "question") {
    const question = questions[questionIndex];
    const progress = ((questionIndex + 1) / questions.length) * 100;

    return (
      <div
        key={questionIndex}
        className="animate-pop-in flex w-full max-w-xl flex-col gap-6 rounded-3xl bg-white/95 p-8 shadow-2xl sm:p-10"
      >
        <div className="h-3 w-full overflow-hidden rounded-full bg-zinc-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-700 to-pink-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm font-semibold uppercase tracking-wide text-pink-600">
          Scenario {questionIndex + 1} van {questions.length}
        </p>
        <p className="text-xl font-semibold leading-relaxed text-zinc-800">
          {question.scenario}
        </p>
        <div className="flex flex-col gap-3">
          {question.options.map((option, i) => (
            <button
              key={i}
              disabled={reaction !== null}
              onClick={() => answer(option.points, option.reaction)}
              className="rounded-2xl border-2 border-purple-100 bg-purple-50 px-5 py-4 text-left font-medium text-zinc-800 transition-colors hover:border-purple-400 hover:bg-purple-100 active:scale-[0.98] disabled:opacity-60"
            >
              {option.text}
            </button>
          ))}
        </div>
        {reaction && (
          <div
            aria-live="polite"
            className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center"
          >
            <span className="animate-reaction-pop rounded-full bg-black/80 px-8 py-5 text-2xl font-black text-white shadow-2xl">
              {reaction}
            </span>
          </div>
        )}
      </div>
    );
  }

  const profile = getProfile(score);
  const isExtreme = profile.minScore === 0 || profile.maxScore === maxScore;

  return (
    <div className="animate-pop-in flex w-full max-w-xl flex-col items-center gap-5 rounded-3xl bg-white/95 p-10 text-center shadow-2xl">
      {isExtreme && <Confetti />}
      <p className="text-sm font-semibold uppercase tracking-wide text-pink-600">
        Jouw score: {score} / {maxScore} ruggengraatpunten
      </p>
      <span className="animate-wiggle text-7xl">{profile.emoji}</span>
      <h2 className="text-3xl font-black tracking-tight text-purple-900">
        {profile.name}
      </h2>
      <p className="text-lg leading-relaxed text-zinc-600">
        {profile.description}
      </p>
      <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
        <ShareButton profileName={profile.name} emoji={profile.emoji} />
        <button
          onClick={restart}
          className="rounded-full border-2 border-purple-200 px-6 py-3 font-bold text-purple-700 transition-colors hover:bg-purple-50"
        >
          Nog een keer testen
        </button>
      </div>
    </div>
  );
}
