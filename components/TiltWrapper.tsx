"use client";

import Parallax from "react-parallax-tilt";
import { ReactNode } from "react";

interface TiltWrapperProps {
  children: ReactNode;
  className?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  perspective?: number;
  scale?: number;
  transitionSpeed?: number;
  gyroscope?: boolean;
}

const TiltWrapper = ({
  children,
  className = "",
  tiltMaxAngleX = 15,
  tiltMaxAngleY = 15,
  perspective = 1000,
  scale = 1.05,
  transitionSpeed = 400,
  gyroscope = true,
}: TiltWrapperProps) => {
  return (
    <Parallax
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      perspective={perspective}
      scale={scale}
      transitionSpeed={transitionSpeed}
      gyroscope={gyroscope}
      className={className}
    >
      {children}
    </Parallax>
  );
};

export default TiltWrapper;
