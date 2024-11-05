
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="container pt-6 ">
      <div className="flex justify-between items-center">
        <Image src="/logo (1).png" width={50} height={50} alt="logo" />
        <ul className="md:flex gap-8 items-center font-bold text-[18px] pb-3 hidden">
        <li>
             <Link href="/">Home</Link>
        </li>
         <li>
        <Link href="/about">About</Link>
        </li>
         <li>
          <Link href="/contact">Contact</Link>
          </li>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-3xl">
            SignUp
          </button>
        </ul>
      <Sheet >
      <SheetTrigger className="md:hidden text-orange-600 "  > <AiOutlineMenu/></SheetTrigger>
       <SheetContent>
       <Image src="/logo (1).png" width={50} height={50} alt="logo" />
       <ul className="space-y-6 font-bold text-[25px]">
        <li>
        <Link href="/">Home</Link>
      </li>
      <li>
      <Link href="/about">About</Link>
</li>
<li>
  <Link href="/contact">Contact</Link>
</li>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-3xl">
            SignUp
          </button>
        </ul>
  </SheetContent>
</Sheet>
      </div>
    </nav>
  );
};

export default Navbar;