
import React,{ useEffect, useRef } from "react";
import { gsap } from "gsap";
import { gallery1, gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery9,gallery10} from "../assets";

const images = [
  gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery9,gallery10];

  export default function GalleryComponent() {
    const rowOneRef = useRef(null);
    const rowTwoRef = useRef(null);
  
    useEffect(() => {
      const rowOne = rowOneRef.current;
      const rowTwo = rowTwoRef.current;
  
      gsap.set(rowOne, { xPercent: 0 });
      gsap.set(rowTwo, { xPercent: -100 });
  
      gsap.to(rowOne, {
        xPercent: -100,
        duration: 40,
        ease: "linear",
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0),
        },
      });
  
      gsap.to(rowTwo, {
        xPercent: 0,
        duration: 40,
        ease: "linear",
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0),
        },
      });
    }, []);
  
    return (
      <div className="relative w-full overflow-hidden -mt-8">
        <div className="flex flex-col space-y-5">
          {/* Row 1 */}
          <div ref={rowOneRef} className="flex w-max space-x-4">
            {images.concat(images).map((src, index) => (
              <img key={`row1-${index}`} src={src} className="w-64 h-44 object-cover" alt={`Gallery ${index + 1}`} />
            ))}
          </div>
          
          {/* Row 2 (Reverse Direction) */}
          <div ref={rowTwoRef} className="flex w-max space-x-4">
            {images.concat(images).map((src, index) => (
              <img key={`row2-${index}`} src={src} className="w-64 h-44 object-cover" alt={`Gallery ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }