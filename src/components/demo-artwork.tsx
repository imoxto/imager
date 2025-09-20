import { useId } from "react";

type DemoArtworkProps = React.SVGProps<SVGSVGElement> & {
  viewportWidth?: number;
  viewportHeight?: number;
};

const BASE_WIDTH = 1200;
const BASE_HEIGHT = 360;

export function DemoArtwork({
  viewportWidth: incomingWidth,
  viewportHeight: incomingHeight,
  ...rest
}: DemoArtworkProps) {
  const viewportWidth = incomingWidth ?? BASE_WIDTH;
  const viewportHeight = incomingHeight ?? BASE_HEIGHT;

  const scale = Math.min(
    viewportWidth / BASE_WIDTH,
    viewportHeight / BASE_HEIGHT
  );
  const offsetX = (viewportWidth - BASE_WIDTH * scale) / 2;
  const offsetY = (viewportHeight - BASE_HEIGHT * scale) / 2;

  const backgroundGradientId = useId();
  const stripeGradientId = useId();
  const logoGradientId = useId();
  const highlightGradientId = useId();

  return (
    <svg
      viewBox={`0 0 ${viewportWidth} ${viewportHeight}`}
      preserveAspectRatio="none"
      role="img"
      aria-labelledby="qlibrTitle qlibrDescription"
      {...rest}
    >
      <title id="qlibrTitle">QLIBR advertisement banner</title>
      <desc id="qlibrDescription">
        Gradient background with the QLIBR mark, tagline, and website link in Dutch.
      </desc>
      <defs>
        <linearGradient
          id={backgroundGradientId}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#0f1a5c" />
          <stop offset="40%" stopColor="#192483" />
          <stop offset="100%" stopColor="#1c2aa2" />
        </linearGradient>
        <linearGradient
          id={stripeGradientId}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
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
        <linearGradient
          id={logoGradientId}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="45%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>
        <linearGradient
          id={highlightGradientId}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect
        width={viewportWidth}
        height={viewportHeight}
        fill={`url(#${backgroundGradientId})`}
      />
      <rect
        width={viewportWidth}
        height={viewportHeight}
        fill={`url(#${stripeGradientId})`}
        opacity="0.2"
      />
      <rect
        width={viewportWidth}
        height={viewportHeight}
        fill={`url(#${highlightGradientId})`}
        opacity="0.3"
      />

      <g transform={`translate(${offsetX + 210 * scale} ${offsetY + 180 * scale})`}>
        <g fill="none" stroke={`url(#${logoGradientId})`}>
          <circle
            r="120"
            strokeWidth="26"
            strokeLinecap="round"
            strokeDasharray="570 120"
            strokeDashoffset="85"
            transform={`rotate(36) scale(${scale})`}
          />
          <circle
            r="88"
            strokeWidth="24"
            strokeLinecap="round"
            strokeDasharray="420 95"
            strokeDashoffset="70"
            transform={`rotate(36) scale(${scale})`}
          />
          <circle
            r="56"
            strokeWidth="22"
            strokeLinecap="round"
            strokeDasharray="270 70"
            strokeDashoffset="55"
            transform={`rotate(36) scale(${scale})`}
          />
        </g>
        <path
          d="M70 16c44 59 78 104 116 146h-52c-46-56-80-99-118-145 11-16 33-23 54-1z"
          fill={`url(#${logoGradientId})`}
          transform={`scale(${scale})`}
        />
      </g>

      <g
        transform={`translate(${offsetX + 420 * scale} ${offsetY + 110 * scale}) scale(${scale})`}
      >
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
