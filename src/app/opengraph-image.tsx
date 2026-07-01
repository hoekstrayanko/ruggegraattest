import { ImageResponse } from "next/og";
import { OgImageContent } from "./og-image";

export const alt = "Ruggegraattest — hoe stevig is jouw ruggegraat écht?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(<OgImageContent />, { ...size });
}
