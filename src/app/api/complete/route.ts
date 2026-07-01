import { NextResponse } from "next/server";
import { getRedis, VISITS_KEY, COMPLETIONS_KEY } from "@/lib/redis";

export async function POST() {
  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ visits: null, completions: null });
  }

  const [completions, visits] = await Promise.all([
    redis.incr(COMPLETIONS_KEY),
    redis.get<number>(VISITS_KEY),
  ]);

  return NextResponse.json({ visits: visits ?? 0, completions });
}
