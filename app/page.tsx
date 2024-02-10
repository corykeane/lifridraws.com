import Image from "next/image";
import Link from "next/link";
import { VideoBg } from "./_components/VideoBg";
import { home_hero } from "./_data/data";

export default function Home() {
  return (
    <>
      {/* hero */}
      <section className="home_hero relative flex mb-1 overflow-hidden max-xl:h-auto ">
        <div className="container mx-auto max-w-screen-lg py-16 px-3 relative grid grid-cols-2 gap-3 gap-x-14 content-center items-center z-30 max-xl:grid-cols-1 max-xl:justify-items-center">
          <div className="hero_left flex flex-col gap-1 ">
            <div>
              <img
                src={home_hero.left.hero_avatar}
                className="max-xl:h-3/6 max-xl:w-96 max-xl:mx-auto max-sm:w-72"
                alt="lifri-avatar.png"
              />
            </div>
            <div className="social_medies flex align-middle gap-4 max-sm:flex-row max-xl:justify-center">
              {home_hero.left.socail_links.map(({ alt, href, icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  className="socialmedia "
                >
                  <img className="max-sm:w-10 w-12" src={icon} alt={alt} />
                </a>
              ))}
            </div>
          </div>
          <div className="hero_right -mt-16 max-xl:mt-0 max-xl:text-center ">
            <h1 className="text-4xl font-medium text-black">
              {home_hero.right.heading}{" "}
            </h1>
            <p className="my-4 text-lg">{home_hero.right.desc} </p>
            <div className="btn_hero flex align-middle gap-5  max-xl:justify-center max-sm:flex-col max-sm:items-center">
              {home_hero.right.buttons.map(({ href, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="btn rounded-none border-black border-2 py-2 px-4 shadow-[0_3px_0_rgb(0,0,0)] hover:shadow-[0_2px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all "
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <VideoBg />
      </section>
    </>
  );
}
