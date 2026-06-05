import CategoriesMenu from "../CategoriesMenu";
import { FaBars } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LetsMeetModal from "../LetsMeetModal";
function CategoryBar() {

const [showCategories, setShowCategories] = useState(false);
const navigate = useNavigate();
const [showMeet, setShowMeet] = useState(false);

  return (
    <>
<div className="fixed top-20 left-0 w-full z-40 hidden md:flex items-center bg-red-600 text-white h-14 px-10">
  {/* LEFT */}
  <div onClick={() => setShowCategories(!showCategories)} className="flex items-center gap-3 cursor-pointer">

    <FaBars className="text-[20px]" />

    <span className="font-medium text-[18px]">
      Categories
    </span>

  </div>

  {/* CENTER */}
  <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-12 text-[16px]">

    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/sellwithus")}>

      <MdOutlineMail className="text-[20px]" />

      <span>Sell With Us</span>

    </div>

    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/requestquote")}>

      <MdOutlineMail className="text-[20px]" />

      <span>Request a Quote</span>

    </div>

    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowMeet(true)}>

      <FaRegCalendarAlt className="text-[20px]" />

      <span>Let’s Meet</span>

    </div>

  </div>

  {/* RIGHT */}
  <div className="ml-auto flex items-center gap-10 text-[16px]">

    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/aboutus")}>

      <FaUsers className="text-[20px]" />

      <span>About Us</span>

    </div>

    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/support")}>

      <MdSupportAgent className="text-[20px]" />

      <span>Support</span>

    </div>

  </div>

</div>
  {showCategories && <CategoriesMenu onClose={() => setShowCategories(false)} />}
    {showMeet && <LetsMeetModal onClose={() => setShowMeet(false)} />}
</>
  );
}

export default CategoryBar;