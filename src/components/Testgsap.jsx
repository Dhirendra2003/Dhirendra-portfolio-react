import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Testgsap() {
  const dimension=window.innerWidth;
  useEffect(() => {
    const frameCount = 50;
    const urls = new Array(frameCount)
      .fill()
      .map((_, i) => `https://raw.githubusercontent.com/Dhirendra2003/portfolio-react/refs/heads/master/src/assets/00${i+10}.webp `);

    imageSequence({
      urls, // Array of image URLs
      canvas: "#image-sequence", // <canvas> object to draw images to
      scrollTrigger: {
        start: "75% 100%",
        end: "85% 100%",
        scrub: true, // important!
      },
    });
  }, []);

  const renderImageContain = (ctx, image, canvasWidth, canvasHeight) => {
    // Clear the canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Calculate aspect ratios
    const canvasAspect = canvasWidth / canvasHeight;
    const imageAspect = image.width / image.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (imageAspect > canvasAspect) {
      // Image is wider than the canvas
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imageAspect;
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      // Image is taller than the canvas
      drawWidth = canvasHeight * imageAspect;
      drawHeight = canvasHeight;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    }

    // Draw the image centered and scaled
    ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
  };

  const imageSequence = (config) => {
    let playhead = { frame: 0 },
      canvas = document.querySelector(config.canvas),
      ctx = canvas?.getContext("2d"),
      curFrame = -1,
      images,
      updateImage = function () {
        const frame = Math.round(playhead.frame);
        if (frame !== curFrame && images[frame]) {
          renderImageContain(ctx, images[frame], canvas.width, canvas.height);
          curFrame = frame;
        }
      };

    images = config.urls.map((url, i) => {
      const img = new Image();
      img.src = url;
      i || (img.onload = updateImage); // Trigger update on the first image load
      return img;
    });

    return gsap.to(playhead, {
      frame: images.length - 1,
      ease: "none",
      onUpdate: updateImage,
      duration: images.length / (config.fps || 30),
      paused: !!config.paused,
      scrollTrigger: config.scrollTrigger,
    });
  };

  return (
    <div
      className="flex h-[100vh]  justify-center items-baseline  top-0 sticky bg-black"
    >
      <canvas
        id="image-sequence"
        height={Number(dimension*0.42*0.7).toFixed()}
        width={Number(dimension*0.7).toFixed()}
        className="bg-black top-20 sticky"
      />
    </div>
  );
}

export default Testgsap;
