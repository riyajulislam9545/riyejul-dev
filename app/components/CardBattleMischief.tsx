"use client";

import { useEffect, useState, useRef, useCallback } from "react";

type BattleStage = "CHASE" | "KNEEL_FIRE" | "CAT_THROW" | "KNOCKED_DOWN" | "LEAP";

interface Bullet {
  id: number;
  startX: number;
  startY: number;
  targetX: number;
  progress: number;
}

interface Stone {
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  progress: number;
}

interface Spark {
  id: number;
  x: number;
  y: number;
  color: string;
  vx: number;
  vy: number;
  life: number;
}

// 1. Dynamic Vector PUBG Chibi Character (Custom Built SVG)
function PubgCharacterSVG({
  pose,
  muzzleFlash,
}: {
  pose: "RUN" | "KNEEL_FIRE" | "KNOCKED_DOWN";
  muzzleFlash: boolean;
}) {
  const isKneeling = pose === "KNEEL_FIRE";
  const isKnocked = pose === "KNOCKED_DOWN";

  return (
    <div
      className={`relative w-[34px] h-[46px] transition-transform duration-100 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] ${
        isKnocked ? "rotate-[85deg] translate-y-2" : isKneeling ? "translate-y-1" : ""
      }`}
    >
      <svg viewBox="0 0 48 64" className="w-full h-full overflow-visible">
        {/* Shadow under character */}
        <ellipse cx="24" cy="61" rx="14" ry="3" fill="rgba(0,0,0,0.4)" />

        {/* Legs / Boots */}
        {isKneeling ? (
          // One-Knee Tactical Stance
          <g>
            {/* Front bent knee */}
            <path d="M 24 44 L 28 52 L 32 60 L 25 60" fill="#1E3A8A" stroke="#172554" strokeWidth="1.5" />
            <rect x="23" y="56" width="10" height="5" rx="2" fill="#1F2937" />
            {/* Back resting knee on ground */}
            <path d="M 18 44 L 12 55 L 6 60 L 14 60" fill="#1E3A8A" stroke="#172554" strokeWidth="1.5" />
            <rect x="5" y="56" width="10" height="5" rx="2" fill="#1F2937" />
          </g>
        ) : isKnocked ? (
          // Knocked out legs kicking up
          <g>
            <rect x="14" y="44" width="7" height="15" rx="3" fill="#1E3A8A" transform="rotate(-30 14 44)" />
            <rect x="25" y="44" width="7" height="15" rx="3" fill="#1E3A8A" transform="rotate(30 25 44)" />
            <circle cx="10" cy="58" r="4" fill="#1F2937" />
            <circle cx="36" cy="58" r="4" fill="#1F2937" />
          </g>
        ) : (
          // Running / Standing legs
          <g className="animate-pulse">
            <rect x="15" y="44" width="7" height="15" rx="3" fill="#1E3A8A" stroke="#172554" strokeWidth="1" />
            <rect x="25" y="44" width="7" height="15" rx="3" fill="#1E3A8A" stroke="#172554" strokeWidth="1" />
            <rect x="13" y="56" width="9" height="5" rx="2" fill="#1F2937" />
            <rect x="25" y="56" width="9" height="5" rx="2" fill="#1F2937" />
          </g>
        )}

        {/* Torso: White Collared Shirt with Tie & Holster Harness */}
        <path
          d="M 14 26 L 34 26 L 32 46 L 16 46 Z"
          fill="#F9FAFB"
          stroke="#E5E7EB"
          strokeWidth="1.2"
        />
        {/* Collar & Necktie */}
        <path d="M 21 26 L 24 30 L 27 26" fill="#D1D5DB" />
        <path d="M 23 30 L 25 30 L 24.5 40 L 23.5 40 Z" fill="#111827" />
        {/* Tactical Brown Harness Belt */}
        <path d="M 15 33 L 33 37" stroke="#78350F" strokeWidth="2.5" />
        <path d="M 33 33 L 15 37" stroke="#78350F" strokeWidth="2.5" />
        <rect x="15" y="43" width="18" height="3" fill="#78350F" />
        <rect x="22" y="42.5" width="4" height="4" fill="#D97706" />

        {/* Tactical Assault Rifle in Hand */}
        {isKneeling ? (
          // Tactical Aiming Rifle Forward
          <g>
            {/* Rifle Body */}
            <rect x="26" y="32" width="22" height="4" rx="1" fill="#111827" />
            {/* Rifle Stock & Grip */}
            <path d="M 24 33 L 20 37 L 22 40 L 26 35" fill="#374151" />
            {/* Curved Magazine */}
            <path d="M 32 36 L 31 43 L 34 43 L 35 36" fill="#1F2937" />
            {/* Sight & Barrel */}
            <rect x="42" y="30" width="2" height="3" fill="#4B5563" />
            <rect x="46" y="33" width="4" height="2" fill="#000000" />
            {/* Arms holding rifle */}
            <path d="M 20 30 L 28 34" stroke="#FDE047" strokeWidth="4" strokeLinecap="round" />
            <path d="M 24 32 L 35 34" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" />

            {/* Muzzle Flash Effect */}
            {muzzleFlash && (
              <g className="animate-ping">
                <polygon
                  points="50,34 56,31 54,34 60,34 55,36 58,40 52,36 50,38"
                  fill="#FEF08A"
                />
                <circle cx="53" cy="34" r="3" fill="#00F5FF" />
              </g>
            )}
          </g>
        ) : (
          // Carrying Rifle Ready
          <g>
            <rect x="22" y="32" width="18" height="4" rx="1" fill="#111827" transform="rotate(-15 22 32)" />
            <rect x="28" y="36" width="3" height="6" fill="#1F2937" />
            <path d="M 18 30 L 24 34" stroke="#FDE047" strokeWidth="3.5" strokeLinecap="round" />
          </g>
        )}

        {/* PUBG Level 3 Helmet (Iconic Black Helmet with Visor) */}
        <g>
          {/* Helmet Base Dome */}
          <path
            d="M 12 18 C 12 6, 36 6, 36 18 C 36 26, 12 26, 12 18 Z"
            fill="#374151"
            stroke="#1F2937"
            strokeWidth="2"
          />
          {/* Metallic Top Sheen */}
          <path d="M 16 11 C 20 8, 28 8, 32 11" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
          {/* Level 3 Visor Face Plate */}
          <rect x="10" y="16" width="28" height="11" rx="2" fill="#1F2937" stroke="#111827" strokeWidth="1.5" />
          {/* Slit Grid Lines on Visor */}
          <rect x="14" y="19" width="20" height="5" rx="1" fill="#030712" />
          <line x1="16" y1="21" x2="22" y2="21" stroke="#38BDF8" strokeWidth="1" opacity="0.8" />
          <line x1="25" y1="21" x2="31" y2="21" stroke="#38BDF8" strokeWidth="1" opacity="0.8" />
          {/* Helmet Ear Cups / Rivets */}
          <circle cx="9" cy="21" r="2.5" fill="#4B5563" />
          <circle cx="39" cy="21" r="2.5" fill="#4B5563" />
          <circle cx="24" cy="10" r="1.5" fill="#6B7280" />
        </g>
      </svg>
    </div>
  );
}

