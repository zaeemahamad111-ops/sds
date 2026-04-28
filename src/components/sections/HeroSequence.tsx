"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import gsap from "gsap";

const TOTAL_FRAMES = 101;
const FRAME_PATH = (i: number) =>
  `/hero-frames/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;

const SCENES = [
  {
    range: [0.05, 0.30] as [number, number],
    eyebrow: "HERITAGE SINCE 1994",
    line1: "Sourced from",
    line2: "Prime Terrain.",
    sub: "Direct partnerships with elite farmers ensure every spice harvest captures the pure essence of Indian soil.",
  },
  {
    range: [0.40, 0.65] as [number, number],
    eyebrow: "GLOBAL LOGISTICS",
    line1: "Seamless Flow",
    line2: "Across Borders.",
    sub: "Our integrated supply chain bridges the distance between origin and destination with zero compromise.",
  },
  {
    range: [0.75, 0.95] as [number, number],
    eyebrow: "VERIFIED QUALITY",
    line1: "Purity that",
    line2: "Defines Luxury.",
    sub: "Advanced laboratory testing and export-grade packaging preserve the aromatic profile of every shipment.",
  },
];

const GOLD = "#D4AF37";

function eio(t: number) {
  const c = Math.max(0, Math.min(1, t));
  return c < 0.5 ? 4 * c * c * c : 1 - Math.pow(-2 * c + 2, 3) / 2;
}

export default function HeroSequence() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const loaderBarRef = useRef<HTMLDivElement>(null);
  const loaderTextRef = useRef<HTMLSpanElement>(null);
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fillRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const counterRef = useRef<HTMLSpanElement>(null);

  const bitmapsRef = useRef<ImageBitmap[]>([]);
  const prevFrameRef = useRef(-1);
  const prevSceneRef = useRef(-1);

  // Lenis scroll position drives everything — no extra smoothing needed
  const rawProgressRef = useRef(0);

  // ─── Sync with Lenis scroll ─────────────────────────────────────────────────
  useLenis(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    
    // Use getBoundingClientRect for more reliable position tracking in production
    const rect = wrap.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollable = wrap.offsetHeight - windowHeight;
    
    // Progress is based on how much of the wrapper has passed the top of the viewport
    const progress = Math.min(1, Math.max(0, -rect.top / totalScrollable));
    rawProgressRef.current = progress;
  });

  // ─── Canvas sizing ──────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      if (prevFrameRef.current >= 0) drawBitmap(prevFrameRef.current);
    };

    function drawBitmap(idx: number) {
      const bmp = bitmapsRef.current[idx];
      if (!canvas || !bmp) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;
      const { width: cw, height: ch } = canvas;
      const scale = Math.max(cw / bmp.width, ch / bmp.height);
      const sw = bmp.width * scale;
      const sh = bmp.height * scale;
      ctx.drawImage(bmp, (cw - sw) / 2, (ch - sh) / 2, sw, sh);
    }

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // ─── Preload + GSAP tick ────────────────────────────────────────────────────
  useEffect(() => {
    let loaded = 0;
    let completed = false;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const drawBitmap = (idx: number) => {
      const canvas = canvasRef.current;
      const bmp = bitmapsRef.current[idx];
      if (!canvas || !bmp) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;
      const { width: cw, height: ch } = canvas;
      const scale = Math.max(cw / bmp.width, ch / bmp.height);
      const sw = bmp.width * scale;
      const sh = bmp.height * scale;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(bmp, (cw - sw) / 2, (ch - sh) / 2, sw, sh);
    };

    const onComplete = () => {
      if (completed) return;
      completed = true;
      if (loaderRef.current) {
        loaderRef.current.style.opacity = "0";
        setTimeout(() => {
          if (loaderRef.current) loaderRef.current.style.display = "none";
        }, 600);
      }
      drawBitmap(0);
    };

    const failSafe = setTimeout(onComplete, 8000); 

    const loadFrame = async (i: number) => {
      if (i < 0 || i >= TOTAL_FRAMES || bitmapsRef.current[i]) return;
      try {
        const res = await fetch(FRAME_PATH(i + 1));
        const blob = await res.blob();
        bitmapsRef.current[i] = await createImageBitmap(blob);
        if (i === 0 && prevFrameRef.current === -1) drawBitmap(0);
      } catch (err) {
        console.warn("Frame fail", i);
      } finally {
        loaded++;
        const pct = Math.round((loaded / TOTAL_FRAMES) * 100);
        if (loaderBarRef.current) loaderBarRef.current.style.width = `${pct}%`;
        if (loaderTextRef.current) loaderTextRef.current.textContent = `${pct}%`;
        if (loaded >= (isMobile ? 1 : TOTAL_FRAMES)) { 
          clearTimeout(failSafe); 
          onComplete(); 
        }
      }
    };

    const runBatches = async () => {
      const BATCH = isMobile ? 1 : 10;
      const PRELOAD_COUNT = isMobile ? 1 : 30;
      for (let s = 0; s < PRELOAD_COUNT; s += BATCH) {
        const batch: Promise<void>[] = [];
        for (let i = s; i < Math.min(s + BATCH, PRELOAD_COUNT); i++) {
          batch.push(loadFrame(i));
        }
        await Promise.allSettled(batch);
      }
      onComplete();
    };
    runBatches();

    // ─── GSAP tick: directly mirror Lenis → draw → UI ──────────────────────
    const tick = () => {
      try {
        const p = rawProgressRef.current;
        const frameIdx = Math.min(TOTAL_FRAMES - 1, Math.round(p * (TOTAL_FRAMES - 1)));

        if (frameIdx !== prevFrameRef.current) {
          if (bitmapsRef.current[frameIdx]) {
            prevFrameRef.current = frameIdx;
            drawBitmap(frameIdx);
          } else {
            loadFrame(frameIdx);
          }

          // Strict Memory Management
          const WINDOW = isMobile ? 2 : 15;
          bitmapsRef.current.forEach((bmp, i) => {
            if (bmp && (i < frameIdx - WINDOW || i > frameIdx + WINDOW)) {
              bmp.close();
              bitmapsRef.current[i] = undefined as any;
            }
          });
        }

        if (fillRef.current) fillRef.current.style.transform = `scaleY(${p})`;
        if (scrollHintRef.current)
          scrollHintRef.current.style.opacity = String(Math.max(0, 1 - p / 0.06));

        // Scene overlays
        let activeScene = -1;
        SCENES.forEach((scene, i) => {
          const el = sceneRefs.current[i];
          if (!el) return;
          const [lo, hi] = scene.range;
          const FADE = 0.08;
          let opacity = 0, ty = 0;
          if (p > lo - FADE && p < hi + FADE) {
            const inT = eio((p - (lo - FADE)) / FADE);
            const outT = eio(Math.max(0, p - hi) / FADE);
            opacity = inT * (1 - outT);
            ty = (1 - inT) * 18 - outT * 12;
          }
          el.style.opacity = String(opacity);
          el.style.transform = `translate3d(0,${ty}px,0)`;
          if (opacity > 0.5) activeScene = i;
        });

        if (activeScene !== prevSceneRef.current) {
          prevSceneRef.current = activeScene;
          dotRefs.current.forEach((dot, di) => {
            if (!dot) return;
            dot.style.height = di === activeScene ? "28px" : "5px";
            dot.style.backgroundColor =
              di === activeScene ? GOLD : "rgba(255,255,255,0.12)";
          });
          if (counterRef.current)
            counterRef.current.textContent =
              activeScene >= 0 ? `${activeScene + 1} / 3` : "— / 3";
        }

        if (ctaRef.current) {
          const t = Math.max(0, (p - 0.88) / 0.1);
          ctaRef.current.style.opacity = String(Math.min(1, t));
          ctaRef.current.style.transform = `translate3d(-50%, ${(1 - Math.min(1, t)) * 16}px, 0)`;
          ctaRef.current.style.pointerEvents = t > 0.5 ? "auto" : "none";
        }
      } catch (e) {
        // Silently fail if frame is not ready
      }
    };

    gsap.ticker.fps(60);
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      clearTimeout(failSafe);
      bitmapsRef.current.forEach((bmp) => bmp?.close());
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ height: "480vh" }} className="relative w-full bg-primary-dark">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0" style={{ imageRendering: "auto" }} />

        {SCENES.map((scene, i) => (
          <div
            key={i}
            ref={(el) => { sceneRefs.current[i] = el; }}
            className="absolute left-0 top-0 bottom-0 w-full md:w-1/2 flex flex-col justify-start md:justify-center items-center md:items-start text-center md:text-left px-5 md:px-20 pt-[15vh] md:pt-0 pointer-events-none"
            style={{ opacity: 0, willChange: "opacity, transform" }}
          >
            <div className="bg-white/95 backdrop-blur-xl p-6 md:p-12 shadow-2xl shadow-primary-dark/20 border border-white/50 rounded-sm w-full max-w-[340px] md:max-w-none">
              <span className="block mb-3 md:mb-4 uppercase font-medium tracking-[0.45em] text-[9px] text-primary">
                {scene.eyebrow}
              </span>
              <h1 className="font-serif leading-[1.08] mb-4 md:mb-6 text-primary-dark text-3xl md:text-6xl xl:text-7xl">
                <span className="block">{scene.line1}</span>
                <span className="block italic text-secondary">{scene.line2}</span>
              </h1>
              <p className="font-sans leading-relaxed text-gray-600 max-w-sm text-sm md:text-[0.95rem]">{scene.sub}</p>
            </div>
          </div>
        ))}

        <div ref={ctaRef} className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-0 z-30 pointer-events-none">
          <button className="bg-secondary text-white px-10 py-4 font-semibold uppercase tracking-[0.2em] text-xs hover:opacity-90 transition-opacity shadow-2xl shadow-black/60">
            Explore Collections
          </button>
        </div>

        <div className="absolute left-7 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-5 z-20">
          <div className="flex flex-col gap-[6px]">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                ref={(el) => { dotRefs.current[i] = el; }}
                className="w-[2px] rounded-full transition-all duration-500"
                style={{ height: "5px", backgroundColor: "rgba(255,255,255,0.12)" }}
              />
            ))}
          </div>
          <div className="w-[1px] h-20 relative overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
            <div ref={fillRef} className="absolute top-0 left-0 w-full h-full origin-top" style={{ transform: "scaleY(0)", backgroundColor: GOLD }} />
          </div>
          <span ref={counterRef} className="text-[8px] tracking-[0.3em] text-white/25" style={{ writingMode: "vertical-rl" }}>
            — / 3
          </span>
        </div>

        <div ref={scrollHintRef} className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[9px] tracking-[0.35em] text-white/30 uppercase">Scroll</span>
          <div className="w-[1px] h-9" style={{ background: `linear-gradient(to bottom, ${GOLD}, transparent)` }} />
        </div>

        <div ref={loaderRef} className="absolute inset-0 flex flex-col items-center justify-center z-50 transition-opacity duration-700 bg-primary-dark">
          <div className="animate-pulse flex flex-col items-center">
            <img src="/logo.jpeg" alt="SD&S Export Logo" className="h-20 w-auto mb-6 object-contain rounded-sm" />
            <p className="font-serif text-2xl tracking-[0.3em] text-white/90 uppercase mb-12">SD&amp;S Export</p>
          </div>
          <div className="w-64 h-[2px] relative overflow-hidden mb-6 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
            <div ref={loaderBarRef} className="absolute top-0 left-0 h-full transition-all duration-150 rounded-full" style={{ width: "0%", backgroundColor: GOLD }} />
          </div>
          <span ref={loaderTextRef} className="text-[11px] tracking-[0.5em] text-secondary font-bold">0%</span>
        </div>
      </div>
    </div>
  );
}
