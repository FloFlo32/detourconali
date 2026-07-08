"use client";

import { useState, useRef } from "react";
import { Play, X, Clock } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";

const videos = [
  {
    id: "waterfall",
    title: "Hike to a Hidden Waterfall",
    duration: "0:55",
    thumbnail: "/ingested/detourconali/vid-waterfall-thumb.webp",
    src: "/video-waterfall.mp4",
    wixUrl:
      "https://www.detourconali.com/?wix-vod-video-id=ca8611764e1744e7a59e2856cfcc284e&wix-vod-comp-id=comp-kxfoxz8d",
    description:
      "Follow our guides through lush Puerto Rico countryside to a breathtaking hidden waterfall only locals know about.",
  },
  {
    id: "hidden-gem",
    title: "Hike to a Hidden Gem",
    duration: "1:19",
    thumbnail: "/ingested/detourconali/vid-hidden-gem-thumb.webp",
    src: "/video-hidden-gem.mp4",
    wixUrl:
      "https://www.detourconali.com/?wix-vod-video-id=5ff5cf04921e4f9d85e04e8ba1a88963&wix-vod-comp-id=comp-kxfoxz8d",
    description:
      "Explore a secret cave system, natural spring, and community pool tucked away in Manatí — pure Puerto Rico magic.",
  },
];

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[0] | null>(null);
  const probeRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const modalRef = useRef<HTMLVideoElement | null>(null);

  const handleClick = (v: (typeof videos)[0]) => {
    const probe = probeRefs.current[v.id];
    if (probe && probe.readyState >= 1) {
      setActiveVideo(v);
    } else {
      window.open(v.wixUrl, "_blank", "noopener,noreferrer");
    }
  };

  const closeModal = () => {
    modalRef.current?.pause();
    setActiveVideo(null);
  };

  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-3 flex items-center justify-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Watch Our Tours
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl text-background">
            See Puerto Rico Like Never Before
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-center text-background/60">
            Real footage from real tours. See exactly what you&apos;ll experience
            before you book.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {videos.map((v) => (
              <div
                key={v.id}
                className="group relative overflow-hidden rounded-2xl bg-black cursor-pointer"
                onClick={() => handleClick(v)}
              >
                <div className="aspect-video relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex size-16 items-center justify-center rounded-full bg-white/20 border-2 border-white/60 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 group-hover:border-white">
                      <Play className="size-7 text-white fill-white ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-1">
                    <Clock className="size-3 text-white/70" />
                    <span className="text-xs font-medium text-white">{v.duration}</span>
                  </div>
                </div>

                <div className="px-5 py-4 bg-foreground/80">
                  <h3 className="font-semibold text-base text-background leading-snug">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-sm text-background/60 leading-relaxed">
                    {v.description}
                  </p>
                </div>

                {/* Probe element — detects if the MP4 file is available */}
                <video
                  ref={(el) => { probeRefs.current[v.id] = el; }}
                  src={v.src}
                  className="hidden"
                  preload="metadata"
                  playsInline
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close video"
          >
            <X className="size-5" />
          </button>
          <div
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalRef}
              src={activeVideo.src}
              className="size-full rounded-xl"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}
