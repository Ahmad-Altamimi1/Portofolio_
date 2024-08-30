import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiLinkedinLine,
  RiPinterestLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/ahmad-altamimi-/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ahmadaltameme44/",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/AhmadAltmeme911/",
    Icon: RiFacebookLine,
  },
  // {
  //   name: "Dribbble",
  //   link: "https://dribbble.com",
  //   Icon: RiDribbbleLine,
  // },
  // {
  //   name: "Pinterest",
  //   link: "https://pinterest.com",
  //   Icon: RiPinterestLine,
  // },
  {
    name: "Github",
    link: "https://github.com/Ahmad-Altamimi1",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-75`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
