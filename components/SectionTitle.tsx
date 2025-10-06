"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(useGSAP);

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });


  const setRefs = (node: HTMLDivElement) => {
    containerRef.current = node;
    inViewRef(node);
  };

  useGSAP(
    () => {
      if (!inView) return;

      const tl = gsap.timeline();

      tl.from(".section-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      tl.from(".section-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: containerRef, dependencies: [inView] }
  );

  return (
    <div
      ref={setRefs}
      className="w-full gap-4 flex items-center justify-center overflow-hidden"
    >
      <h2 className="section-title whitespace-nowrap text-3xl font-[800] text-center">
        {title}
      </h2>
      <div className="origin-left section-line w-full h-[5px] bg-gradient-to-r from-[var(--accent1)] to-[var(--accent2)] rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