// 2. Dynamic Vector Chibi Cat Character (Custom Built SVG)
function CatCharacterSVG({
  pose,
}: {
  pose: "RUN" | "DODGE" | "THROW" | "SIT";
}) {
  const isDodging = pose === "DODGE";
  const isThrowing = pose === "THROW";
  const isSitting = pose === "SIT";

  return (
    <div
      className={`relative w-[34px] h-[32px] transition-transform duration-100 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] ${
        isDodging ? "-translate-y-7 rotate-[-25deg] scale-110" : ""
      }`}
    >
      <svg viewBox="0 0 48 46" className="w-full h-full overflow-visible">
        {/* Soft Shadow */}
        <ellipse cx="24" cy="43" rx="13" ry="3" fill="rgba(0,0,0,0.35)" />

        {/* Tail (Wiggles or arches) */}
        <path
          d={
            isDodging
              ? "M 10 32 C 4 30, 2 16, 8 10"
              : isSitting
              ? "M 10 34 C 4 32, 2 24, 6 18 C 8 14, 12 18, 10 22"
              : "M 10 32 C 4 28, 2 18, 6 12 C 8 8, 12 10, 10 16"
          }
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Tail tip stripes */}
        <circle cx="8" cy="11" r="2" fill="#4B5563" />

        {/* Cat Body */}
        <ellipse cx="22" cy="30" rx="13" ry="10" fill="#9CA3AF" stroke="#6B7280" strokeWidth="1" />
        {/* Body Tabby Stripes */}
        <path d="M 18 22 C 20 26, 20 34, 18 36" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
        <path d="M 23 21 C 25 25, 25 35, 23 37" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" />
        {/* White Chest Patch */}
        <ellipse cx="27" cy="31" rx="6" ry="7" fill="#F9FAFB" />

        {/* Legs / Paws */}
        {isSitting ? (
          // Sitting front paws
          <g>
            <rect x="23" y="36" width="5" height="7" rx="2.5" fill="#E5E7EB" />
            <rect x="29" y="36" width="5" height="7" rx="2.5" fill="#E5E7EB" />
          </g>
        ) : isThrowing ? (
          // Standing with front paw raised in throwing motion!
          <g>
            <rect x="17" y="34" width="5" height="9" rx="2.5" fill="#E5E7EB" />
            <rect x="24" y="34" width="5" height="9" rx="2.5" fill="#E5E7EB" />
            {/* Raised Throwing Arm */}
            <path d="M 28 26 L 36 18" stroke="#E5E7EB" strokeWidth="4.5" strokeLinecap="round" />
            <circle cx="37" cy="17" r="3" fill="#F9FAFB" />
          </g>
        ) : isDodging ? (
          // Tucked in leaping paws
          <g>
            <path d="M 14 34 L 8 36" stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round" />
            <path d="M 28 34 L 34 36" stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round" />
          </g>
        ) : (
          // Running paws
          <g className="animate-pulse">
            <rect x="16" y="34" width="4.5" height="9" rx="2" fill="#E5E7EB" />
            <rect x="23" y="34" width="4.5" height="9" rx="2" fill="#E5E7EB" />
            <rect x="29" y="34" width="4.5" height="9" rx="2" fill="#E5E7EB" />
          </g>
        )}

        {/* Cat Head */}
        <ellipse cx="32" cy="18" rx="12" ry="11" fill="#9CA3AF" stroke="#6B7280" strokeWidth="1" />
        {/* Tabby Forehead Stripes */}
        <path d="M 30 9 L 30 14" stroke="#4B5563" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M 34 9 L 34 14" stroke="#4B5563" strokeWidth="1.8" strokeLinecap="round" />

        {/* Ears */}
        {/* Left Ear */}
        <polygon points="23,12 27,2 31,10" fill="#9CA3AF" stroke="#6B7280" strokeWidth="1" />
        <polygon points="24.5,10 27,4 29.5,9" fill="#FBCFE8" />
        {/* Right Ear */}
        <polygon points="34,10 38,2 42,12" fill="#9CA3AF" stroke="#6B7280" strokeWidth="1" />
        <polygon points="35.5,9 38,4 40.5,10" fill="#FBCFE8" />

        {/* Big Bright Blue Anime Eyes */}
        <ellipse cx="28" cy="18" rx="3.5" ry="4" fill="#0284C7" />
        <circle cx="27" cy="16.5" r="1.3" fill="#FFFFFF" />
        <ellipse cx="37" cy="18" rx="3.5" ry="4" fill="#0284C7" />
        <circle cx="36" cy="16.5" r="1.3" fill="#FFFFFF" />

        {/* Pink Nose & Cheerful Whiskers */}
        <polygon points="31.5,21 34.5,21 33,23" fill="#F472B6" />
        <path d="M 33 23 Q 31 25 29 24 M 33 23 Q 35 25 37 24" stroke="#4B5563" strokeWidth="1" fill="none" />
        {/* Whiskers */}
        <line x1="26" y1="21" x2="20" y2="19" stroke="#E5E7EB" strokeWidth="1" />
        <line x1="26" y1="23" x2="20" y2="24" stroke="#E5E7EB" strokeWidth="1" />
        <line x1="39" y1="21" x2="45" y2="19" stroke="#E5E7EB" strokeWidth="1" />
        <line x1="39" y1="23" x2="45" y2="24" stroke="#E5E7EB" strokeWidth="1" />
      </svg>
    </div>
  );
}

