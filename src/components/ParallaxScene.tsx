import { useEffect, useRef } from "react";
import gsap from "gsap";

// Import all assets
import heroBg from "@/assets/Hero_background.png";
import stars from "@/assets/stars_5.png";
import upperCanvas from "@/assets/upper_canvas_4.png";
import upperLeft from "@/assets/upper_left2.png";
import upperRight from "@/assets/upper_right3.png";
import upperSiva from "@/assets/upper_middle_siva.png";
import leftSideAsset from "@/assets/left_side16.png";
import rightSideAsset from "@/assets/right_side17.png";
import verticalBorderLeft from "@/assets/vertical_border_left.png";
import verticalBorderRight from "@/assets/vertical_border_right.png";
import horizontalBorder from "@/assets/horizontal_border.png";
import hotAirBalloon from "@/assets/hotAir_ballon6.png";
import palaceOnCloud from "@/assets/palace_on_cloud_8.png";
import moon from "@/assets/moon_7.png";
import coupleMountain from "@/assets/couple_mountain.png";
import leftRoseBranch from "@/assets/left_rose_upper_branch.png";
import rightRoseBranch from "@/assets/right_rose_upper_branch.png";
import ganeshLeft from "@/assets/ganeshji_left.png";
import ganeshRight from "@/assets/ganeshji_right.png";

const ParallaxScene = () => {
  const balloonRef = useRef<HTMLImageElement>(null);
  const moonRef = useRef<HTMLImageElement>(null);
  const palaceRef = useRef<HTMLImageElement>(null);
  const coupleRef = useRef<HTMLImageElement>(null);
  const leftRose1Ref = useRef<HTMLImageElement>(null);
  const leftRose2Ref = useRef<HTMLImageElement>(null);
  const rightRose1Ref = useRef<HTMLImageElement>(null);
  const rightRose2Ref = useRef<HTMLImageElement>(null);
  const leftSideRef = useRef<HTMLImageElement>(null);
  const rightSideRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hot Air Balloon - gentle sway with rotation
      if (balloonRef.current) {
        gsap.to(balloonRef.current, {
          y: -25,
          x: 12,
          rotation: 4,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // Moon - subtle glow pulse
      if (moonRef.current) {
        gsap.to(moonRef.current, {
          scale: 1.05,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // Palace - gentle float with synchronized horizontal movement
      if (palaceRef.current) {
        // Vertical floating
        gsap.to(palaceRef.current, {
          y: -18,
          duration: 5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
        
        // Horizontal left-right movement (MORE movement, FASTER)
        gsap.to(palaceRef.current, {
          x: 100,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // Couple - subtle movement
      if (coupleRef.current) {
        gsap.to(coupleRef.current, {
          y: -12,
          duration: 5.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // Left Side Asset - synchronized gentle sway (LESS movement, FASTER)
      if (leftSideRef.current) {
        gsap.to(leftSideRef.current, {
          x: 19,
          scale: 1.015,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // Right Side Asset - synchronized gentle sway (LESS movement, FASTER)
      if (rightSideRef.current) {
        gsap.to(rightSideRef.current, {
          x: -8,
          scale: 1.020,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // Left Rose Branch 1 - gentle sway
      if (leftRose1Ref.current) {
        gsap.to(leftRose1Ref.current, {
          x: -7,
          y: 12,
          rotation: -3,
          duration: 3.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // Left Rose Branch 2 - offset sway
      if (leftRose2Ref.current) {
        gsap.to(leftRose2Ref.current, {
          x: -5,
          y: 9,
          rotation: -2.2,
          duration: 3.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.4,
        });
      }

      // Right Rose Branch 1 - gentle sway
      if (rightRose1Ref.current) {
        gsap.to(rightRose1Ref.current, {
          x: 7,
          y: 12,
          rotation: 3,
          duration: 3.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 0.6,
        });
      }

      // Right Rose Branch 2 - offset sway
      if (rightRose2Ref.current) {
        gsap.to(rightRose2Ref.current, {
          x: 5,
          y: 9,
          rotation: 2.2,
          duration: 3.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 1,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#1a0000] overflow-hidden">
      {/* Consistent aspect ratio container for all screen sizes */}
      <div 
        className="relative w-full" 
        style={{ 
          paddingBottom: '163%',
          minHeight: '100vh' 
        }}
      >
        <div className="absolute inset-0 w-full h-full">
        
          {/* Z-Index 0: Hero Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="" 
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.98)' }}
            />
          </div>

          {/* Z-Index 20: Upper Canvas - Frame on top */}
          <div className="absolute top-0 left-0 right-0 z-[200] pointer-events-none">
            <img 
              src={upperCanvas} 
              alt="" 
              className="w-full h-auto"
              style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
                transform: 'scaleY(1)',
                width: 'clamp(100%, 100vw, 100%)',
               }}
            />
          </div>

          {/* Content container with top offset - responsive for all screens */}
          <div className="absolute inset-0 pt-[clamp(5%,6vw,8%)]">
            
            {/* Z-Index 0.5: Stars */}
            <div className="absolute inset-0 z-[5] pointer-events-none">
              <img 
                src={stars} 
                alt="" 
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(1.1)' }}
              />
            </div>

            {/* Z-Index 1: Main Floating Elements */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              {/* Hot Air Balloon - Rotated, positioned at 37% */}
              <img 
                ref={balloonRef}
                src={hotAirBalloon} 
                alt="" 
                className="absolute top-[37%] left-[22%] h-auto"
                style={{ 
                  width: 'clamp(14%, 12vw, 22%)',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6)) drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
                  transform: 'rotate(-26deg)',
                  transformOrigin: 'center center'
                }}
              />
              
              {/* Moon - positioned at 38% */}
              <img 
                ref={moonRef}
                src={moon} 
                alt="" 
                className="absolute top-[38%] right-[20%] h-auto"
                style={{ 
                  width: 'clamp(10%, 13vw, 16%)',
                  transform: 'rotate(-30deg)',
                  transformOrigin: 'center center',
                  filter: 'drop-shadow(0 0 30px rgba(255,223,186,0.9)) drop-shadow(0 0 50px rgba(255,223,186,0.5)) drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                }}
              />
              
              {/* Palace on Cloud - positioned at 50% with horizontal movement */}
              <img 
                ref={palaceRef}
                src={palaceOnCloud} 
                alt="" 
                className="absolute top-[50%] left-1/2 -translate-x-1/2 h-auto"
                style={{ 
                  width: 'clamp(40%, 38vw, 56%)',
                  filter: 'drop-shadow(0 25px 45px rgba(0,0,0,0.7)) drop-shadow(0 12px 24px rgba(0,0,0,0.5))',
                  transformOrigin: 'center center'
                }}
              />
              
              {/* Couple Mountain - scales properly */}
              <img 
                ref={coupleRef}
                src={coupleMountain} 
                alt="" 
                className="absolute bottom-[-3%] left-1/2 -translate-x-1/2 h-auto"
                style={{ 
                  width: 'clamp(100%, 100vw, 100%)',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.65)) drop-shadow(0 10px 20px rgba(0,0,0,0.45))'
                }}
              />
            </div>

            {/* Z-Index 4: Sides with synchronized animations */}
            <div className="absolute inset-0 z-[40] pointer-events-none">
              <img 
                ref={leftSideRef}
                src={leftSideAsset} 
                alt="" 
                className="absolute left-[-1%] top-0 h-full w-auto object-contain object-left"
                style={{ 
                  maxWidth: 'clamp(20%, 25vw, 30%)',
                  filter: 'drop-shadow(15px 0 30px rgba(0,0,0,0.8)) drop-shadow(8px 0 15px rgba(0,0,0,0.6))',
                  transformOrigin: 'center center'
                }}
              />
              <img 
                ref={rightSideRef}
                src={rightSideAsset} 
                alt="" 
                className="absolute right-[-1%] top-0 h-full w-auto object-contain object-right"
                style={{ 
                  maxWidth: 'clamp(20%, 25vw, 30%)',
                  filter: 'drop-shadow(-15px 0 30px rgba(0,0,0,0.8)) drop-shadow(-8px 0 15px rgba(0,0,0,0.6))',
                  transformOrigin: 'center center'
                }}
              />
            </div>

            {/* Z-Index 8: Upper Middle Siva - positioned to attach with upper canvas on mobile, fully visible on larger screens */}
            <div 
              className="absolute z-[80] pointer-events-none left-1/2 -translate-x-1/2 md:pt-[3%] md:mt-[2%] lg:pt-[5%] lg:mt-[3%] xl:pt-[7%] xl:mt-[4%] 2xl:pt-[8%] 2xl:mt-[5%]"
              style={{
                top: 'clamp(10%, 13vw, 16%)',
                width: '100%',
              }}
            >
              {/* Siva - scales properly, ensures full visibility on all screen sizes */}
              <img 
                src={upperSiva} 
                alt="" 
                className="mx-auto h-auto"
                style={{ 
                  width: 'clamp(38%, 45vw, 52%)',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 22px 40px rgba(0,0,0,0.75)) drop-shadow(0 10px 20px rgba(0,0,0,0.6))'
                }}
              />
            </div>

            {/* Z-Index 9: Rose Branches - positioned to match Siva */}
            <div 
              className="absolute z-[90] pointer-events-none left-1/2 -translate-x-1/2"
              style={{
                top: 'clamp(10%, 13vw, 16%)',
                width: '100%',
              }}
            >
              {/* Left Rose Branch 1 - Outer at -2% */}
              <img 
                ref={leftRose1Ref}
                src={leftRoseBranch} 
                alt="" 
                className="absolute left-[5%] top-[28%] h-auto origin-top-right"
                style={{ 
                  width: 'clamp(28%, 34vw, 40%)',
                  filter: 'drop-shadow(10px 20px 30px rgba(0,0,0,0.75)) drop-shadow(5px 10px 15px rgba(0,0,0,0.55))',
                  transform: 'scaleY(1.15)'
                }}
              />
              
              {/* Left Rose Branch 2 - Inner at 6% */}
              <img 
                ref={leftRose2Ref}
                src={leftRoseBranch} 
                alt="" 
                className="absolute left-[-9%] top-[38%] h-auto origin-top-right"
                style={{ 
                  width: 'clamp(26%, 52vw, 38%)',
                  filter: 'drop-shadow(8px 18px 28px rgba(0,0,0,0.7)) drop-shadow(4px 9px 14px rgba(0,0,0,0.5))',
                  transform: 'scaleY(1.15)'
                }}
              />
              
              {/* Right Rose Branch 1 - Outer at 1% */}
              <img 
                ref={rightRose1Ref}
                src={rightRoseBranch} 
                alt="" 
                className="absolute right-[5%] top-[30%] h-auto origin-top-left"
                style={{ 
                  width: 'clamp(28%, 34vw, 40%)',
                  filter: 'drop-shadow(-10px 20px 30px rgba(0,0,0,0.75)) drop-shadow(-5px 10px 15px rgba(0,0,0,0.55))',
                  transform: 'scaleY(1.15)'
                }}
              />
              
              {/* Right Rose Branch 2 - Inner at 6% */}
              <img 
                ref={rightRose2Ref}
                src={rightRoseBranch} 
                alt="" 
                className="absolute right-[-9%] top-[28%] h-auto origin-top-left"
                style={{ 
                  width: 'clamp(26%, 44vw, 38%)',
                  filter: 'drop-shadow(-8px 18px 28px rgba(0,0,0,0.7)) drop-shadow(-4px 9px 14px rgba(0,0,0,0.5))',
                  transform: 'scaleY(1.15)'
                }}
              />
            </div>

            {/* Z-Index 10: Arch Sides (Upper Left & Right) - aligned with Siva */}
            <div className="absolute top-[clamp(9%,10vw,12%)] left-0 right-0 z-[10] pointer-events-none">
              <img 
                src={upperLeft} 
                alt="" 
                className="absolute left-[-5%] top-0 w-[44%] h-auto"
                style={{ 
                  filter: 'drop-shadow(10px 18px 30px rgba(0,0,0,0.85)) drop-shadow(5px 10px 18px rgba(0,0,0,0.65))'
                }}
              />
              <img 
                src={upperRight} 
                alt="" 
                className="absolute right-0 top-0 w-[44%] h-auto"
                style={{ 
                  filter: 'drop-shadow(-10px 18px 30px rgba(0,0,0,0.85)) drop-shadow(-5px 10px 18px rgba(0,0,0,0.65))'
                }}
              />
            </div>

            {/* Z-Index 12: Vertical Borders */}
            <div className="absolute inset-0 z-[120] pointer-events-none">
              <div className="relative w-full h-full">
                <img 
                  src={verticalBorderLeft} 
                  alt="" 
                  className="absolute left-0 top-0 h-full w-auto max-w-[5%] object-cover object-left"
                  style={{ filter: 'drop-shadow(4px 0 8px rgba(0,0,0,0.3))' }}
                />
                <img 
                  src={verticalBorderRight} 
                  alt="" 
                  className="absolute right-0 top-0 h-full w-auto max-w-[5%] object-cover object-right"
                  style={{ filter: 'drop-shadow(-4px 0 8px rgba(0,0,0,0.3))' }}
                />
              </div>
            </div>

            {/* Z-Index 13: Horizontal Border */}
            <div className="absolute bottom-0 left-0 w-full z-[130] pointer-events-none">
              <img 
                src={horizontalBorder} 
                alt="" 
                className="w-full h-auto object-cover"
                style={{ filter: 'drop-shadow(0 -4px 8px rgba(0,0,0,0.3))' }}
              />
            </div>

            {/* Ganesha Icons - scales properly */}
            <div className="absolute bottom-[0%] left-[0%] z-[150] max-w-[140px] pointer-events-none"
              style={{ width: 'clamp(11%, 14vw, 18%)' }}>
              <img 
                src={ganeshLeft} 
                alt="Ganesha" 
                className="w-full h-auto" 
                style={{ 
                  filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.85)) drop-shadow(0 6px 12px rgba(0,0,0,0.65))'
                }}
              />
            </div>
            <div className="absolute bottom-[0%] right-[0%] z-[150] max-w-[140px] pointer-events-none"
              style={{ width: 'clamp(11%, 14vw, 18%)' }}>
              <img 
                src={ganeshRight} 
                alt="Ganesha" 
                className="w-full h-auto" 
                style={{ 
                  filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.85)) drop-shadow(0 6px 12px rgba(0,0,0,0.65))'
                }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxScene;