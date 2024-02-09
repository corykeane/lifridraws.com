import Image from "next/image";
import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <header>
        <div className="container max-w-screen-lg mx-auto nav ">
          <nav className="flex justify-between align-middle py-5">
            <span className="text-2xl">LiFri Draws</span>
            <div className="flex justify-between align-middle gap-4 text-lg">
              <Link
                className=" hover:text-slate-400 transition-colors"
                href={"/about"}
              >
                About
              </Link>
              <Link href={"/my-services"}>My Services</Link>
              <Link href={"/my-work"}>My Work</Link>
              <Link href={"/contact"}>Contact</Link>
            </div>
          </nav>
        </div>

        {/* hero */}
        <section className="home_hero relative flex h-screen mb-1 overflow-hidden ">
          <div className="container mx-auto max-w-screen-lg  relative grid grid-cols-2 gap-3 gap-x-14 content-center items-center z-30">
            <div className="hero_left flex flex-col gap-1 ">
              <img src={"/images/lifri-avatar.png"} alt="lifri-avatar.png" />
              <div className="social_medies flex align-middle gap-4">
                <a
                  href={"https://www.instagram.com/lifri_draws"}
                  target="_blank"
                  className="socialmedia "
                >
                  <Image
                    width={60}
                    height={50}
                    src={"/images/icons8-instagram-375.png"}
                    alt={"lifri instagram"}
                  />
                </a>
                <a
                  href={"https://twitter.com/lifri_drawss"}
                  target="_blank"
                  className="socialmedia "
                >
                  <Image
                    width={60}
                    height={50}
                    src={"/images/icons8-twitter-375.png"}
                    alt={"lifri twitter (X)"}
                  />
                </a>
                <a
                  href={
                    "https://www.youtube.com/channel/UCNSdBhhLxI7CaDvqtophBqw"
                  }
                  target="_blank"
                  className="socialmedia "
                >
                  <Image
                    width={60}
                    height={50}
                    src={"/images/icons8-youtube-375.png"}
                    alt={"lifri youtube"}
                  />
                </a>
                <a
                  href={"https://www.tiktok.com/@lifri_draws"}
                  target="_blank"
                  className="socialmedia "
                >
                  <Image
                    width={60}
                    height={50}
                    src={"/images/icons8-tiktok-375.png"}
                    alt={"lifri TikTok"}
                  />
                </a>
                <a
                  href={
                    "https://www.linkedin.com/in/lucas-am%C3%A9ndola-39214b201/"
                  }
                  target="_blank"
                  className="socialmedia "
                >
                  <Image
                    width={60}
                    height={50}
                    src={"/images/icons8-linkedin-375.png"}
                    alt={"lifri linkedin"}
                  />
                </a>
              </div>
            </div>
            <div className="hero_right -mt-16">
              <h1 className="text-4xl font-medium text-black">
                2D Artist & Animator
              </h1>
              <p className="my-4 text-lg">
                2D Artist & Animator Extraordinaire! 🎨✨ Dive into a World of
                Infinite Possibilities. Join Our Vibrant Community of
                Visionaries and Innovators. Let&apos;s Craft, Captivate, and
                Inspire Together, Transforming Ideas into Mesmerizing Works of
                Art. Your Journey to Artistic Greatness Starts Here!
              </p>
              <div className="btn_hero flex align-middle gap-5">
                <Link
                  href={"/"}
                  className="btn rounded-none border-black border-2 py-2 px-4 shadow-[0_3px_0_rgb(0,0,0)] hover:shadow-[0_2px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all "
                >
                  Work With Me
                </Link>
                <Link
                  href={"/"}
                  className="btn rounded-none bg-white border-black border-2 py-2 px-4 shadow-[0_3px_0_rgb(0,0,0)] hover:shadow-[0_2px_0px_rgb(0,0,0)] text-black ease-out hover:translate-y-1 transition-all "
                >
                  See My Work
                </Link>
              </div>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          >
            <source src="/images/website-bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      </header>
    </main>
  );
}
