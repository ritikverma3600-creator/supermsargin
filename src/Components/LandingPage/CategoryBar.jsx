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

    <FaBars className="text-xl" />

    <span className="font-medium text-lg">
      Categories
    </span>

  </div>

  {/* CENTER */}
  <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-12 text-base">

    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/sellwithus")}>

      <MdOutlineMail className="text-xl" />

      <span>Sell With Us</span>

    </div>

    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/requestquote")}>

      <MdOutlineMail className="text-xl" />

      <span>Request a Quote</span>

    </div>

    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowMeet(true)}>

      <FaRegCalendarAlt className="text-xl" />

      <span>Let’s Meet</span>

    </div>

  </div>

  {/* RIGHT */}
  <div className="ml-auto flex items-center gap-10 text-base">

    <div className="flex items-center gap-2 cursor-pointer">

      <FaUsers className="text-xl" />

      <span>About Us</span>

    </div>

    <div className="flex items-center gap-2 cursor-pointer">

      <MdSupportAgent className="text-xl" />

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