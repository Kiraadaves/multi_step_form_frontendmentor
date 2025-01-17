import React from "react";
import { Foodieland } from "../components/svg";
import Link from "next/link";
import { Socials } from "../components/links";

const Navigation = () => {
  return (
    <div className="bg-[#ffffff] flex pb-6 px-[68px] justify-between items-center border-b  border-solid border-[#0000001A]">
      <Link href={"/"}>
        <Foodieland />
      </Link>
      <nav>
        <ul className="flex gap-12 text-[#000000] font-medium text-base">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#recipe">Recipe</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/aboutus">About us</Link>
          </li>
        </ul>
      </nav>
      <Socials />
    </div>
  );
};

export default Navigation;
