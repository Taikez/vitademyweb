import React from "react";
import { Button } from "./ui/Button";
import Link from "next/link";
import Image from "next/image";

const learnings: { title: string; href: string }[] = [
  {
    title: "Modules",
    href: "/learn/modules",
  },
  {
    title: "Articles",
    href: "/learn/articles",
  },
  {
    title: "Math Challenges",
    href: "/learn/challenges",
  },
  {
    title: "Curiosity Corner",
    href: "/learn/curiosity",
  },
];

const events: { title: string; href: string }[] = [
  {
    title: "Workshops",
    href: "/event/workshops",
  },
  {
    title: "Seminars",
    href: "/event/seminars",
  },
];

const productTypes: { title: string; href: string }[] = [
  {
    title: "Product & Services",
    href: "/shop/product-and-services",
  },
  {
    title: "Merch",
    href: "/shop/merch",
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

export default function Footer() {
  return (
    <div>
      <div className="border-t dark:border-t-white px-5 md:px-20 py-10">
        <div className="flex justify-end">
          <Button className="inline-flex gap-2 items-center justify-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-linecap="square"
                stroke-miterlimit="10"
                stroke-width="48"
                d="M112 328l144-144 144 144"
              ></path>
            </svg>
            Go to Top
          </Button>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="font-bold">VitaLearn</h1>
            {learnings.map((learning) => (
              <Link className="hover:underline" href={learning.href}>
                {learning.title}
              </Link>
            ))}
          </div>
          <div className="mt-12 md:mt-0 flex flex-col gap-4 md:gap-6">
            <h1 className="font-bold">VitaEvent</h1>
            {events.map((event) => (
              <Link className="hover:underline" href={event.href}>
                {event.title}
              </Link>
            ))}
          </div>
          <div className="mt-12 md:mt-0 flex flex-col gap-4 md:gap-6">
            <h1 className="font-bold">VitaShop</h1>
            {productTypes.map((productType) => (
              <Link className="hover:underline" href={productType.href}>
                {productType.title}
              </Link>
            ))}
          </div>
          <div className="mt-12 md:mt-0 flex flex-col gap-4 md:gap-6">
            <h1 className="font-bold">VitaStory</h1>
            {stories.map((story) => (
              <Link className="hover:underline" href={story.href}>
                {story.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t dark:border-t-white px-5 md:px-20 py-10">
        <div className="flex gap-5 items-center">
          <Link href="/">
            <Image
              src="/logo-small.png"
              width={30}
              height={20}
              alt="Vitademy Logo"
            ></Image>
          </Link>
          <h1>© 2025 Vitademy. All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
}
