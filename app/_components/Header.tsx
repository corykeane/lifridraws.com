import Link from "next/link";
import { NavLinks } from "../_data/data";
import { VscThreeBars } from "react-icons/vsc";

export default function Header() {
  return (
    <header>
      <div className="container max-w-screen-lg mx-auto nav ">
        <nav className="flex justify-between align-middle py-5 max-lg:px-8">
          <span className="text-2xl">LiFri Draws</span>
          <div className="flex justify-between align-middle gap-4 text-lg max-xl:hidden">
            {NavLinks.map(({ href, title }, index) => (
              <Link
                key={index}
                className=" hover:text-slate-400 transition-colors"
                href={href}
              >
                {title}
              </Link>
            ))}
          </div>
          <VscThreeBars className="visible xl:hidden" size={40} />
        </nav>
      </div>
    </header>
  );
}
