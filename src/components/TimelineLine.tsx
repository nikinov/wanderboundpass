"use client";

import React, { useEffect, useRef, useState } from 'react';

interface TimelineLineProps {
  points: { x: number; y: number }[];
}

const TimelineLine: React.FC<TimelineLineProps> = ({ points }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathD, setPathD] = useState('');
  console.log("TimelineLine Points:", points);

  useEffect(() => {
    if (points.length < 2) {
      setPathD('');
      return;
    }

    let newPathD = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prevPoint = points[i - 1];
      const currentPoint = points[i];
      const controlPointX = (prevPoint.x + currentPoint.x) / 2;
      const controlPointY = prevPoint.y;
      const controlPoint2X = (prevPoint.x + currentPoint.x) / 2;
      const controlPoint2Y = currentPoint.y;
      newPathD += ` C ${controlPointX} ${controlPointY}, ${controlPoint2X} ${controlPoint2Y}, ${currentPoint.x} ${currentPoint.y}`;
    }
    setPathD(newPathD);
  }, [points]);

  useEffect(() => {
    const pathElement = pathRef.current;
    if (pathElement) {
      const length = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = length.toString();
      pathElement.style.strokeDashoffset = length.toString();
      requestAnimationFrame(() => {
        pathElement.style.strokeDashoffset = '0';
      });
    }
  }, [pathD]);

  return (
    <path
      ref={pathRef}
      d={pathD}
      className="stroke-[2] fill-none stroke-url(#lineGradient) transition-stroke-dashoffset duration-1000 ease-in-out"
      strokeLinecap="round"
    />
  );
};

export default TimelineLine; 