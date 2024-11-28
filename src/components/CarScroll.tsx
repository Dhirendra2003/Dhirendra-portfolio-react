import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import your image frames here
const imageFrames = [
  '../assets/car/001.webp',
  '../assets/car/001.webp',
  '../assets/car/001.webp',
  '../assets/car/001.webp',
  '../assets/car/001.webp',
 
];

const ScrollImageSequence = () => {
  const containerRef = useRef(null);
  const [isSequenceComplete, setIsSequenceComplete] = useState(false);

  // Use Framer Motion's scroll utilities
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to current frame index
  const currentFrame = useTransform(
    scrollYProgress,
    [0, 1],
    [0, imageFrames.length - 1],
    { clamp: true }
  );

  // State to track current frame
  const [frame, setFrame] = useState(0);

  // Update frame when scroll changes
  useEffect(() => {
    const unsubscribe = currentFrame.onChange((latest) => {
      setFrame(Math.floor(latest));
      
      // Check if sequence is complete
      if (latest >= imageFrames.length - 1) {
        setIsSequenceComplete(true);
      }
    });

    return () => unsubscribe();
  }, [currentFrame]);

  return (
    <div className="relative w-full">
      <div 
        ref={containerRef} 
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        <motion.div 
          className="w-full max-w-4xl aspect-video"
          style={{
            backgroundImage: `url(${imageFrames[frame]})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* Spacer to enable scrolling */}
      <div 
        className="h-[300vh] w-full" 
        style={{ 
          opacity: isSequenceComplete ? 1 : 0,
          pointerEvents: isSequenceComplete ? 'auto' : 'none'
        }}
      >
        <div className=" h-screen flex items-center justify-center">
          {isSequenceComplete && (
            <div className="text-center">
              <h2 className="text-2xl">Sequence Complete!</h2>
              <p>You can now continue scrolling</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScrollImageSequence;