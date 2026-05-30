import CountUp from 'react-countup';
import { counterItems } from '../constants';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCounter() {

  useGSAP(() => {
    // Target the counter-item class (the entire block)
    gsap.from('.counter-item',
      {
        // 1. Define the starting state (animate FROM)
        opacity: 0,
        y: 50, // Start 50px lower
        scale: 0.9, // Start slightly smaller
        stagger: 0.15, // Animate each item with a slight delay
        
        // 2. Add an actual animation property (removed the old transformOrigin)
        ease: 'power3.out', 
        duration: 1.2,

        scrollTrigger: {
          trigger: '#counter', // Use the main container as the trigger
          start: 'top 85%',   // Start the animation when the top of the counter is 85% down the viewport
          toggleActions: 'play none none none', // Play the animation once
        }
      })
  }, []) // Empty dependency array means this runs once on mount

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          // IMPORTANT CHANGE: Added the 'counter-item' class here for the GSAP trigger
          <div 
            key={index} // Added key to the outermost mapped element
            className="counter-item bg-[#271a34] rounded-lg p-10 flex flex-col justify-center"
          >
            <div
              className="counter-number text-white text-5xl font-semibold mb-2"
            >
              {/* CountUp handles its own counting animation. We only need the ScrollTrigger effect on the container. */}
              <CountUp suffix={item.suffix} end={item.value} enableScrollSpy={true} scrollSpyOnce={true} /> 
            </div>
            <div className="text-white text-lg ">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}