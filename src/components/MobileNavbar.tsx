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
    title: "Seminars",
    href: "/event/seminars",
    description:
      "Engaging talks and discussions led by experts to expand your knowledge and insights.",
  },
];

const shops: { title: string; href: string; description: string }[] = [
  {
    title: "Products & Services",
    href: "/shop/products-and-services",
    description:
      "Everything we offer — from brain-boosting content to cool community perks.",
  },
  {
    title: "Merch",
    href: "/shop/merch",
    description:
      "We have merch! 🎉 Wear your love for learning loud and proud!",
  },
];

const stories: { title: string; href: string; description: string }[] = [
  {
    title: "About Vitademy",
    href: "/story/about-vitademy",
    description:
      "Get to know the people, passion, and purpose behind Vitademy.",
  },
  {
    title: "Contact",
    href: "/story/contact",
    description: "Questions, feedback, or just want to say hi? We’re all ears.",
  },
  {
    title: "FAQ",
    href: "/story/faq",
    description:
      "Got questions? We’ve got answers — quick, clear, and helpful.",
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
              <AccordionItem value="item-3" className="py-2 px-10">
                <AccordionTrigger className="text-md">
                  VitaShop
                </AccordionTrigger>
                <AccordionContent className="AccordionContent">
                  {shops.map((shop) => (
                    <div className="px-10 py-5">
                      <a href={shop.href}>{shop.title}</a>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="py-2 px-10">
                <AccordionTrigger className="text-md">
                  VitaStory
                </AccordionTrigger>
                <AccordionContent className="AccordionContent">
                  {stories.map((story) => (
                    <div className="px-10 py-5">
                      <a href={story.href}>{story.title}</a>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

export default MobileNavbar;
