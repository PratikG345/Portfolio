import RandomCharacter from "../../components/RandomCharacter";
import Button from "../../components/Button";
import Heading2 from "../../components/Heading2";
import Heading from "../../components/Heading";

function About({ landingOffset, aboutRef, contactRef }) {
  const word1 = "innovative".split("");
  const word2 = "SOFTWARE".split("");
  const word3 = "ENGINEER".split("");

  const windowHeight = window.innerHeight / 2;

  const handleContactScroll = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="absolute px-[30px] flex flex-col justify-between w-full gap-20 h-full py-[10vh]" ref={aboutRef}>
      <div className="h-fit">
        <div className="flex">
          {word1.map((char, index) => (
            <h2 key={index}>
              <RandomCharacter defaultValue={char} landingOffset={landingOffset} biasness={index / word1.length} height={windowHeight} />
            </h2>
          ))}
        </div>
        <div className="flex">
          {word2.map((char, index) => (
            <Heading key={index}>
              <RandomCharacter defaultValue={char} landingOffset={landingOffset} biasness={index / word2.length} height={windowHeight} />
            </Heading>
          ))}
        </div>
        <div className="flex">
          {word3.map((char, index) => (
            <Heading key={index}>
              <RandomCharacter defaultValue={char} landingOffset={landingOffset} biasness={index / word3.length} height={windowHeight} />
            </Heading>
          ))}
        </div>
      </div>
      <div className="h-fit mt-auto w-full lg:w-[30vw] ml-auto mb-[30px] flex flex-col gap-12">
        <Heading2 className="text-[#F5F5F5] indent-[100px]">
          {
            "I am an aspiring Web Developer with a keen interest in front-end development, currently proficient in HTML, CSS and Javascript. I am excited about the opportunity to contribute to a team and work on real-world projects. My goal is to grow as a developer and create engaging and accessible web experiences."
          }
        </Heading2>
        <div className="w-fit ml-auto">
          <Button text={"CONTACT ME"} onClick={handleContactScroll} />
        </div>
      </div>
    </div>
  );
}

export default About;
