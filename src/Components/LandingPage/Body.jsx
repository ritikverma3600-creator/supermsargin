import heroImage from "./../../assets/hero.png";
import underlineImage from "./../../assets/underline.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import VideoModal from "../VideoModal";
function Body() {
    const navigate = useNavigate();
const [showVideo, setShowVideo] = useState(false);

  return (
    <>
    <section className="pt-[136px] w-full flex items-center justify-between pl-12 py-5 bg-white ">
      
      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-2 md:max-w-[62%]">
        
        {/* HEADING */}
        <div>
          <h1 className="text-[36px] md:text-[48px] font-bold text-[#1a1456] leading-tight">
            Selected{" "}
            <span className="relative inline-block">
              Wholesale 
              <img
                src={underlineImage}
                alt=""
                className="absolute left-0 -bottom-3 w-full"
              />
              
            </span>
            {" "}Products
            <br />
            India's Top eB2B Platform
          </h1>
        </div>

        {/* SUBTEXT */}
        <p className="text-gray-500 text-[30px] leading-relaxed">
          Every business need fulfilled, with the right <br />
          products, trusted names, and fast delivery
        </p>

        {/* BUTTONS */}
        <div className="flex items-center gap-4 mt-2 cursor-pointer" >
          <button onClick={() => navigate("/register")} className="cursor-pointer bg-[#1a1456] text-white px-8 py-3 rounded-sm text-[16px] font-medium hover:bg-[#2a2466]">
            Sign up to buy
          </button>
          <button onClick={() => setShowVideo(true)} className="cursor-pointer flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-3 rounded-sm text-[16px] font-medium hover:bg-gray-50">
            <span className="text-red-500 text-[20px]">▶</span>
            Watch Demo
          </button>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden md:block flex-shrink-0 w-[38%]">
        <img
          src={heroImage}
          alt="Hero"
          className="object-contain"
        />
      </div>

    </section>
    {showVideo && (
  <VideoModal
    onClose={() => setShowVideo(false)}
    videoUrl="https://www.youtube.com/embed/eXMhSb4WqZM?autoplay=1"
  />
)}
    </>
  );
}

export default Body;