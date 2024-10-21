import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../../components/Heading";
import Heading2 from "../../components/Heading2";
import Button from "../../components/Button";
import Heading4 from "../../components/Heading4";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    name: "OASIS INFOBYTE",
    tenure: "FEB'23 - MAR'23 ",
    role: "Java Developer Intern",
    about:
      "Revolutionizing the product management industry with cutting-edge AI solutions. Developed an advanced system that blends AI and real-time interactions, making complex tasks smoother and more efficient.",
  },
  {
    name: "TECHNOHACKS",
    tenure: "OCT'23 - NOV'23",
    role: "C++ DEVELOPER INTERN",
    about: 
      "Boosted user engagement by developing and enhancing features for a mobile app. Streamlined deployment processes, making releases faster and more reliable.",
  },
];

const FloatingDiv = ({ text, position, offset = { x: 10, y: 10 }, visible }) => {
  return (
    <div
      className={` z-10 fixed pointer-events-none border-[#e8c6b4] border-[1px] bg-[#131313] p-6 rounded-md floating-div w-[30vw] flex-col gap-4 transition-all ease-linear ${
        visible ? "flex" : "hidden"
      }`}
      style={{
        left: offset.x,
        top: offset.y,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        opacity: 1, // Change this from 0.8 to 1
      }}
    >
      {/* <Heading4 className="text-[#e8c6b4]">{text.name}</Heading4> */}
      <Heading4 className="text-[#3A4B45]">{text.about}</Heading4>
    </div>
  );
};

