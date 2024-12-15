import React, { useEffect, useRef, useState } from "react";
import Heading from "../../components/Heading";
import RandomCharacter from "../../components/RandomCharacter";
import Heading2 from "../../components/Heading2";
import Button from "../../components/Button";

const interests = ["FULL STACK DEVELOPMENT", "NEW IDEAS" , "FRONTEND DEVELOPMENT", "BACKEND DEVELOPMENT", "PIZZA"];

function Contact() {
  const containerRef = useRef(0);
  const [landingOffset, setLandingOffset] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(containerRef.current.getBoundingClientRect().height);
    const handleScroll = () => {
      const offset = window.outerHeight - containerRef.current.getBoundingClientRect().top;
      setLandingOffset(offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const word1 = "LET'S".split("");
  const word2 = "CONNECT".split("");
  return (
    <div className="px-[30px] min-h-screen flex flex-col justify-between" ref={containerRef}>
      <div >
        <div className="flex mb-4">
          {word1.map((char, index) => (
            <Heading key={index}>
              <RandomCharacter defaultValue={char} landingOffset={landingOffset} biasness={(index + 0.5) / word1.length} height={height} />
            </Heading>
          ))}
        </div>
        <div className="flex mb-4">
          {word2.map((char, index) => (
            <Heading key={index}>
              <RandomCharacter
                defaultValue={char}
                landingOffset={landingOffset}
                biasness={(word1.length + index + 0.5) / (word1.length + word2.length)}
                height={height}
              />
            </Heading>
          ))}
        </div>
        <div className="mt-[5vh]">
          <Heading2 className="mb-[5vh]">{"I'M ALWAYS INTERESTED ABOUT"}</Heading2>
          <div className=" flex flex-wrap gap-2">
            {interests.map((text) => (
              <a key={text}href="mailto:nothefakedevesh@gmail.com">
                <Button  text={text} />
              </a>
            ))}
          </div>
          <div />
        </div>
      </div>
      <div className="mt-[20vh] h-fit flex wrap gap-3 items-center mb-[2vh]">
        <Heading2>{"HAVE A PROJECT IN MIND?"}</Heading2>
        <a href="mailto:mrpratikonline@gamil.com">
          <Button text="CONTACT ME" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
