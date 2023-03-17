import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-title">Hi my name is</h1>
      <h2 className="hero-title-large">Kishan Sheth</h2>
      <h3 className="hero-title-large">I craft things for the web</h3>
      <p className="hero-text">
        I&apos;m a software engineer with expertise in creating top-notch
        digital experiences. My current focus is on developing products that are
        accessible and centered around user needs, as part of the team at&nbsp;
        <Link href="https://rapidops.com" target="_blank" className="link">
          Rapidops.
        </Link>
        &nbsp;Additionally, I share my knowledge and passion with the world
        through my YouTube channel, where I demonstrate how to build full-stack
        applications. I am also working on a new project called&nbsp;
        <Link className="link" target="_blank" href="https://frontendvita.com">
          FrontendVita,
        </Link>
        &nbsp;aimed at enhancing frontend development skills.
      </p>
      <Button
        text="Check out my course"
        link="https://youtube.com/kishansheth21"
      />
    </div>
  );
}

export default Hero;
