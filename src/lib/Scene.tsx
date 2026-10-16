import type { ReactElement } from "react";
import type { SceneType } from "../data/content";

const ACCENTS = ["#8A9A7B", "#2B3F52", "#77746C", "#A9B89B"];
const WALLS = ["#E7E1D3", "#D9DFD0", "#DAD8D2", "#CFD6DC"];
const FLOOR_Y: Record<SceneType, number> = { kitchen: 210, bathroom: 215, plumbing: 240, commercial: 240, repairs: 240 };

const shapes: Record<SceneType, (a: string) => ReactElement> = {
  kitchen: (a) => (
    <>
      <rect x="30" y="40" width="140" height="70" fill={a} />
      <rect x="230" y="40" width="140" height="70" fill={a} />
      <circle cx="200" cy="85" r="30" fill="#F6F1E6" opacity=".8" />
      <rect x="30" y="165" width="340" height="50" fill="#12263A" />
      <rect x="24" y="157" width="352" height="10" fill="#F6F1E6" />
    </>
  ),
  bathroom: (a) => (
    <>
      <path d="M50 0V215M100 0V215M150 0V215M200 0V215M250 0V215M300 0V215M350 0V215M0 55H400M0 110H400M0 165H400" stroke="#fff" strokeOpacity=".55" />
      <rect x="140" y="25" width="120" height="85" rx="8" fill="#F6F1E6" />
      <rect x="150" y="35" width="100" height="65" rx="4" fill={a} opacity=".55" />
      <rect x="60" y="165" width="280" height="60" rx="26" fill="#F6F1E6" />
      <path d="M330 165v-40h-28" stroke="#12263A" strokeWidth="8" fill="none" />
    </>
  ),
  plumbing: (a) => (
    <>
      <path d="M0 90H250V240M120 90V40H400" stroke="#12263A" strokeWidth="16" fill="none" strokeLinejoin="round" />
      <circle cx="250" cy="90" r="16" fill={a} />
      <circle cx="120" cy="90" r="16" fill={a} />
      <rect x="290" y="120" width="90" height="100" rx="6" fill="#F6F1E6" stroke="#12263A" strokeWidth="5" />
      <path d="M315 130v80M335 130v80M355 130v80" stroke="#12263A" strokeWidth="4" />
    </>
  ),
  commercial: (a) => (
    <>
      <rect x="40" y="70" width="320" height="170" fill="#F6F1E6" />
      <path d="M30 70h340l-20-45H50z" fill={a} />
      <rect x="60" y="100" width="140" height="110" fill="#12263A" opacity=".85" />
      <rect x="230" y="100" width="100" height="140" fill="#12263A" />
    </>
  ),
  repairs: (a) => (
    <>
      <rect x="90" y="120" width="220" height="120" fill="#F6F1E6" />
      <path d="M70 125L200 40L330 125z" fill={a} />
      <rect x="180" y="170" width="40" height="70" fill="#12263A" />
      <rect x="120" y="150" width="40" height="40" fill="#12263A" opacity=".8" />
      <path d="M340 70L370 240M365 70L395 240M345 100h22M349 140h22M353 180h22" stroke="#12263A" strokeWidth="5" />
    </>
  ),
};

/** Illustrated placeholder. Swap for real <img> photos in the gallery and video cards. */
export default function Scene({ type, index }: { type: SceneType; index: number }) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="block h-full w-full">
      <rect width="400" height="300" fill={WALLS[index % 4]} />
      <rect y={FLOOR_Y[type]} width="400" height="90" fill="#B9B5AC" />
      {shapes[type](ACCENTS[index % 4])}
    </svg>
  );
}
