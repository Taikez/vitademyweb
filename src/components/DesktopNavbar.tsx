import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/NavigationMenu";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/Button";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

function DesktopNavbar() {
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
        <NavigationMenu className="text-2xl">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>VitaLearn</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {learnings.map((learning) => (
                    <ListItem
                      key={learning.title}
                      title={learning.title}
                      href={learning.href}
                    >
                      {learning.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>VitaConnect</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {events.map((event) => (
                    <ListItem
                      key={event.title}
                      title={event.title}
                      href={event.href}
                    >
                      {event.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>VitaShop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {shops.map((shop) => (
                    <ListItem
                      key={shop.title}
                      title={shop.title}
                      href={shop.href}
                    >
                      {shop.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>VitaStory</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {stories.map((story) => (
                    <ListItem
                      key={story.title}
                      title={story.title}
                      href={story.href}
                    >
                      {story.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex gap-5">
        <ModeToggle></ModeToggle>
        <SignedOut>
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default DesktopNavbar;