function Work() {
  const containerRef = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  const [showFloating, setShowFloating] = useState(false);
  const [floatingText, setFloatingText] = useState({ name: "", about: "" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (showFloating) {
      const offset = { x: 20, y: 20 }; // You can adjust these values to change the distance
      gsap.to(".floating-div", {
        x: mousePosition.x + offset.x,
        y: mousePosition.y + offset.y,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [mousePosition, showFloating]);

  useEffect(() => {
    const container = containerRef.current;
    const firstRow = firstRowRef.current;
    const secondRow = secondRowRef.current;

    gsap.fromTo(
      container,
      { rotate: 10 },
      {
        rotate: -10,
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      firstRow,
      { x: "0rem" },
      {
        x: "-40rem",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      secondRow,
      { x: "-60rem" },
      {
        x: "0rem",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="bg-transparent h-full flex flex-col pt-[20vh] overflow-hidden">
      <div ref={containerRef}>
        <div ref={firstRowRef} className="w-full flex gap-12">
          <Heading>PRATIK</Heading>
          <div className="h-12 md:h-24 min-w-12 md:min-w-24 bg-[#C3923A] rounded-full m-auto" />
          <Heading>GAIKWAD</Heading>
          <div className="h-12 md:h-24 min-w-12 md:min-w-24 bg-[#C3923A] rounded-full m-auto" />
          <Heading>PRATIK</Heading>
        </div>
        <div ref={secondRowRef} className="w-full flex gap-12">
          <Heading>WORK</Heading>
          <div className="h-12 md:h-24 min-w-12 md:min-w-24 bg-[#C3923A] rounded-full m-auto" />
          <Heading>EXPERIENCES</Heading>
          <div className="h-12 md:h-24 min-w-12 md:min-w-24 bg-[#C3923A] rounded-full m-auto" />
          <Heading>WORK</Heading>
        </div>
      </div>
      <div className="flex my-[20vh] flex-col mx-[30px] ">
        <div className="hidden lg:flex">
          <table className="w-full table-fixed">
            <thead>
              <tr>
                <th className="w-1/3 text-left">
                  <Heading2 className="text-[#e8c6b4] border-b-[1px] border-opacity-35 border-[#e8c6b4] py-1">COMPANY</Heading2>
                </th>
                <th className="w-1/3 text-left">
                  <Heading2 className="text-[#e8c6b4] border-b-[1px] border-opacity-35 border-[#e8c6b4] py-1">TENURE</Heading2>
                </th>
                <th className="w-1/3 text-left">
                  <Heading2 className="text-[#e8c6b4] border-b-[1px] border-opacity-35 border-[#e8c6b4] py-1">ROLE</Heading2>
                </th>
              </tr>
            </thead>
            <tbody>
              {experiences.map((experience, index) => (
                <tr
                  key={index}
                  className="group relative cursor-pointer"
                  onMouseEnter={() => {
                    setShowFloating(true);
                    setFloatingText({ name: experience.name, about: experience.about });
                  }}
                  onMouseLeave={() => setShowFloating(false)}
                  onMouseMove={handleMouseMove}
                >
                  <td className="w-1/3 relative z-10">
                    <a href="https://linkedin.com/in/devxm" target="_blank">
                      <Heading2 className="text-[#e8c6b4] border-b-[1px] border-opacity-35 border-[#e8c6b4] py-1 group-hover:text-black transition-all duration-300 group-hover:pl-2">
                        {experience.name}
                      </Heading2>
                    </a>
                  </td>
                  <td className="w-1/3 relative z-10">
                    <a href="https://linkedin.com/in/devxm" target="_blank">
                      <Heading2 className="text-[#e8c6b4] border-b-[1px] border-opacity-35 border-[#e8c6b4] py-1 group-hover:text-black  transition-all duration-300 group-hover:ml-2">
                        {experience.tenure}
                      </Heading2>
                    </a>
                  </td>
                  <td className="w-1/3 relative z-10">
                    <a href="https://linkedin.com/in/devxm" target="_blank">
                      <Heading2 className="text-[#e8c6b4] border-b-[1px] border-opacity-35 border-[#e8c6b4] py-1 group-hover:text-black transition-all duration-300 group-hover:ml-2">
                        {experience.role}
                      </Heading2>
                    </a>
                  </td>
                  <div className="absolute inset-x-0 bottom-0 h-0 bg-[#e8c6b4] group-hover:h-full transition-all duration-300 ease-out"></div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex lg:hidden flex-col justify-center">
          {experiences.map((experience, index) => (
            <a href="https://linkedin.com/in/pratikg345" target="_blank">
              <div
                className="border-b-[1px] border-opacity-35 border-[#e8c6b4] flex flex-col py-2 group relative cursor-pointer overflow-hidden"
                key={index}
                onMouseEnter={() => {
                  setShowFloating(true);
                  setFloatingText({ name: experience.name, about: experience.about });
                }}
                onMouseLeave={() => setShowFloating(false)}
                onMouseMove={handleMouseMove}
              >
                <div className="absolute inset-0 bg-[#e8c6b4] transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></div>
                <Heading2 className="text-[#e8c6b4] relative z-10 group-hover:text-black transition-all duration-300 group-hover:pl-2">{experience.name}</Heading2>
                <Heading2 className="text-[#e8c6b4] relative z-10 group-hover:text-black transition-all duration-300 group-hover:pl-2">{experience.tenure}</Heading2>
                <Heading2 className="text-[#e8c6b4] relative z-10 group-hover:text-black transition-all duration-300 group-hover:pl-2">{experience.role}</Heading2>
              </div>
            </a>
          ))}
        </div>
        <div className="flex gap-8">
          <a href="https://linkedin.com/in/pratikg345" target="_blank">
            <Button text="LINKEDIN" className="mt-[5vh]" />
          </a>
          <a href="https://github.com/pratikg345" target="_blank">
            <Button text="GITHUB" className="mt-[5vh]" />
          </a>
        </div>
        <Heading2 className="w-[60vw] lg:w-[50vw] mx-auto indent-12 text-left mt-[10vh]  text-3xl md:text-4xl lg:text-5xl text-[#e8c6b4]">
          {"I HAD THE OPPORTUNITY TO WORK WITH AMAZING PEOPLE"}
        </Heading2>
      </div>
      <FloatingDiv
        text={floatingText}
        position={mousePosition}
        visible={showFloating}
        offset={{ x: 20, y: 20 }} // You can adjust these values
      />
    </div>
  );
}

export default Work;
