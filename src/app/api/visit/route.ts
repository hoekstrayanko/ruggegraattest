import { NextResponse } from "next/server";
import { getRedis, VISITS_KEY, COMPLETIONS_KEY } from "@/lib/redis";

export async function POST() {
  const redis = getRedis();
  if (!redis) {
    return NextResponse.json({ visits: null, completions: null });
  }

  const [visits, completions] = await Promise.all([
    redis.incr(VISITS_KEY),
    redis.get<number>(COMPLETIONS_KEY),
  ]);

  return NextResponse.json({ visits, completions: completions ?? 0 });
}
