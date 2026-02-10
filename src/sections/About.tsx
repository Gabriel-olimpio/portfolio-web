/** @format */
import starIcon from "@/assets/icons/star.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import javaScriptIcon from "@/assets/icons/square-js.svg";
import htmlIcon from "@/assets/icons/html5.svg";
import cssIcon from "@/assets/icons/css3.svg";
import reactIcon from "@/assets/icons/react.svg";
import chromeIcon from "@/assets/icons/chrome.svg";
import githubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: javaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: htmlIcon,
  },
  {
    title: "CSS3",
    iconType: cssIcon,
  },
  {
    title: "React",
    iconType: reactIcon,
  },
  {
    title: "Chrome",
    iconType: chromeIcon,
  },
  {
    title: "Github",
    iconType: githubIcon,
  },
];

const hobbies = [
  {
    title: "Pizza",
    emoji: "🍕",
    left: "5%",
    top: "5%",
  },
  {
    title: "Cooking",
    emoji: "👨‍🍳",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Bike",
    emoji: "🚴",
    left: "70%",
    top: "45%",
  },
  {
    title: "Gym",
    emoji: "🏋",
    left: "5%",
    top: "65%",
  },
];

export const AboutSection = () => {
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who i am, what i do and what inspires me."
        />

        <div className="mt-20 flex flex-col gap-6">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} className="" alt="book image" />
              </div>
            </Card>

            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft digital
                experiences."
                className=""
              />
              <ToolboxItems items={toolBoxItems} className="" />
              <ToolboxItems
                items={toolBoxItems}
                className="mt-6 "
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the code."
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}>
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map image"
                className="h-full w-full object-cover object-left-top"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400
            after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={smileMemoji}
                  alt="smile memoji image"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
