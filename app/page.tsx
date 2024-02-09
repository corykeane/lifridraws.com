import Image from "next/image";
import Link from "next/link";
import { VideoBg } from "./_components/VideoBg";
import { home_hero } from "./_data/data";

export default function Home() {
  return (
    <>
      {/* hero */}
      <section className="home_hero relative flex h-screen mb-1 overflow-hidden ">
        <div className="container mx-auto max-w-screen-lg  relative grid grid-cols-2 gap-3 gap-x-14 content-center items-center z-30">
          <div className="hero_left flex flex-col gap-1 ">
            <img src={home_hero.left.hero_avatar} alt="lifri-avatar.png" />
            <div className="social_medies flex align-middle gap-4">
              {home_hero.left.socail_links.map(({ alt, href, icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  className="socialmedia "
                >
                  <Image width={60} height={50} src={icon} alt={alt} />
                </a>
              ))}
            </div>
          </div>
          <div className="hero_right -mt-16">
            <h1 className="text-4xl font-medium text-black">
              {home_hero.right.heading}{" "}
            </h1>
            <p className="my-4 text-lg">{home_hero.right.desc} </p>
            <div className="btn_hero flex align-middle gap-5">
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
