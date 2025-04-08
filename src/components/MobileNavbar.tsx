import React from "react";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { ReactTyped } from "react-typed";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/Drawer";

const learnings: { title: string; href: string; description: string }[] = [
  {
    title: "Modules",
    href: "/learn/modules",
    description:
      "Interactive lessons that simplify math, science, and more with engaging activities.",
  },
  {
    title: "Articles",
    href: "/learn/articles",
    description:
      "Explore thought-provoking insights, educational content, and inspiring stories.",
  },
  {
    title: "Math Challenges",
    href: "/learn/challenges",
    description:
      "Sharpen your mind with fun math problems, brain teasers, and logic puzzles.",
  },
  {
    title: "Curiosity Corner",
    href: "/learn/curiosity",
    description:
      "Uncover mind-blowing facts, intriguing questions, and fascinating discoveries.",
  },
];

const events: { title: string; href: string; description: string }[] = [
  {
    title: "Workshops",
    href: "/event/workshops",
    description:
      "Hands-on sessions where you can experiment, build, and learn through exciting activities.",
  },
  {
    title: "Bootcamps",
    href: "/event/bootcamps",
    description:
      "Intensive programs designed to boost your skills through focused learning and practice.",
  },
  {
    title: "Seminars",
    href: "/event/seminars",
    description:
      "Engaging talks and discussions led by experts to expand your knowledge and insights.",
  },
];

function MobileNavbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-6 items-center">
        <Link href="/">
          <Image
            src="/logo-small.png"
            width={30}
            height={20}
            alt="Vitademy Logo"
          ></Image>
        </Link>
      </div>
      <div className="flex gap-5 items-center">
        <ModeToggle></ModeToggle>
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent>
            <div className="border-b-2 p-10">
              <h1 className="font-bold text-xl">
                <ReactTyped
                  strings={["Vitademy.", "ヴィタデミー.", "비타데미."]}
                  typeSpeed={60}
                  backSpeed={70}
                  loop
                />
              </h1>
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="py-2 px-10">
                <AccordionTrigger className="text-md">
                  VitaLearn
                </AccordionTrigger>
                <AccordionContent className="AccordionContent">
                  {learnings.map((learning) => (
                    <div className="px-10 py-5">
                      <a href={learning.href}>{learning.title}</a>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="py-2 px-10">
                <AccordionTrigger className="text-md">
                  VitaConnect
                </AccordionTrigger>
                <AccordionContent className="AccordionContent">
                  {events.map((event) => (
                    <div className="px-10 py-5">
                      <a href={event.href}>{event.title}</a>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <a href="">
              <div className="py-5 px-10 border-t-2">
                <h1 className="text-md">VitaShop</h1>
              </div>
            </a>
            <a href="">
              <div className="py-5 px-10 border-t-2 border-b-2">
                <h1 className="text-md">VitaStory</h1>
              </div>
            </a>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default MobileNavbar;
