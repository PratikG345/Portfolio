import loadBgBottom from "../../assets/load-bg-bottom.png";

function Footer() {
  return (
    <div className="relative w-full h-[50vh] bg-[#c3923a] ">
      <img src={loadBgBottom} alt="Background" className="absolute inset-0 w-full object-contain mb-auto" />
    </div>
  );
}

export default Footer;
