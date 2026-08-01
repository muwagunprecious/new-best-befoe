export default function DanfoBusSvg({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Danfo Van Silhouette Body */}
      <path
        d="M 120 280 L 120 180 C 120 150 140 120 180 110 L 480 110 C 560 110 650 160 700 210 L 740 250 C 760 270 770 290 770 310 L 770 330 C 770 340 760 350 750 350 L 710 350 C 710 310 670 280 620 280 C 570 280 530 310 530 350 L 310 350 C 310 310 270 280 220 280 C 170 280 130 310 130 350 L 100 350 C 90 350 80 340 80 330 L 80 300 C 80 290 90 280 100 280 Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="3"
        strokeOpacity="0.25"
      />

      {/* Front Windshield & Windows */}
      <path
        d="M 190 130 L 460 130 C 470 130 475 135 475 145 L 475 220 C 475 230 470 235 460 235 L 190 235 C 175 235 165 220 165 200 L 170 155 C 173 140 180 130 190 130 Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.3"
      />
      <path
        d="M 495 130 L 620 130 C 660 130 710 170 735 205 L 745 220 C 750 225 745 235 735 235 L 495 235 Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.3"
      />

      {/* Iconic Danfo Horizontal Stripes */}
      <rect x="80" y="248" width="690" height="14" rx="3" fill="currentColor" fillOpacity="0.25" />
      <rect x="80" y="266" width="690" height="10" rx="2" fill="currentColor" fillOpacity="0.2" />

      {/* Driver & Passenger Silhouettes */}
      <circle cx="240" cy="180" r="16" fill="currentColor" fillOpacity="0.3" />
      <path d="M 215 235 C 215 205 265 205 265 235 Z" fill="currentColor" fillOpacity="0.3" />
      <circle cx="560" cy="175" r="18" fill="currentColor" fillOpacity="0.3" />
      <path d="M 530 235 C 530 200 590 200 590 235 Z" fill="currentColor" fillOpacity="0.3" />

      {/* Front/Back Bumpers & Headlight */}
      <rect x="755" y="295" width="25" height="18" rx="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="745" cy="275" r="12" fill="currentColor" fillOpacity="0.35" />

      {/* Wheels */}
      <circle cx="220" cy="350" r="45" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4" />
      <circle cx="220" cy="350" r="20" fill="currentColor" fillOpacity="0.2" />
      <circle cx="620" cy="350" r="45" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4" />
      <circle cx="620" cy="350" r="20" fill="currentColor" fillOpacity="0.2" />

      {/* Road line under bus */}
      <line x1="40" y1="395" x2="780" y2="395" stroke="currentColor" strokeWidth="3" strokeOpacity="0.2" strokeDasharray="16 12" />
    </svg>
  );
}
