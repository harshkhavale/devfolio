import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14 } from "../assets";

const topImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7];
const bottomImages = [gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14];

export default function GalleryComponent() {
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);

  useEffect(() => {
    const animateRow = (row, direction) => {
      gsap.to(row, {
        xPercent: direction * -100,
        duration: 40,
        ease: "none",
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0),
        },
      });
    };

    if (rowOneRef.current && rowTwoRef.current) {
      animateRow(rowOneRef.current, 1);
      animateRow(rowTwoRef.current, -1);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden -mt-8">
      <div className="flex flex-col space-y-5">
        {/* Row 1 */}
        <div className="flex w-max space-x-4" ref={rowOneRef}>
          {[...topImages, ...topImages].map((src, index) => (
            <img key={`row1-${index}`} src={src} className="w-64 h-44 object-cover" alt={`Gallery ${index + 1}`} />
          ))}
        </div>

        {/* Row 2 (Reverse Direction) */}
        <div className="flex w-max space-x-4" ref={rowTwoRef}>
          {[...bottomImages, ...bottomImages].map((src, index) => (
            <img key={`row2-${index}`} src={src} className="w-64 h-44 object-cover" alt={`Gallery ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}