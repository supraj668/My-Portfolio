import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

// ScrollTrigger is one of the Plugin in GSAP -> it lets you trigger animations based on
// scroll position, so elements animate as they enter, leave, or move through the viewport.
gsap.registerPlugin(ScrollTrigger);

export default function ShowCaseSection() {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        },
      );
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
        },
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT SIDE */}
          
          <div ref={project1Ref} className="first-project-wrapper">
          <a href='https://github.com/supraj668/Distributed-Healthcare-Microservice-System'>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                Clinical Workflows Made Simple with a Powerful, AI-Enhanced
                Microservices Platform
              </h2>
              <p className="text-white-50 md:text-xl">
                An advanced microservices architecture leveraging Spring AI,
                Qdrant, and Redis to optimize clinical query accuracy and system
                efficiency.
              </p>
            </div>
          </a>
          </div>
          {/* RIGHT SIDE */}
          <div className="project-list-wrapper overflow-hidden">
            <a href='https://github.com/supraj668?tab=repositories'>
              <div className="project" ref={project2Ref}>
                <div className="image-wrapper bg-[#4b98a2]">
                  <img
                    src="/images/project2.png"
                    alt="Library Management Platform"
                  />
                </div>
                <h2>Distributed Banking Platform</h2>
              </div>
            </a>

            <a href="https://github.com/supraj668/FinFlow-Expense-Tracker">
              <div className="project" ref={project3Ref}>
                <div className="image-wrapper bg-[#8bb187]">
                  <img src="/images/project3.png" alt="YC Directory" />
                </div>
                <h2>FinFlow - Expense Management System</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
