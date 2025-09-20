import { useId } from "react";

type DemoArtworkProps = React.SVGProps<SVGSVGElement> & {
  viewportWidth?: number;
  viewportHeight?: number;
};

export function DemoArtwork({
  viewportWidth: incomingWidth,
  viewportHeight: incomingHeight,
  ...rest
}: DemoArtworkProps) {
  return (
    <svg
      preserveAspectRatio="none"
      role="img"
      aria-labelledby="qlibrTitle qlibrDescription"
      {...rest}
    >
      <title id="qlibrTitle">QLIBR advertisement banner</title>
      <desc id="qlibrDescription">
        Gradient background with the QLIBR mark, tagline, and website link in
        Dutch.
      </desc>
      <defs>
        <linearGradient
          id={"backgroundGradient"}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#0f1a5c" />
          <stop offset="40%" stopColor="#192483" />
          <stop offset="100%" stopColor="#1c2aa2" />
        </linearGradient>
        <linearGradient id={"stripeGradient"} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="12%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="25%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="37%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="62%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="75%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="87%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id={"logoGradient"} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="45%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>
        <linearGradient
          id={"highlightGradient"}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill={`url(#backgroundGradient)`} />
      <rect
        width="100%"
        height="100%"
        fill={`url(#stripeGradient)`}
        opacity="0.2"
      />
      <rect
        width="100%"
        height="100%"
        fill={`url(#highlightGradient`}
        opacity="0.3"
      />

      <g>
        <g fill="none" stroke={`url(#logoGradient)`}>
          <circle
            r="120"
            strokeWidth="26"
            strokeLinecap="round"
            strokeDasharray="570 120"
            strokeDashoffset="85"
            transform={`rotate(36) scale(1)`}
          />
          <circle
            r="88"
            strokeWidth="24"
            strokeLinecap="round"
            strokeDasharray="420 95"
            strokeDashoffset="70"
            transform={`rotate(36) scale(1)`}
          />
          <circle
            r="56"
            strokeWidth="22"
            strokeLinecap="round"
            strokeDasharray="270 70"
            strokeDashoffset="55"
            transform={`rotate(36) scale(1)`}
          />
        </g>
        <path
          d="M70 16c44 59 78 104 116 146h-52c-46-56-80-99-118-145 11-16 33-23 54-1z"
          fill={`url(#logoGradient)`}
          transform={`scale(1)`}
        />
      </g>

      <g>
        <text
          x="0"
          y="0"
          fill="#f97316"
          fontFamily="Inter, 'Segoe UI', sans-serif"
          fontWeight="700"
          fontSize="72"
        >
          QLIBR
        </text>
        <text
          x="0"
          y="100"
          fill="#ffffff"
          fontFamily="Inter, 'Segoe UI', sans-serif"
          fontWeight="700"
          fontSize="58"
        >
          Zoeken stopt. Vinden begint.
        </text>
        <text
          x="0"
          y="158"
          fill="#ffffff"
          fontFamily="Inter, 'Segoe UI', sans-serif"
          fontWeight="400"
          fontSize="44"
        >
          Lanceer jouw nicheplatform.
        </text>
        <text
          x="0"
          y="215"
          fill="#f97316"
          fontFamily="Inter, 'Segoe UI', sans-serif"
          fontWeight="600"
          fontSize="36"
        >
          www.qlibr.com
        </text>
      </g>
    </svg>
  );
}