// 3. Cartoon Stone SVG Graphic
function FlyingStoneGraphic({ rotation }: { rotation: number }) {
  return (
    <svg
      className="w-5 h-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
      viewBox="0 0 32 32"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M6 14 C4 20, 8 27, 16 27 C24 27, 28 21, 28 15 C28 8, 22 4, 14 4 C8 4, 8 10, 6 14 Z"
        fill="#78716C"
        stroke="#292524"
        strokeWidth="2"
      />
      <path
        d="M10 10 C14 7, 20 7, 24 11"
        stroke="#D6D3D1"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="12" cy="18" r="1.5" fill="#57534E" />
      <circle cx="20" cy="19" r="2" fill="#44403C" />
    </svg>
  );
}

const CAT_W = 34;
const CAT_H = 32;
const KID_W = 34;
const KID_H = 46;
const TARGET_DISTANCE = 135; // Fixed constant distance between the two characters

export default function CardBattleMischief(): React.JSX.Element | null {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(true);

  // Document-relative pixel positions (pageX, pageY) - initialized at fixed constant distance
  const [catPos, setCatPos] = useState({ x: 200, y: 300, facingLeft: false });
  const [kidPos, setKidPos] = useState({ x: 200 - TARGET_DISTANCE, y: 300, facingLeft: false });

  // Poses
  const [pubgPose, setPubgPose] = useState<"RUN" | "KNEEL_FIRE" | "KNOCKED_DOWN">("RUN");
  const [catPose, setCatPose] = useState<"RUN" | "DODGE" | "THROW" | "SIT">("RUN");
  const [muzzleFlash, setMuzzleFlash] = useState(false);

  // Battle State
  const [stage, setStage] = useState<BattleStage>("CHASE");
  const [bullets, setBullets] = useState<Bullet[]>([]);
  const [stone, setStone] = useState<Stone | null>(null);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [statusBubble, setStatusBubble] = useState<{ text: string; x: number; y: number } | null>(null);

  // Synchronous State References to eliminate re-render loops completely
  const catPosRef = useRef({ x: 200, y: 300, facingLeft: false });
  const kidPosRef = useRef({ x: 200 - TARGET_DISTANCE, y: 300, facingLeft: false });
  const stageRef = useRef<BattleStage>("CHASE");
  const bulletsRef = useRef<Bullet[]>([]);
  const stoneRef = useRef<Stone | null>(null);

  const currentCardRef = useRef<HTMLElement | null>(null);
  const stageStartTimeRef = useRef<number>(Date.now());
  const leapDataRef = useRef({
    catStart: { x: 0, y: 0 },
    kidStart: { x: 0, y: 0 },
    catEnd: { x: 0, y: 0 },
    kidEnd: { x: 0, y: 0 },
  });
  const bulletIdCounter = useRef(0);
  const sparkIdCounter = useRef(0);
  const kidOffsetRef = useRef(0);
  const moveDirRef = useRef<1 | -1>(1);

  // Helper to discover all tagged cards on the website that can fit the battle
  const getAllCards = useCallback((): HTMLElement[] => {
    if (typeof window === "undefined") return [];
    return Array.from(document.querySelectorAll<HTMLElement>("[data-battle-card]")).filter((el) => {
      // Exclude the skills section explicitly so the battle animation never targets it
      if (el.closest("#skills") || el.getAttribute("data-battle-card") === "skill-card") return false;
      const rect = el.getBoundingClientRect();
      return rect.width >= TARGET_DISTANCE + CAT_W && rect.height > 20 && el.offsetParent !== null;
    });
  }, []);

  // Helper to find cards currently visible in the user's viewport
  const getVisibleCards = useCallback((): HTMLElement[] => {
    const all = getAllCards();
    const vh = window.innerHeight;
    return all.filter((el) => {
      const rect = el.getBoundingClientRect();
      return rect.bottom > 50 && rect.top < vh - 50;
    });
  }, [getAllCards]);

  // Helper to find the card closest to the user's viewport vertical center
  const getClosestCard = useCallback((): HTMLElement | null => {
    const visible = getVisibleCards();
    const vCenter = window.innerHeight / 2;

    if (visible.length > 0) {
      return visible.reduce((closest, el) => {
        const r = el.getBoundingClientRect();
        const rClosest = closest.getBoundingClientRect();
        const c = r.top + r.height / 2;
        const cClosest = rClosest.top + rClosest.height / 2;
        return Math.abs(c - vCenter) < Math.abs(cClosest - vCenter) ? el : closest;
      }, visible[0]);
    }

    const all = getAllCards();
    if (all.length === 0) return null;
    return all.reduce((closest, el) => {
      const r = el.getBoundingClientRect();
      const rClosest = closest.getBoundingClientRect();
      const c = r.top + r.height / 2;
      const cClosest = rClosest.top + rClosest.height / 2;
      return Math.abs(c - vCenter) < Math.abs(cClosest - vCenter) ? el : closest;
    }, all[0]);
  }, [getAllCards, getVisibleCards]);

  // Stable transfer function - zero external dependencies so it never triggers re-render loops
  const moveToCard = useCallback((targetEl: HTMLElement, animated: boolean = false) => {
    if (!targetEl) return;
    currentCardRef.current = targetEl;
    const rect = targetEl.getBoundingClientRect();
    const pageX = rect.left + window.scrollX;
    const pageY = rect.top + window.scrollY;
    const surfaceY = pageY + 3;

    const PAD = 14;
    const minCardX = pageX + PAD;
    const maxCardX = pageX + rect.width - PAD;

    const minKidX = minCardX;
    const maxKidX = Math.max(minKidX, maxCardX - CAT_W - TARGET_DISTANCE);
    const patrolRange = Math.max(0, maxKidX - minKidX);

    const initialKidOffset = Math.min(20, patrolRange);
    kidOffsetRef.current = initialKidOffset;
    moveDirRef.current = 1;

    const targetKidX = minKidX + initialKidOffset;
    const targetCatX = targetKidX + TARGET_DISTANCE;

    if (animated) {
      leapDataRef.current = {
        catStart: { ...catPosRef.current },
        kidStart: { ...kidPosRef.current },
        catEnd: { x: targetCatX, y: surfaceY - CAT_H },
        kidEnd: { x: targetKidX, y: surfaceY - KID_H },
      };
      stageRef.current = "LEAP";
      setStage("LEAP");
      stageStartTimeRef.current = Date.now();
      setStatusBubble({
        text: "*LEAP TO NEXT CARD!*",
        x: (targetCatX + targetKidX) / 2,
        y: surfaceY - 30,
      });
    } else {
      const newCat = { x: targetCatX, y: surfaceY - CAT_H, facingLeft: false };
      const newKid = { x: targetKidX, y: surfaceY - KID_H, facingLeft: false };
      catPosRef.current = newCat;
      kidPosRef.current = newKid;
      setCatPos(newCat);
      setKidPos(newKid);
      setPubgPose("RUN");
      setCatPose("RUN");
      bulletsRef.current = [];
      setBullets([]);
      stoneRef.current = null;
      setStone(null);
      stageRef.current = "CHASE";
      setStage("CHASE");
      stageStartTimeRef.current = Date.now();
      setStatusBubble(null);
    }
  }, []);

  // Initial Placement on Mount - Runs exactly once
  useEffect(() => {
    setMounted(true);
    const closest = getClosestCard();
    if (closest) {
      moveToCard(closest, false);
    }
  }, [getClosestCard, moveToCard]);

  // Scroll & Resize Listener: Transfer fight immediately to the closest card on screen
  useEffect(() => {
    if (!mounted || !enabled) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const closest = getClosestCard();
          if (closest && closest !== currentCardRef.current) {
            moveToCard(closest, false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [mounted, enabled, getClosestCard, moveToCard]);

  // Main 60FPS Battle & Animation Loop (Decoupled from state updates so it never causes infinite re-renders)
  useEffect(() => {
    if (!mounted || !enabled) return;

    let animId: number;
    let lastTime = Date.now();

    const frame = () => {
      const now = Date.now();
      const dt = Math.min((now - lastTime) / 1000, 0.08);
      lastTime = now;

      const elapsed = (now - stageStartTimeRef.current) / 1000;
      const currentStage = stageRef.current;

      // 1. Update Sparks
      setSparks((prev) =>
        prev
          .map((s) => ({
            ...s,
            x: s.x + s.vx * dt * 60,
            y: s.y + s.vy * dt * 60,
            life: s.life - dt * 2.2,
          }))
          .filter((s) => s.life > 0)
      );

      // 2. Handle LEAP Stage (Transferring between cards)
      if (currentStage === "LEAP") {
        const leapDuration = 0.65;
        const t = Math.min(1, elapsed / leapDuration);

        // Horizontal positions maintain strictly constant TARGET_DISTANCE throughout the leap
        const curCatX =
          leapDataRef.current.catStart.x +
          (leapDataRef.current.catEnd.x - leapDataRef.current.catStart.x) * t;
        const curKidX =
          leapDataRef.current.kidStart.x +
          (leapDataRef.current.kidEnd.x - leapDataRef.current.kidStart.x) * t;

        // Cat leaps in high arc, Kid leaps in lower arc
        const catArc = Math.sin(t * Math.PI) * 110;
        const kidArc = Math.sin(t * Math.PI) * 55;

        const curCatY =
          leapDataRef.current.catStart.y +
          (leapDataRef.current.catEnd.y - leapDataRef.current.catStart.y) * t -
          catArc;
        const curKidY =
          leapDataRef.current.kidStart.y +
          (leapDataRef.current.kidEnd.y - leapDataRef.current.kidStart.y) * t -
          kidArc;

        const isLeapingLeft = leapDataRef.current.catEnd.x < leapDataRef.current.catStart.x;
        const newCat = {
          x: curCatX,
          y: curCatY,
          facingLeft: isLeapingLeft,
        };
        const newKid = {
          x: curKidX,
          y: curKidY,
          facingLeft: isLeapingLeft,
        };

        catPosRef.current = newCat;
        kidPosRef.current = newKid;
        setCatPos(newCat);
        setKidPos(newKid);
        setCatPose("DODGE");
        setPubgPose("RUN");

        if (t >= 1) {
          const landedCat = { ...leapDataRef.current.catEnd, facingLeft: false };
          const landedKid = { ...leapDataRef.current.kidEnd, facingLeft: false };
          catPosRef.current = landedCat;
          kidPosRef.current = landedKid;
          setCatPos(landedCat);
          setKidPos(landedKid);
          setPubgPose("RUN");
          setCatPose("RUN");
          stageRef.current = "CHASE";
          setStage("CHASE");
          stageStartTimeRef.current = now;
          setStatusBubble(null);
        }

        animId = requestAnimationFrame(frame);
        return;
      }

      // 3. Regular Card-Surface Stages
      const currentEl = currentCardRef.current;
      if (currentEl) {
        const rect = currentEl.getBoundingClientRect();
        const pageX = rect.left + window.scrollX;
        const pageY = rect.top + window.scrollY;
        const surfaceY = pageY + 3; // Absolute top edge of card

        const PAD = 14;
        const minCardX = pageX + PAD;
        const maxCardX = pageX + rect.width - PAD;

        // STAGE 1: CHASE (Kid runs behind Cat, maintaining strictly constant distance)
        if (currentStage === "CHASE") {
          setPubgPose("RUN");
          setCatPose("RUN");
          setMuzzleFlash(false);

          const minKidX = minCardX;
          const maxKidX = Math.max(minKidX, maxCardX - CAT_W - TARGET_DISTANCE);
          const patrolRange = Math.max(0, maxKidX - minKidX);

          if (patrolRange > 0) {
            const speed = 75 * dt;
            kidOffsetRef.current += moveDirRef.current * speed;

            if (kidOffsetRef.current >= patrolRange) {
              kidOffsetRef.current = patrolRange;
              moveDirRef.current = -1;
            } else if (kidOffsetRef.current <= 0) {
              kidOffsetRef.current = 0;
              moveDirRef.current = 1;
            }
          } else {
            kidOffsetRef.current = 0;
          }

          const curKidX = minKidX + kidOffsetRef.current;
          // Absolute guarantee: Cat is ALWAYS at constant TARGET_DISTANCE from Kid
          const curCatX = curKidX + TARGET_DISTANCE;

          const newCat = {
            x: curCatX,
            y: surfaceY - CAT_H,
            facingLeft: moveDirRef.current === -1,
          };
          const newKid = {
            x: curKidX,
            y: surfaceY - KID_H,
            facingLeft: moveDirRef.current === -1,
          };

          catPosRef.current = newCat;
          kidPosRef.current = newKid;
          setCatPos(newCat);
          setKidPos(newKid);

          // After 3.0s of chase, Kid drops to one knee and fires!
          if (elapsed > 3.0) {
            stageRef.current = "KNEEL_FIRE";
            setStage("KNEEL_FIRE");
            setPubgPose("KNEEL_FIRE");
            stageStartTimeRef.current = now;

            const combatCat = { ...catPosRef.current, facingLeft: true };
            const combatKid = { ...kidPosRef.current, facingLeft: false };
            catPosRef.current = combatCat;
            kidPosRef.current = combatKid;
            setCatPos(combatCat);
            setKidPos(combatKid);

            setStatusBubble({
              text: "*KNEEL & FIRE!*",
              x: curKidX + 17,
              y: surfaceY - KID_H - 12,
            });
          }
        }

        // STAGE 2: KNEEL & FIRE (PUBG Kid kneels on one knee, fires rifle, Cat dodges)
        else if (currentStage === "KNEEL_FIRE") {
          setPubgPose("KNEEL_FIRE");

          const cPos = catPosRef.current;
          const kPos = kidPosRef.current;

          // Fire 2 bursts
          if (elapsed > 0.35 && elapsed < 1.9 && bulletsRef.current.length < 2) {
            const shootCadence = Math.floor(elapsed * 2.2);
            if (shootCadence > bulletsRef.current.length) {
              const bId = ++bulletIdCounter.current;
              const bStartX = cPos.x > kPos.x ? kPos.x + 36 : kPos.x - 4;
              const bStartY = surfaceY - KID_H + 25;

              setMuzzleFlash(true);
              setTimeout(() => setMuzzleFlash(false), 120);

              const newBullet: Bullet = {
                id: bId,
                startX: bStartX,
                startY: bStartY,
                targetX: cPos.x + 16,
                progress: 0,
              };
              bulletsRef.current = [...bulletsRef.current, newBullet];
              setBullets(bulletsRef.current);

              // Muzzle flash sparks
              for (let i = 0; i < 4; i++) {
                setSparks((sp) => [
                  ...sp,
                  {
                    id: ++sparkIdCounter.current,
                    x: bStartX,
                    y: bStartY,
                    color: "#FEF08A",
                    vx: (cPos.x > kPos.x ? 1 : -1) * (Math.random() * 3 + 1),
                    vy: (Math.random() - 0.5) * 3,
                    life: 0.6,
                  },
                ]);
              }
            }
          }

          // Move bullets and trigger Cat dodge
          if (bulletsRef.current.length > 0) {
            bulletsRef.current = bulletsRef.current
              .map((b) => {
                const newProgress = b.progress + dt * 3.6;
                const curBulletX = b.startX + (b.targetX - b.startX) * newProgress;

                if (Math.abs(curBulletX - cPos.x) < 40) {
                  setCatPose("DODGE");
                  setStatusBubble({
                    text: "*DODGE!*",
                    x: cPos.x + 17,
                    y: cPos.y - 30,
                  });

                  for (let i = 0; i < 3; i++) {
                    setSparks((sp) => [
                      ...sp,
                      {
                        id: ++sparkIdCounter.current,
                        x: curBulletX,
                        y: cPos.y + 10,
                        color: "#38BDF8",
                        vx: (Math.random() - 0.5) * 3,
                        vy: -Math.random() * 3,
                        life: 0.6,
                      },
                    ]);
                  }
                }

                return { ...b, progress: newProgress };
              })
              .filter((b) => b.progress < 1.1);

            setBullets(bulletsRef.current);
          }

          if (elapsed > 2.0 && bulletsRef.current.length === 0) {
            setCatPose("THROW");
          }

          // Cat prepares to throw stone
          if (elapsed > 2.4) {
            bulletsRef.current = [];
            setBullets([]);
            setMuzzleFlash(false);
            setCatPose("THROW");
            stageRef.current = "CAT_THROW";
            setStage("CAT_THROW");
            stageStartTimeRef.current = now;

            const newStone: Stone = {
              startX: cPos.x + 10,
              startY: cPos.y + 12,
              targetX: kPos.x + 17,
              targetY: surfaceY - KID_H + 16,
              progress: 0,
            };
            stoneRef.current = newStone;
            setStone(newStone);

            setStatusBubble({
              text: "*THROW STONE!*",
              x: cPos.x + 17,
              y: cPos.y - 10,
            });
          }
        }

        // STAGE 3: CAT THROWS STONE (Stone hits Kid's helmet!)
        else if (currentStage === "CAT_THROW") {
          setCatPose("THROW");
          const curStone = stoneRef.current;

          if (curStone) {
            const nextProgress = curStone.progress + dt * 2.5;

            if (nextProgress >= 1) {
              stoneRef.current = null;
              setStone(null);
              setPubgPose("KNOCKED_DOWN");
              setCatPose("SIT");
              stageRef.current = "KNOCKED_DOWN";
              setStage("KNOCKED_DOWN");
              stageStartTimeRef.current = now;

              const kPos = kidPosRef.current;
              setStatusBubble({
                text: "*CLANG! BONK!*",
                x: kPos.x + 17,
                y: surfaceY - KID_H - 14,
              });

              for (let i = 0; i < 9; i++) {
                setSparks((sp) => [
                  ...sp,
                  {
                    id: ++sparkIdCounter.current,
                    x: kPos.x + 17,
                    y: surfaceY - KID_H + 14,
                    color: i % 2 === 0 ? "#FACC15" : "#38BDF8",
                    vx: (Math.random() - 0.5) * 5,
                    vy: (Math.random() - 0.5) * 5,
                    life: 1.0,
                  },
                ]);
              }
            } else {
              const updated = { ...curStone, progress: nextProgress };
              stoneRef.current = updated;
              setStone(updated);
            }
          }
        }

        // STAGE 4: KNOCKED DOWN (Kid knocked flat, then hops to next card or restarts loop)
        else if (currentStage === "KNOCKED_DOWN") {
          setPubgPose("KNOCKED_DOWN");
          setCatPose("SIT");

          // After 2.3s, Kid stands up and picks next card in current view!
          if (elapsed > 2.3) {
            const visible = getVisibleCards();
            const candidates = visible.filter((el) => el !== currentCardRef.current);

            if (candidates.length > 0) {
              // Hopping to another random card visible in this section!
              const nextCard = candidates[Math.floor(Math.random() * candidates.length)];
              moveToCard(nextCard, true);
            } else {
              // Only 1 card visible on screen: continue fight loop on same card
              setPubgPose("RUN");
              setCatPose("RUN");
              stageRef.current = "CHASE";
              setStage("CHASE");
              stageStartTimeRef.current = now;
              const kPos = kidPosRef.current;
              setStatusBubble({
                text: "*GET UP & CHASE!*",
                x: kPos.x + 17,
                y: surfaceY - KID_H - 12,
              });
              setTimeout(() => setStatusBubble(null), 1200);
            }
          }
        }
      }

      animId = requestAnimationFrame(frame);
    };

    animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, [mounted, enabled, getVisibleCards, moveToCard]);

  if (!mounted || !enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 w-full pointer-events-none z-40 overflow-visible select-none"
    >
      {/* 1. Status Bubble */}
      {statusBubble && (
        <div
          className="absolute transform -translate-x-1/2 -translate-y-full px-3 py-1 rounded-full bg-black/90 backdrop-blur-md border border-cyan-400/60 shadow-[0_0_15px_rgba(0,245,255,0.4)] text-[10px] font-black uppercase tracking-wider text-cyan-300 animate-bounce transition-all duration-200"
          style={{
            left: `${statusBubble.x}px`,
            top: `${statusBubble.y}px`,
          }}
        >
          {statusBubble.text}
        </div>
      )}

      {/* 2. Flying Bullets */}
      {bullets.map((b) => (
        <div
          key={b.id}
          className="absolute w-3.5 h-1 rounded-full bg-gradient-to-r from-yellow-300 via-cyan-400 to-white shadow-[0_0_10px_#00F5FF]"
          style={{
            left: `${b.startX + (b.targetX - b.startX) * b.progress}px`,
            top: `${b.startY}px`,
          }}
        />
      ))}

      {/* 3. Flying Stone */}
      {stone && (
        <div
          className="absolute will-change-transform"
          style={{
            left: `${stone.startX + (stone.targetX - stone.startX) * stone.progress}px`,
            top: `${
              stone.startY +
              (stone.targetY - stone.startY) * stone.progress -
              Math.sin(stone.progress * Math.PI) * 36
            }px`,
          }}
        >
          <FlyingStoneGraphic rotation={stone.progress * 360 * 2.5} />
        </div>
      )}

      {/* 4. Impact Sparks */}
      {sparks.map((s) => (
        <div
          key={s.id}
          className="absolute w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            backgroundColor: s.color,
            color: s.color,
            opacity: s.life,
            transform: `scale(${s.life})`,
          }}
        />
      ))}

      {/* 5. Custom Dynamic SVG PUBG Kid Character */}
      <div
        className="absolute transition-transform duration-75 ease-out will-change-transform"
        style={{
          left: `${kidPos.x}px`,
          top: `${kidPos.y}px`,
          transform: `scaleX(${kidPos.facingLeft ? -1 : 1})`,
        }}
      >
        <PubgCharacterSVG pose={pubgPose} muzzleFlash={muzzleFlash} />

        {/* Comic Stars when Hit on Helmet & Knocked Down */}
        {pubgPose === "KNOCKED_DOWN" && (
          <div className="absolute -top-3.5 -left-1 flex gap-1 text-[12px] animate-spin">
            <span>⭐</span>
            <span>💫</span>
          </div>
        )}
      </div>

      {/* 6. Custom Dynamic SVG Cat Character */}
      <div
        className="absolute transition-transform duration-75 ease-out will-change-transform"
        style={{
          left: `${catPos.x}px`,
          top: `${catPos.y}px`,
          transform: `scaleX(${catPos.facingLeft ? -1 : 1})`,
        }}
      >
        <CatCharacterSVG pose={catPose} />
      </div>

      {/* 7. Unobtrusive Toggle Button in Bottom Left */}
      <button
        type="button"
        onClick={() => setEnabled(!enabled)}
        title="Toggle Card Battle Mischief"
        className="pointer-events-auto fixed bottom-4 left-4 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full liquid-glass border border-cyan-400/30 text-white/70 hover:text-white text-[11px] font-semibold backdrop-blur-xl shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F5FF]" />
        <span>Mini Battle: ON</span>
      </button>
    </div>
  );
}
