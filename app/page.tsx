'use client'
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineX } from "react-icons/ai"
import { PiPawPrintFill } from 'react-icons/pi'
import BtnWhiteStyle from "./components/BtnWhiteStyle"
import { useState } from "react";
import Link from "next/link";

function Home() {
const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" w-70 h-70 flex items-center justify-center relative">
      <BtnWhiteStyle label="menu" onClick={() => setIsOpen(prev => !prev)} active={isOpen}>
        <PiPawPrintFill className="text-red-500" size={25} />
      </BtnWhiteStyle>
      
      <BtnWhiteStyle show={isOpen} label="child" offset={{x: -30, y: -80}} styled={{
        position: 'absolute'
      }} linkName="Facebook">
        <Link href="https://www.facebook.com/dai.rewahandi" target="_blank">
          <AiOutlineFacebook className="text-blue-600" size={25} />
        </Link>
      </BtnWhiteStyle>
      
      <BtnWhiteStyle show={isOpen} label="child" offset={{x: 30, y: -80}} styled={{
        position: 'absolute'
      }}>
        <Link href="https://www.instagram.com/dai.rewahandi" target="_blank">
          <AiOutlineInstagram className="text-orange-500" size={25}/>
        </Link>
      </BtnWhiteStyle>
      
      <BtnWhiteStyle show={isOpen} label="child" offset={{x: -60, y: -30}} styled={{
        position: 'absolute',
      }}>
        <Link href="https://www.x.com/dai_rewahandi" target="_blank">
          <AiOutlineX className="text-indigo-950" size={25}/>
        </Link>
      </BtnWhiteStyle>
      
      <BtnWhiteStyle show={isOpen} label="child" offset={{x: 60, y: -30}} styled={{
        position: 'absolute',
      }}>
        <Link href="https://www.github.com/dai-rewahandi" target="_blank">
          <AiOutlineGithub className="text-gray-800 dark:text-amber-50" size={25} />
        </Link>
      </BtnWhiteStyle>
    </div>
  )
}

export default Home