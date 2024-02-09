import Link from "next/link";
import { NavLinks } from "../_data/data";

export default function Header() {
  return (
    <header>
      <div className="container max-w-screen-lg mx-auto nav ">
        <nav className="flex justify-between align-middle py-5">
          <span className="text-2xl">LiFri Draws</span>
          <div className="flex justify-between align-middle gap-4 text-lg">
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
        </nav>
      </div>
    </header>
  );
}
