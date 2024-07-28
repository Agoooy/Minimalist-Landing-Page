import React from "react";
import Title from "../ui/title";
import AboutCard from "../component/about-card";
import Badge from "../ui/badge";

const AboutSection = () => {
  return (
    <section className="flex flex-col w-full max-w-4xl items-center" id="about">
      <Title
        title="About"
        subtitle="Get to know me better"
        className="mb-6 md:mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 w-full gap-y-8 gap-x-0 md:gap-x-8">
        <div className="col-span-2 flex flex-col">
          <p className="text-base md:text-base text-muted-foreground">
            Hi! I'm Yoga, a Human Resource Management student
            with a strong passion for programming.
            <span className="h-6 block" />
            I've been honing my skills for nearly 3 years, starting from when the COVID-19 pandemic hit.
            During this time, I've had the opportunity to work with various clients and companies, helping
            them achieve their goals through unique and creative digital experiences.
            <span className="h-6 block" />
            While I love coding in general, frontend development is my
            specialty, along with design and product development
            <span className="h-6 block" />
            Today, I focus on creating conversion-focused, SEO-optimized, and visually 
            appealing websites for businesses and individuals, helping them stand out from the crowd.
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-4 md:gap-6">
          <AboutCard />
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className="w-fit text-sm px-2 py-1">Figma</Badge>
            <Badge className="w-fit text-sm px-2 py-1">React</Badge>
            <Badge className="w-fit text-sm px-2 py-1">Vercel</Badge>
            <Badge className="w-fit text-sm px-2 py-1">Next.js</Badge>
            <Badge className="w-fit text-sm px-2 py-1">Webflow</Badge>
            <Badge className="w-fit text-sm px-2 py-1">Tailwind</Badge>
            <Badge className="w-fit text-sm px-2 py-1">TypeScript</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
